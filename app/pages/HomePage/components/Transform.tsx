import {
  getValueTransition,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import React from "react";
import { Button } from "~/components/ui/button";
import { VIDEO_ALT_1 } from "~/lib/assets";

type Props = {};

const Transform = (props: Props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const transition = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(transition.scrollYProgress, [0, 1], [300, -300]);

  const y = useSpring(rawY, {
    stiffness: 300,
    damping: 50,
    mass: 3,
  });

  const rawRotate = useTransform(
    transition.scrollYProgress,
    [0, 0.8],
    [20, -10],
  );
  const rawRotateRight = useTransform(
    transition.scrollYProgress,
    [0, 0.8],
    [-20, 10],
  );
  const rotateRight = useSpring(rawRotateRight, {
    stiffness: 300,
    damping: 50,
    mass: 2,
  });

  // 👉 Add smoothing here
  const rotate = useSpring(rawRotate, {
    stiffness: 300,
    damping: 50,
    mass: 2,
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-primary pt-24 flex flex-col items-center gap-8 justify-start"
    >
      <h4 className="p-1.5 scale-90 shadow bg-neutral-800 flex border border-neutral-500/20 items-center justify-center gap-2 w-min whitespace-nowrap rounded-xl pr-3 text-[12px] text-primary-foreground font-extralight">
        <span className="p-0.5 px-2 bg-linear-to-br border border-neutral-500/20 shadow from-purple-400 via-background to-orange-400 text-[11px] font-normal rounded-md text-primary">
          AI
        </span>
        <span className="text-primary-foreground/70 font-normal tracking-wide ">
          Nutrition Companion
        </span>
      </h4>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-none tracking-tighter text-primary-foreground text-center px-4">
        Understand your nutrition
        <br className="hidden sm:block" /> through data that makes sense.
      </h2>
      <p className="max-w-md -m-4 text-muted-foreground text-center text-pretty px-4">
        Oatmeal turns everyday meal decisions into measurable progress toward
        your goals.
      </p>
      <Button
        className="bg-background text-foreground cursor-pointer text-sm font-normal hover:bg-white"
        size={"lg"}
      >
        Download the app
      </Button>

      <div className="w-full relative">
        <motion.div
          style={{ rotate: rotateRight, y }}
          whileHover={{ scale: 1.04 }}
          className="hidden md:flex absolute rounded-md origin-top-right bg-white/80 backdrop-blur-md shadow-lg z-10 w-xs flex-col items-start justify-center gap-1 p-4 top-1/4 right-12 border-t-2 border-t-green-400"
        >
          <span className="bg-green-400 rounded-sm shadow w-4 aspect-square mb-1" />
          <h6 className="font-normal text-xs text-foreground">
            Log Meals Your Way
          </h6>
          <p className="text-xs text-muted-foreground">
            Text, voice, or a photo — Oatmeal parses your meal and logs macros
            instantly.
          </p>
        </motion.div>
        <motion.div
          style={{ y }}
          whileHover={{ scale: 1.04 }}
          className="hidden md:flex absolute rounded-md origin-top-right bg-white/80 backdrop-blur-md shadow-lg z-10 w-xs flex-col items-start justify-center gap-1 p-4 top-full right-1/2 translate-x-1/2 -translate-y-1/2 border-t-2 border-t-orange-400"
        >
          <span className="bg-orange-400 rounded-sm shadow w-4 aspect-square mb-1" />
          <h6 className="font-normal text-xs text-foreground">
            Real-Time Macro Tracking
          </h6>
          <p className="text-xs text-muted-foreground">
            Calories, protein, carbs, fat, and fiber — updated live as you log.
          </p>
        </motion.div>
        <motion.div
          style={{ rotate, y }}
          whileHover={{ scale: 1.04 }}
          className="hidden md:flex absolute rounded-md origin-top-left bg-white/80 backdrop-blur-md shadow-lg z-10 w-xs flex-col items-start justify-center gap-1 p-4 top-1/6 left-12 border-t-2 border-t-pink-400"
        >
          <span className="bg-pink-400 rounded-sm shadow w-4 aspect-square mb-1" />
          <h6 className="font-normal text-xs text-foreground">
            Weekly Insights
          </h6>
          <p className="text-xs text-muted-foreground">
            Averages, trends, consistency scores, and coaching to keep you on
            track.
          </p>
        </motion.div>
        <motion.div className="aspect-video mx-auto max-w-6xl w-full h-full overflow-hidden mt-8 shadow rounded-lg relative backdrop-blur-lg bg-white/20 px-4 md:px-0">
          <video
            src={VIDEO_ALT_1}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      </div>
      <div className="mt-20">
        <h3 className="text-2xl font-normal text-muted-foreground text-center mb-8">
          Every meal is a data point.
        </h3>

        <div className="w-screen overflow-clip mx-auto relative py-4">
          <div className="bg-linear-to-r from-primary to-transparent w-sm h-full absolute top-0 left-0 z-10" />
          <div className="bg-linear-to-l from-primary to-transparent w-sm h-full absolute top-0 right-0 z-10" />
          <motion.div
            className="flex gap-4 py-2 px-4 flex-nowrap items-start justify-start"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[
              "Meal Logging",
              "Macro Tracking",
              "Calorie Goals",
              "AI Insights",
              "Photo Logging",
              "Voice Input",
              "Meal History",
              "Meal Logging",
              "Macro Tracking",
              "Calorie Goals",
              "AI Insights",
              "Photo Logging",
              "Voice Input",
              "Meal History",
              "Meal Logging",
              "Macro Tracking",
              "Calorie Goals",
              "AI Insights",
              "Photo Logging",
              "Voice Input",
              "Meal History",
              "Meal Logging",
              "Macro Tracking",
              "Calorie Goals",
              "AI Insights",
              "Photo Logging",
              "Voice Input",
              "Meal History",
            ].map((label, i) => (
              <div
                key={i}
                className="text-primary-foreground whitespace-nowrap bg-neutral-900/80 tracking-wider border border-neutral-700/40 p-1.5 px-3 rounded-full flex items-center justify-center gap-2 text-sm"
              >
                <span className="aspect-square text-xs font-light bg-pink-400 w-3 rounded-full " />
                {label}
              </div>
            ))}
          </motion.div>
          <motion.div
            className="flex gap-4 py-2 px-4 flex-nowrap items-start justify-start"
            animate={{ x: [-1200, 0] }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
            }}
          >
            {[
              "Protein Goals",
              "Calorie Deficit",
              "Streak Counter",
              "Weekly Reports",
              "Personalized Goals",
              "Pro Coaching",
              "Fiber Tracking",
              "Protein Goals",
              "Calorie Deficit",
              "Streak Counter",
              "Weekly Reports",
              "Personalized Goals",
              "Pro Coaching",
              "Fiber Tracking",
              "Protein Goals",
              "Calorie Deficit",
              "Streak Counter",
              "Weekly Reports",
              "Personalized Goals",
              "Pro Coaching",
              "Fiber Tracking",
              "Protein Goals",
              "Calorie Deficit",
              "Streak Counter",
              "Weekly Reports",
              "Personalized Goals",
              "Pro Coaching",
              "Fiber Tracking",
            ].map((label, i) => (
              <div
                key={i}
                className="text-primary-foreground whitespace-nowrap bg-neutral-900/80 tracking-wider border border-neutral-700/40 p-1.5 px-3 rounded-full flex items-center justify-center gap-2 text-sm"
              >
                <span className="aspect-square text-xs font-light bg-sky-400 w-3 rounded-full " />
                {label}
              </div>
            ))}
          </motion.div>
          <motion.div
            className="flex gap-4 py-2 px-4 flex-nowrap items-start justify-start"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 17, repeat: Infinity, ease: "linear" }}
          >
            {[
              "Weight Loss",
              "Muscle Gain",
              "Maintenance Mode",
              "Consistency Score",
              "Achievements",
              "Sticker Rewards",
              "Nutrition Trends",
              "Weight Loss",
              "Muscle Gain",
              "Maintenance Mode",
              "Consistency Score",
              "Achievements",
              "Sticker Rewards",
              "Nutrition Trends",
              "Weight Loss",
              "Muscle Gain",
              "Maintenance Mode",
              "Consistency Score",
              "Achievements",
              "Sticker Rewards",
              "Nutrition Trends",
              "Weight Loss",
              "Muscle Gain",
              "Maintenance Mode",
              "Consistency Score",
              "Achievements",
              "Sticker Rewards",
              "Nutrition Trends",
            ].map((label, i) => (
              <div
                key={i}
                className="text-primary-foreground whitespace-nowrap bg-neutral-900/80 tracking-wider border border-neutral-700/40 p-1.5 px-3 rounded-full flex items-center justify-center gap-2 text-sm"
              >
                <span className="aspect-square text-xs font-light bg-green-400 w-3 rounded-full " />
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="mx-auto max-w-xl w-full px-4 mt-24 mb-24 text-primary-foreground">
        <p className="text-2xl sm:text-3xl md:text-4xl text-start font-normal tracking-tight font-sans border-b border-white/20 pb-6">
          "I used to spend 20 minutes logging a single meal. With Oatmeal I just
          describe what I ate and it's done in 10 seconds — macros and all."
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center justify-center gap-2">
            <div className="aspect-square h-12 bg-background rounded-xl"></div>
            <div className="flex flex-col items-start justify-center">
              <p className="text-sm text-primary-foreground font-semibold">
                Priya Mehta
              </p>
              <p className="text-sm text-muted-foreground">
                Fitness enthusiast, Mumbai
              </p>
            </div>
          </div>
          <div className="font-bold text-xl">Oatmeal</div>
        </div>
      </div>
    </div>
  );
};

export default Transform;
