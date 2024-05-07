import { FOCUS_VISIBLE_OUTLINE } from "@/constants/colors";
import cx from "clsx";

export const Footer = () => {
  return (
    <div className="mt-24 pb-36">
      <div className="max-w-4xl px-4 mx-auto text-gray-800">
        <div className="pb-8 mb-2 border-t-2 border-gray-300"></div>
        <div className="flex flex-col justify-between lg:flex-row">
          <p> Built with Next.js, Typescript, and Tailwind</p>
          <div className="pt-2 space-x-6 font-medium lg:pt-0">
            <a
              href="https://github.com/leanneholmes"
              className={cx(
                "transition-colors hover:text-sky-500 focus:text-sky-500 rounded",
                FOCUS_VISIBLE_OUTLINE
              )}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/leanne-holmes/"
              className={cx(
                "transition-colors hover:text-sky-500 focus:text-sky-500 rounded",
                FOCUS_VISIBLE_OUTLINE
              )}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
