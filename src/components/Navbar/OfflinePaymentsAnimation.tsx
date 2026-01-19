"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import qrScanAnimation from "../../assests/Scan QR Mobile Phone.json";

interface OfflinePaymentsAnimationProps {
  isVisible: boolean;
}

export function OfflinePaymentsAnimation({
  isVisible,
}: OfflinePaymentsAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (lottieRef.current) {
      if (isVisible) {
        lottieRef.current.play();
      } else {
        lottieRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={qrScanAnimation}
        loop={true}
        autoplay={isVisible}
        className="w-full h-full"
      />
    </motion.div>
  );
}

