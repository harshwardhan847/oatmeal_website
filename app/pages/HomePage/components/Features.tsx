import React from "react";
import { cn } from "~/lib/utils";
import {
  SCREENSHOT_HOME,
  SCREENSHOT_WEEKLY_REPORT,
  SCREENSHOT_PROFILE,
  SCREENSHOT_STREAK,
} from "~/lib/assets";

type Props = {};

const featuresList = [
  {
    title: "Log Meals Your Way",
    image: SCREENSHOT_HOME,
    description:
      "Use text, voice, or a photo. Oatmeal estimates nutrition automatically and saves it to your daily log.",
    accent: "bg-violet-400",
    num: "01",
  },
  {
    title: "Real-Time Macro Tracking",
    image: SCREENSHOT_WEEKLY_REPORT,
    description:
      "See calories, protein, carbs, fat, and fiber at a glance — updated the moment you log.",
    accent: "bg-emerald-400",
    num: "02",
  },
  {
    title: "Personalized Insights",
    image: SCREENSHOT_PROFILE,
    description:
      "Weekly averages, macro balance, consistency scores, and progress patterns — all in one dashboard.",
    accent: "bg-amber-400",
    num: "03",
  },
  {
    title: "Streaks & Achievements",
    image: SCREENSHOT_STREAK,
    description:
      "Build daily logging streaks, unlock stickers, and share your progress with friends.",
    accent: "bg-rose-400",
    num: "04",
  },
];

const Features = (props: Props) => {
  const [hovered, setHovered] = React.useState<number | null>(null);
  // order[position] = featureIndex — tracks which feature is at each stack position
  const [order, setOrder] = React.useState(() => featuresList.map((_, i) => i));

  return (
    <div className="w-full my-24 flex flex-col items-center gap-4 justify-center">
      <h2 className="text-3xl sm:text-4xl font-normal text-center px-4">
        What you can do with Oatmeal
      </h2>
      <p className="text-center text-muted-foreground text-sm -m-2 px-4">
        Fast logging, real-time macros, and insights that actually help you stay
        consistent.
      </p>
      <div className="h-screen md:h-[120vh] pt-24 w-full">
        <div className="w-full grid grid-cols-1 items-center justify-center relative container md:max-w-6xl mx-auto perspective-distant">
          {featuresList.map((val, featureIdx) => {
            const pos = order.indexOf(featureIdx);
            const isHovered = hovered === featureIdx;
            return (
              <div
                key={val.title}
                className="flex flex-col absolute aspect-9/16 md:max-w-sm shadow-lg cursor-pointer top-0 left-1/2 -translate-x-1/2 w-full bg-white rounded-lg items-start justify-start gap-0"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `translateZ(${-pos * 200}px) scale(${1 - pos * 0.002}) translateY(${-pos * 40 - (isHovered ? 24 : 0)}px)`,
                  zIndex: 10 - pos,
                  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={() => setHovered(featureIdx)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => {
                  setOrder((prev) => [
                    featureIdx,
                    ...prev.filter((i) => i !== featureIdx),
                  ]);
                }}
              >
                <h3
                  className="p-6 py-2 bg-background border-border/10 border rounded-t-lg w-full flex items-center justify-between"
                  style={{
                    opacity: pos === 0 || isHovered ? 1 : 0.5,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`rounded-sm items-center border border-border/10 ${val.accent} inline-flex rotate-45 w-4 h-4 aspect-square`}
                    />
                    {val.title}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground/50 tabular-nums">
                    {val.num}
                  </span>
                </h3>
                <img
                  src={val.image}
                  alt={val.title}
                  width={500}
                  height={500}
                  className="w-full h-auto bg-primary object-cover object-top rounded-b-lg"
                />
                {/* {(pos === 0 || isHovered) && (
                  <p className="text-xs text-muted-foreground px-6 pb-4 pt-1">
                    {val.description}
                  </p>
                )} */}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-xl w-full px-4 mt-24 text-foreground">
        <p className="text-2xl sm:text-3xl md:text-4xl text-start font-normal tracking-tight font-sans border-b border-border/20 pb-6">
          "Oatmeal has completely changed how I think about food. The AI logging
          is unreal — I just speak and it's done."
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center justify-center gap-2">
            <div className="aspect-square h-12 bg-primary rounded-xl"></div>
            <div className="flex flex-col items-start justify-center">
              <p className="text-sm text-foreground font-semibold">
                Arjun Kapoor
              </p>
              <p className="text-sm text-muted-foreground">
                Fitness Coach, Delhi
              </p>
            </div>
          </div>
          <div className="font-bold text-xl">Oatmeal</div>
        </div>
      </div>
    </div>
  );
};

export default Features;
