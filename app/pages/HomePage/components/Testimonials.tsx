import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "I used to spend 20 minutes logging a single meal. With Oatmeal I just describe what I ate and it's done in 10 seconds — macros and all.",
    name: "Priya Mehta",
    role: "Fitness enthusiast",
    company: "Mumbai",
    topBorder: "border-t-violet-400",
  },
  {
    quote:
      "Finally hit my protein goal three weeks in a row. Oatmeal makes it easy to actually see where I'm falling short each day.",
    name: "Arjun Kapoor",
    role: "Gym regular",
    company: "Bengaluru",
    topBorder: "border-t-sky-400",
  },
  {
    quote:
      "I just snap a photo of my lunch and Oatmeal fills in the macros. It's the first nutrition app that didn't feel like homework.",
    name: "Simran Dhaliwal",
    role: "Working parent",
    company: "Delhi",
    topBorder: "border-t-amber-400",
  },
  {
    quote:
      "The weekly insights showed me I was consistently under on carbs on rest days. Small tweak, big difference in my energy levels.",
    name: "Rohan Nair",
    role: "Marathon runner",
    company: "Chennai",
    topBorder: "border-t-rose-400",
  },
  {
    quote:
      "Streak mode is weirdly motivating. I haven't missed a log in 47 days and I genuinely look forward to opening the app after every meal.",
    name: "Tanvi Joshi",
    role: "Yoga instructor",
    company: "Pune",
    topBorder: "border-t-emerald-400",
  },
];

type Testimonial = (typeof testimonials)[0];

const TestimonialCard = ({
  t,
  delay = 0,
}: {
  t: Testimonial;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className={`p-6 rounded-xl bg-white border border-neutral-100 border-t-4 ${t.topBorder} shadow-sm flex flex-col gap-4`}
  >
    <p className="text-sm text-foreground leading-relaxed">
      &ldquo;{t.quote}&rdquo;
    </p>
    <div className="flex items-center gap-3 mt-auto pt-3 border-t border-neutral-100">
      <div className="w-8 h-8 rounded-lg bg-primary shrink-0" />
      <div>
        <p className="text-xs font-semibold text-foreground">{t.name}</p>
        <p className="text-xs text-muted-foreground">
          {t.role}, {t.company}
        </p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="py-12 md:py-24 bg-neutral-50/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
            Social proof
          </p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
            Loved by people who actually track
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start max-w-5xl mx-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <TestimonialCard t={testimonials[0]} delay={0} />
            <TestimonialCard t={testimonials[3]} delay={0.1} />
          </div>

          {/* Column 2 — featured card */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.4 }}
              className={`p-8 rounded-xl bg-white border border-neutral-100 border-t-4 ${testimonials[2].topBorder} shadow-md flex flex-col gap-4`}
            >
              <span className="text-5xl text-neutral-200 font-serif leading-none select-none">
                &ldquo;
              </span>
              <p className="text-base text-foreground leading-relaxed -mt-2">
                {testimonials[2].quote}
              </p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-neutral-100">
                <div className="w-10 h-10 rounded-xl bg-primary shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonials[2].name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonials[2].role}, {testimonials[2].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <TestimonialCard t={testimonials[1]} delay={0.08} />
            <TestimonialCard t={testimonials[4]} delay={0.16} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
