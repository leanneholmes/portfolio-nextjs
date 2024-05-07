"use client";
import { FOCUS_VISIBLE_OUTLINE, LIGHT_COLORS } from "@/constants/colors";
import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import Image from "next/image";
import { useIsFontReady } from "@/utils/useIsFontReady";
import { shuffleArray } from "@/utils/shuffleArray";
import leanneImg from "@/public/leanne.jpg";
import cx from "clsx";
import { Button } from "./Button";

export const About = () => {
  // Before animation, detect if custom fonts are loaded, so <RoughNotation />
  // SVG's are correctly positioned over the elements
  const isFontReady = useIsFontReady();

  const [colors, setColors] = React.useState<string[]>([]);

  // Shuffle our colors and store them in state so the order is persisted during
  // React re-renders
  React.useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);

  return (
    <div className="container px-4 mx-auto">
      <div className="space-x-5 lg:flex item-center lg:-mx-4">
        <div className="lg:px-4 ">
          <RoughNotationGroup show={isFontReady}>
            <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl">
              Hello! I'm Leanne, a{" "}
              <RainbowHighlight color={colors[0]}>developer</RainbowHighlight>{" "}
              based in Vancouver.
            </h1>

            <div className="mt-4 text-gray-800">
              <p className="mt-2">
                I love building tools that are modern, user-friendly, and
                delightful.
              </p>
              <p className="mt-2">
                I am a student at BCIT where I've spent over 3 years learning
                the fundamentals of{" "}
                <RainbowHighlight color={colors[1]}>
                  software development.
                </RainbowHighlight>{" "}
                I previously interned as a{" "}
                <RainbowHighlight color={colors[1]}>
                  Solutions Consultant
                </RainbowHighlight>{" "}
                at{" "}
                <span
                  className={cx(
                    "font-bold transition-colors hover:text-sky-500",
                    FOCUS_VISIBLE_OUTLINE
                  )}
                >
                  Trulioo
                </span>{" "}
                &mdash; focusing on DX and helping the community create
                wonderful things.
              </p>
              <p className="mt-2">
                Welcome to my portfolio where I share my work and what I'm
                learning about shipping{" "}
                <RainbowHighlight color={colors[2]}>
                  great products
                </RainbowHighlight>
                , becoming a{" "}
                <RainbowHighlight color={colors[3]}>
                  better developer
                </RainbowHighlight>{" "}
                and growing a{" "}
                <RainbowHighlight color={colors[0]}>
                  career in tech
                </RainbowHighlight>
                .
              </p>
            </div>
          </RoughNotationGroup>
        </div>

        <div className="flex-shrink-0 mt-12 lg:px-4 lg:mt-0">
          <Image
            src={leanneImg}
            alt="Profile"
            placeholder="blur"
            priority={true}
            width={250}
            height={400}
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
      <div className="flex space-x-4 mt-4">
        <Button
          color="primary"
          href="https://www.linkedin.com/in/leanne-holmes"
        >
          View LinkedIn
        </Button>
        <Button color="secondary" href="https://www.github.com/leanneholmes">
          View Resume
        </Button>
      </div>
    </div>
  );
};
