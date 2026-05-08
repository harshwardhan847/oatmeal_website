import { motion } from "motion/react";
import { PLAYSTORE_1, PLAYSTORE_2, PLAYSTORE_3 } from "~/lib/assets";

const slides = [
  {
    image: PLAYSTORE_1,
    alt: "Your Personal Nutrition And Calorie Tracker With AI",
  },
  {
    image: PLAYSTORE_2,
    alt: "Tap-Speak-Done In Seconds",
  },
  {
    image: PLAYSTORE_3,
    alt: "Complete Streaks Win Stickers",
  },
];

const AppShowcase = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4 mb-14">
        <h2 className="text-3xl sm:text-4xl font-normal text-center tracking-tight">
          Everything you need, in one app
        </h2>
        <p className="text-center text-muted-foreground text-sm">
          Built for real life — log fast, understand more, stay consistent.
        </p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl">
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
            className="rounded-3xl overflow-hidden shadow-md"
          >
            <img
              src={slide.image}
              alt={slide.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AppShowcase;
