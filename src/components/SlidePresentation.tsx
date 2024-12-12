"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";
import MarkdownRenderer from "./MarkdownRenderer";

interface SlidePresentationProps {
  content: string;
}

const SlidePresentation: React.FC<SlidePresentationProps> = ({ content }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = content.split(/\n---\n/).map((slide) => slide.trim());

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      goToNextSlide();
    }
    if (event.key === "ArrowLeft") {
      goToPrevSlide();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-100 flex flex-col"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Slide Content */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide}
            initial={{
              x: direction > 0 ? 1000 : -1000,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: direction < 0 ? 1000 : -1000,
              opacity: 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center p-8"
          >
            <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl p-8 overflow-auto max-h-[80vh]">
              <MarkdownRenderer content={slides[currentSlide]} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="bg-white border-t p-4 flex items-center justify-between">
        <button
          onClick={goToPrevSlide}
          className={classNames(
            "px-4 py-2 rounded-lg",
            currentSlide > 0
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-400 cursor-not-allowed",
          )}
          disabled={currentSlide === 0}
        >
          Previous
        </button>
        <div className="text-gray-500">
          Slide {currentSlide + 1} of {slides.length}
        </div>
        <button
          onClick={goToNextSlide}
          className={classNames(
            "px-4 py-2 rounded-lg",
            currentSlide < slides.length - 1
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-400 cursor-not-allowed",
          )}
          disabled={currentSlide === slides.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SlidePresentation;
