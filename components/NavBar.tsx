import Link from "next/link";
import cx from "clsx";
import { FOCUS_VISIBLE_OUTLINE } from "@/constants/colors";

export const NavBar = () => {
  return (
    <div className="sticky top-0 z-10 py-2 bg-white md:py-6 md:mb-6">
      <div className="container px-4 mx-auto lg:max-w-4xl md:flex md:items-center md:justify-between">
        <Link href="/">
          <div
            className={cx(
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase",
              FOCUS_VISIBLE_OUTLINE
            )}
          >
            Leanne Holmes
          </div>
        </Link>

        <div className="flex items-center -ml-5 text-gray-900 lg:-ml-8">
          <Link href="#about">
            <div
              className={cx(
                "font-medium block transition-colors mt-1.5 lg:mt-0 lg:ml-8 ml-5 hover:text-sky-500",
                FOCUS_VISIBLE_OUTLINE
              )}
            >
              About
            </div>
          </Link>

          <Link href="#projects">
            <div
              className={cx(
                "font-medium block transition-colors mt-1.5 lg:mt-0 lg:ml-8 ml-5 hover:text-sky-500",
                FOCUS_VISIBLE_OUTLINE
              )}
            >
              Projects
            </div>
          </Link>

          <Link href="/resume">
            <div
              className={cx(
                "font-medium block transition-colors mt-1.5 lg:mt-0 lg:ml-8 ml-5 hover:text-sky-500",
                FOCUS_VISIBLE_OUTLINE
              )}
            >
              Resume
            </div>
          </Link>

          <Link href="/contact">
            <div
              className={cx(
                "font-medium block transition-colors mt-1.5 lg:mt-0 lg:ml-8 ml-5 hover:text-sky-500",
                FOCUS_VISIBLE_OUTLINE
              )}
            >
              Contact
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
