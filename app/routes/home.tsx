import HomePage from "~/pages/HomePage/index";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Oatmeal – AI Macro Tracker for Text, Voice & Photo Meal Logging",
    },
    {
      name: "description",
      content:
        "Log meals with text, voice, or photos. Oatmeal tracks your macros, calories, and nutrition trends with AI-powered insights, streaks, and personalized coaching.",
    },
    {
      name: "keywords",
      content:
        "macro tracker, calorie counter, AI nutrition app, meal logging, food diary, macro counting, calorie tracking, nutrition coach, diet tracker, weight loss app",
    },
    { name: "robots", content: "index, follow" },
    {
      property: "og:title",
      content:
        "Oatmeal – AI Macro Tracker for Text, Voice & Photo Meal Logging",
    },
    {
      property: "og:description",
      content:
        "Describe your meal in plain language, snap a photo, or speak it — Oatmeal turns it into a structured macro entry instantly. Built for people who want results without complicated tracking.",
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Oatmeal" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content:
        "Oatmeal – AI Macro Tracker for Text, Voice & Photo Meal Logging",
    },
    {
      name: "twitter:description",
      content:
        "AI macro tracker for text, voice & photo meal logging, streaks, and personalized nutrition insights.",
    },
    { name: "theme-color", content: "#ffffff" },
  ];
}

export default function Home() {
  return <HomePage />;
}
