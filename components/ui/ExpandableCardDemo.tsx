"use client";
import Image from "next/image";
import React, { JSX, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./use-outside-click";

interface Card {
  description: string;
  title: string;
  src: string;
  ctaLink: string;
  content: JSX.Element;
}

interface ExpandableCardDemoProps {
  cards: Card[];
}

export function ExpandableCardDemo({ cards }: ExpandableCardDemoProps) {
  const [active, setActive] = useState<Card | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Overlay for Active Card */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-40"
          />
        )}
      </AnimatePresence>

      {/* Expanded Card */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-3xl h-fit bg-white dark:bg-neutral-900 rounded-3xl shadow-lg overflow-hidden"
            >
              {/* Close Button */}
              <motion.button
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 p-2 rounded-full z-50"
              >
                <CloseIcon />
              </motion.button>

              {/* Image */}
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={700}
                  height={400}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-60 sm:h-80 object-cover"
                />
              </motion.div>

              {/* Content */}
              <div className="p-6 overflow-auto max-h-[60vh]">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="text-2xl font-bold text-neutral-800 dark:text-neutral-200"
                >
                  {active.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 mt-2"
                >
                  {active.description}
                </motion.p>
                <div className="mt-4 text-sm text-neutral-700 dark:text-neutral-400">
                  {active.content}
                </div>
                <motion.a
                  layoutId={`button-${active.title}-${id}`}
                  href={active.ctaLink}
                  target="_blank"
                  className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-bold rounded-full hover:bg-green-600"
                >
                  <img
                    src="/github.svg"
                    alt="GitHub Icon"
                    width={20}
                    height={20}
                  />
                  View on GitHub
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Card List */}
      <ul
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 transition-opacity ${
          active ? "opacity-50 pointer-events-none" : "opacity-100"
        }`}
      >
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 rounded-xl cursor-pointer shadow-md"
          >
            <motion.div layoutId={`image-${card.title}-${id}`}>
              <Image
                width={300}
                height={300}
                src={card.src}
                alt={card.title}
                className="w-full h-40 rounded-lg object-cover"
              />
            </motion.div>
            <motion.h3
              layoutId={`title-${card.title}-${id}`}
              className="mt-4 text-lg font-bold text-neutral-800 dark:text-neutral-200"
            >
              {card.title}
            </motion.h3>
            <motion.p
              layoutId={`description-${card.description}-${id}`}
              className="text-sm text-neutral-600 dark:text-neutral-400 mt-2"
            >
              {card.description}
            </motion.p>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 text-black dark:text-white"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);
