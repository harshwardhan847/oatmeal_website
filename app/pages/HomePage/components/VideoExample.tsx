import { useScroll, motion, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import { VIDEO_DEMO } from "~/lib/assets";
type Props = {};

const VideoExample = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rawScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  // 👉 Add smoothing here
  const scale = useSpring(rawScale, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  return (
    <motion.div
      style={{
        scale: scale,
      }}
      ref={ref}
      className="aspect-video max-w-7xl w-full h-full p-2 sm:p-4 mt-12 sm:mt-16 md:mt-24 rounded-lg overflow-hidden relative backdrop-blur-lg bg-white/20"
    >
      <video
        src={VIDEO_DEMO}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover rounded-lg"
      />
    </motion.div>
  );
};

export default VideoExample;
