import { motion } from "motion/react";

type Props = {};

const statItems = [
  {
    stat: "50K+",
    label: "Meals logged daily",
    border: "border-l-violet-400",
  },
  { stat: "2Mn+", label: "Macros tracked", border: "border-l-emerald-400" },
  { stat: "98%", label: "Logging accuracy", border: "border-l-amber-400" },
  { stat: "10K+", label: "Active streaks", border: "border-l-rose-400" },
];

const Brands = (props: Props) => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
              Traction
            </p>
            <h2 className="text-4xl font-light tracking-tight leading-tight">
              Smarter nutrition tracking
              <br /> without the spreadsheet fatigue
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Thousands of people trust Oatmeal to log meals, hit their macros,
              and build lasting consistency — one day at a time.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {statItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.4, ease: "easeOut" }}
                className={`p-6 rounded-xl bg-white border border-neutral-100 border-l-4 ${item.border} shadow-sm group hover:shadow-md transition-shadow cursor-default`}
              >
                <div className="text-3xl font-semibold tracking-tight mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                  {item.stat}
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
