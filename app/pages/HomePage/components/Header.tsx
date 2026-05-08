import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import VideoExample from "./VideoExample";
import { APP_STORE_URL, HEADER_BG, PLAY_STORE_URL } from "~/lib/assets";

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

const Header = (props: Props) => {
  return (
    <header className="w-full mx-auto mt-20 md:mt-24 flex flex-col items-center justify-start md:pt-12 relative md:min-h-[80vh]">
      <div className="w-full absolute -top-20 left-0 scale-100 h-full z-0">
        <img
          src={HEADER_BG}
          alt="Header Background"
          loading="lazy"
          className="w-full h-full object-contain opacity-100"
        />
      </div>
      <div className="flex flex-col gap-4 z-10 items-center justify-center">
        {/* badge */}
        <button className="bg-white/80 scale-90 sm:scale-85 cursor-pointer hover:scale-95 sm:hover:scale-88 duration-500 transition rounded-xl shadow-sm px-2 py-2 flex items-center justify-center gap-1 max-w-full mb-4">
          <p className="bg-primary text-primary-foreground rounded-sm px-2 flex w-min h-6 text-xs font-medium items-center mr-1 justify-center">
            New
          </p>
          <h4 className="text-xs sm:text-sm font-light whitespace-nowrap">
            AI-powered meal logging — text, voice & photo
          </h4>
          <ArrowRight className="size-4 text-muted-foreground" />
        </button>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-center tracking-tighter leading-tight md:leading-16 px-4">
          Log meals, track macros, <br className="hidden sm:block" />
          stay consistent.
        </h1>
        <h2 className="text-muted-foreground text-lg sm:text-xl md:text-2xl max-w-lg font-light text-center px-4">
          Describe your meal, snap a photo, or speak it —{" "}
          <br className="hidden sm:block" /> Oatmeal handles the rest.
        </h2>
        {/* Download CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4 px-4">
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="h-12 px-6 gap-2.5 font-medium text-base"
            >
              <AppleIcon />
              App Store
            </Button>
          </a>
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 gap-2.5 font-medium text-base"
            >
              <GooglePlayIcon />
              Google Play
            </Button>
          </a>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Free to download · iOS & Android
        </p>
      </div>
      <VideoExample />
    </header>
  );
};

export default Header;
