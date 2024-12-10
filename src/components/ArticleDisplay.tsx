"use client";

import React from "react";
import { MarkdownContent } from "../types/markdown";
import MarkdownRenderer from "./MarkdownRenderer";

interface ArticleDisplayProps {
  page: MarkdownContent;
}

const ArticleDisplay: React.FC<ArticleDisplayProps> = ({ page }) => {
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
      <MarkdownRenderer content={page.content} />
      <hr className="my-8" />
    </article>
  );
};

export default ArticleDisplay;
