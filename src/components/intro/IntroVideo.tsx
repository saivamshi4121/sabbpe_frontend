"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * IntroVideo - Full-screen intro video splash screen
 * 
 * Behavior:
 * - Plays full intro video from /public/intro.mp4
 * - Closes ONLY on: video ended OR user clicks Skip
 * - Uses sessionStorage to show only once per tab session
 * - Blocks scroll while visible, restores after close
 * - Comprehensive debug logging for troubleshooting
 */
export function IntroVideo() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const videoStartTimeRef = useRef<number>(0);
  const hasPlayedRef = useRef<boolean>(false);

  useEffect(() => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] [IntroVideo] Component mounted`);

    // Only run this effect on client side after hydration
    setIsMounted(true);

    // Check if intro already seen in this session
    const introSeen = sessionStorage.getItem("sabbpe_intro_seen");
    console.log(
      `[${timestamp}] [IntroVideo] SessionStorage check - sabbpe_intro_seen:`,
      introSeen
    );

    if (introSeen === "true") {
      console.log(
        `[${timestamp}] [IntroVideo] Intro already seen, skipping overlay`
      );
      setIsVisible(false);
      return;
    }

    // Show intro - disable body scroll
    console.log(`[${timestamp}] [IntroVideo] Showing intro, blocking scroll`);
    setIsVisible(true);
    document.body.style.overflow = "hidden";

    const videoElement = videoRef.current;
    if (!videoElement) {
      console.warn(`[${timestamp}] [IntroVideo] Video ref not available`);
      return;
    }

    // Track video loading
    const handleLoadedMetadata = () => {
      const duration = videoElement.duration;
      const ts = new Date().toLocaleTimeString();
      console.log(
        `[${ts}] [IntroVideo] Video metadata loaded - duration: ${duration}s`
      );

      // Safety check: if duration is 0 or invalid, it's a loading issue
      if (duration <= 0 || !isFinite(duration)) {
        console.warn(
          `[${ts}] [IntroVideo] Invalid duration (${duration}), video may not be ready`
        );
        setVideoDuration(0);
        return;
      }

      setVideoDuration(duration);
    };

    // Track when video actually starts playing
    const handlePlay = () => {
      const ts = new Date().toLocaleTimeString();
      console.log(`[${ts}] [IntroVideo] Video started playing`);
      setIsPlaying(true);
      videoStartTimeRef.current = Date.now();
      hasPlayedRef.current = true;
    };

    // Track when video pauses (could be user, end, or error)
    const handlePause = () => {
      const ts = new Date().toLocaleTimeString();
      console.log(`[${ts}] [IntroVideo] Video paused`);
      setIsPlaying(false);
    };

    // Main handler: video ended naturally
    const handleVideoEnd = () => {
      const ts = new Date().toLocaleTimeString();
      const currentTime = videoRef.current?.currentTime || 0;
      const duration = videoRef.current?.duration || 0;
      const playDuration = Date.now() - videoStartTimeRef.current;

      console.log(
        `[${ts}] [IntroVideo] Video ended event fired - currentTime: ${currentTime}s, duration: ${duration}s, played for: ${playDuration}ms, hasPlayed: ${hasPlayedRef.current}`
      );

      // Safety checks before closing:
      // 1. Video must have actually played (not just ended without playing)
      // 2. Video must have played for at least 1 second
      // 3. Current time must be close to duration (within 1 second)
      if (!hasPlayedRef.current) {
        console.warn(
          `[${ts}] [IntroVideo] Video ended but never played - ignoring`
        );
        return;
      }

      if (playDuration < 1000) {
        console.warn(
          `[${ts}] [IntroVideo] Video played for less than 1 second (${playDuration}ms) - ignoring premature end`
        );
        return;
      }

      if (duration <= 0 || !isFinite(duration)) {
        console.warn(
          `[${ts}] [IntroVideo] Invalid video duration (${duration}) - ignoring end event`
        );
        return;
      }

      if (Math.abs(currentTime - duration) > 1) {
        console.warn(
          `[${ts}] [IntroVideo] Video ended but not at end (${currentTime}/${duration}) - ignoring`
        );
        return;
      }

      console.log(`[${ts}] [IntroVideo] All checks passed, closing overlay`);
      handleClose("video_ended");
    };

    // Handle video errors
    const handleError = (e: Event) => {
      const ts = new Date().toLocaleTimeString();
      console.error(
        `[${ts}] [IntroVideo] Video error:`,
        videoElement.error?.message
      );
      // Auto-close on error so user can access site
      handleClose("video_error");
    };

    // Add all event listeners
    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    videoElement.addEventListener("play", handlePlay);
    videoElement.addEventListener("pause", handlePause);
    videoElement.addEventListener("ended", handleVideoEnd);
    videoElement.addEventListener("error", handleError);

    // Fallback timeout: if video doesn't fire ended event within expected time
    // Use a generous buffer (duration + 3 seconds)
    const setFallbackTimeout = () => {
      const duration = videoElement.duration || 0;
      const waitTime = duration > 0 ? (duration + 3) * 1000 : 30000; // Default 30s if duration unknown
      
      const ts = new Date().toLocaleTimeString();
      console.log(
        `[${ts}] [IntroVideo] Setting fallback timeout for ${(waitTime / 1000).toFixed(1)}s (video duration: ${duration}s)`
      );

      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }

      closeTimeoutRef.current = setTimeout(() => {
        const ts2 = new Date().toLocaleTimeString();
        console.warn(
          `[${ts2}] [IntroVideo] Fallback timeout triggered - closing to prevent user being stuck`
        );
        handleClose("timeout_fallback");
      }, waitTime);
    };

    // Set initial fallback timeout
    // If video duration is available, use it; otherwise use conservative 30s default
    if (videoElement.duration > 0 && isFinite(videoElement.duration)) {
      setFallbackTimeout();
    } else {
      // Duration not loaded yet, set it when metadata loads
      const originalLoadedMetadata = handleLoadedMetadata;
      const handleLoadedMetadataWrapped = () => {
        originalLoadedMetadata();
        setFallbackTimeout();
      };
      // Override the listener to also set fallback timeout
      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
      videoElement.addEventListener(
        "loadedmetadata",
        handleLoadedMetadataWrapped
      );
    }

    // Cleanup function
    return () => {
      const ts = new Date().toLocaleTimeString();
      console.log(`[${ts}] [IntroVideo] Component unmounting - cleaning up`);

      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
      videoElement.removeEventListener("play", handlePlay);
      videoElement.removeEventListener("pause", handlePause);
      videoElement.removeEventListener("ended", handleVideoEnd);
      videoElement.removeEventListener("error", handleError);

      // Clear any pending timeouts
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }

      // Re-enable scroll if still disabled
      if (document.body.style.overflow === "hidden") {
        console.log(`[${ts}] [IntroVideo] Restoring scroll on unmount`);
        document.body.style.overflow = "auto";
      }
    };
  }, []);

  const handleClose = (trigger: string) => {
    const ts = new Date().toLocaleTimeString();
    console.log(`[${ts}] [IntroVideo] Close triggered by: ${trigger}`);

    // Prevent multiple close calls
    if (isExiting) {
      console.log(`[${ts}] [IntroVideo] Already exiting, ignoring close call`);
      return;
    }

    // Stop video playback
    if (videoRef.current) {
      videoRef.current.pause();
      console.log(`[${ts}] [IntroVideo] Video paused`);
    }

    // Trigger fade-out animation
    console.log(`[${ts}] [IntroVideo] Starting fade-out animation`);
    setIsExiting(true);

    // Wait for animation to complete (0.5s) before unmounting and setting sessionStorage
    closeTimeoutRef.current = setTimeout(() => {
      const ts2 = new Date().toLocaleTimeString();
      console.log(
        `[${ts2}] [IntroVideo] Fade animation complete, unmounting overlay`
      );

      // Hide overlay from DOM
      setIsVisible(false);

      // Restore body scroll
      console.log(`[${ts2}] [IntroVideo] Restoring scroll`);
      document.body.style.overflow = "auto";

      // Mark intro as seen - ONLY after animation completes
      console.log(
        `[${ts2}] [IntroVideo] Setting sessionStorage - sabbpe_intro_seen=true`
      );
      sessionStorage.setItem("sabbpe_intro_seen", "true");

      console.log(`[${ts2}] [IntroVideo] Intro flow complete`);
    }, 500);
  };

  // Don't render anything if not mounted (prevents hydration mismatch)
  if (!isMounted) {
    return null;
  }

  // Don't render anything if not visible
  if (!isVisible) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="intro-overlay"
          className="fixed inset-0 z-[9999] bg-black"
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: isExiting ? 0 : 1,
            scale: isExiting ? 1.05 : 1,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Video Container */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <video
              ref={videoRef}
              src="/mail.mp4"
              autoPlay
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />

            {/* Skip Button - Top Right (hidden during exit) */}
            {!isExiting && (
              <motion.button
                onClick={() => handleClose("user_skip")}
                className="absolute top-6 right-6 z-50 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                Skip Intro →
              </motion.button>
            )}

            {/* Loading Text - Bottom Left (hidden during exit) */}
            {!isExiting && (
              <motion.div
                className="absolute bottom-8 left-8 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.8, duration: 0.3 }}
              >
                <p className="text-white text-sm font-medium tracking-wide">
                  Entering SabbPe...
                </p>
              </motion.div>
            )}

            {/* Debug Info - Bottom Center (optional, remove in production) */}
            {process.env.NODE_ENV === "development" && !isExiting && (
              <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 1.2, duration: 0.3 }}
              >
                <p className="text-white/40 text-xs text-center font-mono">
                  Duration: {videoDuration.toFixed(1)}s | Playing: {isPlaying ? "Yes" : "No"}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
