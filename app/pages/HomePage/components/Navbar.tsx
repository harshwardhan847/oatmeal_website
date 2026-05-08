import { useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import { cn } from "~/lib/utils";

type Props = {};

const navLinks = ["Home", "Features", "Pricing", "Blog"];

const NavigationMenuComponent = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-4 mt-0">
        {navLinks.map((link) => (
          <NavigationMenuItem key={link}>
            <Button variant={"ghost"} size={"lg"} className="font-normal h-11">
              {link}
            </Button>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const Navbar = (props: Props) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 0.8);
    });
  }, [scrollY]);

  return (
    <>
      <nav
        className={cn(
          "flex items-center justify-between px-4 py-2 pt-2 z-50 transition-all fixed top-4 w-full left-1/2 -translate-x-1/2 ease-in duration-200 md:px-8 md:max-w-350 md:mx-auto",
          isScrolled
            ? "bg-background/95 backdrop-blur-sm py-1 md:px-2 z-50 top-4 -translate-x-1/2 w-auto md:w-min rounded-xl shadow"
            : "bg-transparent",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-center gap-12",
            isScrolled && "gap-4",
          )}
        >
          {isScrolled ? (
            <div className="text-lg font-semibold text-foreground mx-2">
              Oatmeal
            </div>
          ) : (
            <img
              src="/logo.png"
              alt="Oatmeal – AI Macro Tracker"
              className="h-16 w-auto mix-blend-multiply saturate-0 contrast-500"
            />
          )}
          <div className="hidden md:flex">
            <NavigationMenuComponent />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant={"ghost"}
              size={"lg"}
              className="font-normal text-sm h-10 text-muted-foreground"
            >
              Sign In
            </Button>
            <Button
              variant={"default"}
              size={"lg"}
              className="font-light text-sm h-10"
            >
              Download Free
            </Button>
          </div>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed top-20 left-4 right-4 z-40 md:hidden bg-background/95 backdrop-blur-sm rounded-2xl shadow-lg border border-border/20 p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Button
              key={link}
              variant={"ghost"}
              className="w-full justify-start font-normal"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </Button>
          ))}
          <div className="border-t border-border/20 pt-2 mt-1 flex flex-col gap-2">
            <Button
              variant={"ghost"}
              className="w-full justify-start font-normal text-muted-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Sign In
            </Button>
            <Button
              variant={"default"}
              className="w-full font-light"
              onClick={() => setMobileOpen(false)}
            >
              Download Free
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
