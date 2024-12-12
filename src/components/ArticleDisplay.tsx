"use client";

import React, { useState } from "react";
import { MarkdownContent } from "../types/markdown";
import MarkdownRenderer from "./MarkdownRenderer";
import SlidePresentation from "./SlidePresentation";

interface ArticleDisplayProps {
  page: MarkdownContent;
}

const ArticleDisplay: React.FC<ArticleDisplayProps> = ({ page }) => {
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-CZ", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  if (isPresentationMode) {
    return <SlidePresentation content={page.content} />;
  }

  return (
    <article className="mb-12">
      <header className="mb-4">
        {page.metadata.title && (
          <h2 className="text-2xl font-bold">{page.metadata.title}</h2>
        )}
        {page.metadata.date && (
          <time className="text-gray-500" suppressHydrationWarning>
            {formatDate(page.metadata.date)}
          </time>
        )}
      </header>
      <div className="mb-4">
        <button
          onClick={() => setIsPresentationMode(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Start Presentation
        </button>
      </div>
      <MarkdownRenderer content={page.content} />
      <hr className="my-8" />
    </article>
  );
};

export default ArticleDisplay;
