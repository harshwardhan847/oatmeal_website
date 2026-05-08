import { Check } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { APP_STORE_URL, PLAY_STORE_URL } from "~/lib/assets";

type Props = {};

const AppleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 fill-current shrink-0"
    aria-hidden="true"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 fill-current shrink-0"
    aria-hidden="true"
  >
    <path d="M3.18 23.76c.33.18.69.24 1.06.16l12.84-7.41-2.79-2.79-11.11 10.04zM.59 1.43C.22 1.79 0 2.36 0 3.06v17.88c0 .7.22 1.27.59 1.63l.08.07 10.02-10.02v-.23L.67 1.36l-.08.07zM20.76 10.06l-2.79-1.61-3.13 3.13 3.13 3.13 2.81-1.62c.8-.46.8-1.22-.02-1.03zm-17.58 13.7L15.02 16.5l-2.79-2.79-11.08 10.02.03.03z" />
  </svg>
);

const perks = [
  "Log meals in seconds with text, voice, or photo",
  "AI-powered macro estimates — no manual searching",
  "Weekly coaching insights with Oatmeal Pro",
];

const EmailCard = (props: Props) => {
  return (
    <div className="my-12 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl bg-linear-to-br from-indigo-950 via-violet-950/80 to-slate-900 border border-white/10 overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-10 md:p-16 flex flex-col justify-center gap-6">
            <p className="text-xs uppercase tracking-widest text-white/40 font-medium">
              Download free
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Build{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-300 to-blue-400">
                consistent
              </span>{" "}
              nutrition habits that actually stick
            </h2>
            <p className="text-white/60 text-sm max-w-xs leading-relaxed">
              Whether you're losing weight, building muscle, or just eating
              better — Oatmeal gives you the clarity to make it happen.
            </p>
            <ul className="flex flex-col gap-3">
              {perks.map((perk, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-white/70"
                >
                  <span className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-400/40 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-violet-300" />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center p-10 md:p-16 bg-white/5 border-l border-white/5">
            <div className="w-full max-w-sm flex flex-col items-center gap-5">
              <p className="text-white/50 text-sm text-center leading-relaxed">
                Join thousands already tracking with Oatmeal
              </p>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 font-semibold text-sm h-12 rounded-xl hover:bg-white/90 transition-colors">
                  <AppleIcon />
                  Download on the App Store
                </button>
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full flex items-center justify-center gap-3 bg-white/10 text-white border border-white/20 font-semibold text-sm h-12 rounded-xl hover:bg-white/20 transition-colors">
                  <GooglePlayIcon />
                  Get it on Google Play
                </button>
              </a>
              <p className="text-white/30 text-xs">
                Free to download · No credit card required
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EmailCard;
