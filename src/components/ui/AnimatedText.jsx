import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AnimatedText = React.forwardRef(
  (
    {
      text,
      textClassName,
      underlineClassName,
      underlineDuration = 2.4,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center",
          props.className,
        )}
      >
        <div className="relative inline-block">
          {/* TEXT */}
          <motion.h1
            className={cn(
              "text-4xl font-bold text-center relative z-10",
              textClassName,
            )}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            whileHover={{ scale: 1.02 }}
          >
            {text}
          </motion.h1>

          {/* UNDERLINE */}
          <motion.svg
            className={cn(
              "absolute left-0 -bottom-3 w-full h-5",
              underlineClassName,
            )}
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 0 15 Q 25 5 50 15 Q 75 25 100 15"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              animate={{
                pathLength: [0, 1],
              }}
              transition={{
                duration: underlineDuration * 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1.2,
              }}
            />
          </motion.svg>
        </div>
      </div>
    );
  },
);

AnimatedText.displayName = "AnimatedText";

export { AnimatedText };
