import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { APP_STORE_URL, PLAY_STORE_URL } from "~/lib/assets";

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

const articles = [
  {
    id: 1,
    title: "How to hit your protein goals without counting everything",
    summary:
      "Simple strategies for reaching your daily protein target without obsessing over every gram.",
    Image: "https://example.com/article1.jpg",
  },
  {
    id: 2,
    title: "Why consistency matters more than perfection in nutrition",
    summary:
      "Learn why showing up most days beats chasing the perfect diet every single time.",
    Image: "https://example.com/article2.jpg",
  },
  {
    id: 3,
    title: "Understanding macros: a beginner's guide",
    summary:
      "Protein, carbs, and fat explained simply — and how to start tracking them without the overwhelm.",
    Image: "https://example.com/article3.jpg",
  },
  {
    id: 4,
    title: "How to use food photos for faster meal logging",
    summary:
      "A step-by-step guide to snapping your plate and letting AI do the nutritional heavy lifting.",
    Image: "https://example.com/article4.jpg",
  },
];
const Footer = () => {
  return (
    <>
      <div className=" bg-primary text-primary-foreground ">
        <div className=" flex flex-col items-center justify-center container mx-auto px-8 py-16">
          <div className="w-full items-center justify-between flex">
            <h2 className="text-lg font-light text-primary-foreground/70">
              Insights &amp; Resources
            </h2>
            <Button variant={"outline"} size={"lg"} className="text-foreground">
              View all articles
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start justify-center gap-4 mt-4">
            {articles?.map((article) => (
              <div key={article.id}>
                <div className="aspect-video mb-2 w-full text-center flex items-center justify-center text-muted-foreground rounded-md shadow bg-neutral-900" />
                <h3 className="text-sm font-light tracking-wide text-primary-foreground/50">
                  {article.title}
                </h3>
                {/* <p>{article.summary}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-20 md:py-40 pt-12 md:pt-20 flex flex-col bg-primary items-center justify-center gap-4 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl uppercase text-center text-primary-foreground font-bold">
          AI-powered nutrition tracking
          <br /> for{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-br from-pink-500 via-background to-blue-500">
            every goal
          </span>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center justify-center gap-3 bg-white text-slate-900 font-semibold text-sm h-12 px-6 rounded-xl hover:bg-white/90 transition-colors">
              <AppleIcon />
              Download on the App Store
            </button>
          </a>
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center justify-center gap-3 bg-white/10 text-white border border-white/30 font-semibold text-sm h-12 px-6 rounded-xl hover:bg-white/20 transition-colors">
              <GooglePlayIcon />
              Get it on Google Play
            </button>
          </a>
        </div>
      </div>
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8">
          <a href="#">
            <div className="flex items-center gap-3">
              <img
                src="./logo.png"
                alt="Oatmeal – AI Macro Tracker"
                className="h-12 w-auto mix-blend-"
              />
            </div>
          </a>

          <div className="flex items-center gap-5 whitespace-nowrap">
            <a
              href="#"
              className="opacity-80 transition-opacity duration-300 hover:opacity-100"
            >
              Home
            </a>
            <a
              href="#"
              className="opacity-80 transition-opacity duration-300 hover:opacity-100"
            >
              Features
            </a>
            <a
              href="#"
              className="opacity-80 transition-opacity duration-300 hover:opacity-100"
            >
              Pricing
            </a>
            <a
              href="#"
              className="opacity-80 transition-opacity duration-300 hover:opacity-100"
            >
              Blog
            </a>
            <a
              href="#"
              className="opacity-80 transition-opacity duration-300 hover:opacity-100"
            >
              Contact Us
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#">
              <div>F</div>
            </a>
            <a href="#">
              <div className="size-5">L</div>
            </a>
            <a href="#">
              <div className="size-5">T</div>
            </a>
            <a href="#">
              <div className="size-5">Y</div>
            </a>
          </div>
        </div>

        <Separator className="bg-primary-foreground/10" />

        <div className="mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6 items-center text-muted-foreground">
          <p className="text-center font-medium text-balance">
            @2026 Oatmeal, All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
