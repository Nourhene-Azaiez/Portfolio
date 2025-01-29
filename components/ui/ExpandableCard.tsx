import React, { useState, useEffect, useRef, useId, JSX } from "react";
import Image from "next/image";
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
  setExpanded: (expanded: boolean) => void; // Callback to notify expansion
}

export function ExpandableCardDemo({ cards, setExpanded }: ExpandableCardDemoProps) {
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
      setExpanded(true); // Notify parent that card is expanded
      document.body.style.overflow = "hidden";
    } else {
      setExpanded(false); // Notify parent that card is collapsed
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, setExpanded]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
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

      <AnimatePresence>
        {active && (
          <div className="fixed inset-y-20 inset-x-0 flex items-center justify-center z-50">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-3xl bg-white dark:bg-zinc-900 rounded-3xl shadow-lg overflow-hidden"
            >
              <motion.button
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActive(null)}
                className="fixed top-4 right-4 lg:right-8 lg:top-20 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 p-2 rounded-full z-50"
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
                <div className="flex items-center justify-start">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="text-2xl font-bold text-zinc-800 dark:text-zinc-200"
                  >
                    {active.title}
                  </motion.h3>
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="inline-flex items-center justify-center sm:w-72 gap-2 px-4 py-2 bg-green-500 text-white dark:text-black font-bold rounded-full hover:bg-green-600"
                  >
                    <Image
                      src="/github.svg"
                      alt="GitHub Icon"
                      width={5}
                      height={5}
                      className="w-14 sm:w-5"
                    />
                    <span className="hidden sm:block">View on GitHub</span>
                  </motion.a>
                </div>

                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className="text-zinc-600 dark:text-zinc-400 mt-2"
                >
                  {active.description}
                </motion.p>
                <div className="mt-4 text-sm text-zinc-700 dark:text-zinc-400">
                  {active.content}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ul className="grid grid-cols-1 gap-4 px-7 sm:px-8 md:px-32 w-full">
        {cards.map((card) => (
          <motion.div
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center bg-zinc-200 dark:bg-black hover:shadow-xl dark:shadow-zinc-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium lg:text-sm text-zinc-800 dark:text-zinc-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-zinc-600 lg:text-xs dark:text-zinc-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              View Details
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lg:h-5 lg:w-5 h-4 w-4 text-black dark:text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
