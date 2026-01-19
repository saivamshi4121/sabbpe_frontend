"use client";

export function BackgroundShapes() {
  const shapes = [
    {
      className: "w-[600px] h-[600px] -top-52 -left-52",
      background: "var(--text-primary)",
      delay: "0s",
    },
    {
      className: "w-[500px] h-[500px] top-1/5 -right-36",
      background: "var(--text-secondary)",
      delay: "-4s",
    },
    {
      className: "w-[400px] h-[400px] bottom-[10%] left-[10%]",
      background: "var(--text-primary)",
      delay: "-8s",
    },
    {
      className: "w-[350px] h-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      background: "var(--text-secondary)",
      delay: "-12s",
    },
    {
      className: "w-[450px] h-[450px] -bottom-[100px] right-[10%]",
      background: "var(--text-primary)",
      delay: "-16s",
    },
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`absolute rounded-full blur-[60px] opacity-15 max-md:blur-[40px] max-md:opacity-10 ${shape.className}`}
          style={{
            background: shape.background,
            animation: `float 20s ease-in-out infinite`,
            animationDelay: shape.delay,
          }}
        >
          <style>{`
            @keyframes float {
              0%, 100% {
                transform: translate(0, 0) scale(1);
              }
              33% {
                transform: translate(30px, -30px) scale(1.1);
              }
              66% {
                transform: translate(-20px, 20px) scale(0.9);
              }
            }
          `}</style>
        </div>
      ))}
    </div>
  );
}

