import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MarkdownContent } from "../src/types/markdown";
import ArticleDisplay from "../src/components/ArticleDisplay";

async function getAllMarkdownContent(): Promise<MarkdownContent[]> {
  const pagesDirectory = path.join(process.cwd(), "pages");

  if (!fs.existsSync(pagesDirectory)) {
    return [];
  }

  const files = fs.readdirSync(pagesDirectory);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));

  const allPagesContent = markdownFiles.map((filename) => {
    const fullPath = path.join(pagesDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      metadata: data,
      content,
      filename,
    };
  });

  return allPagesContent;
}

export default async function Home() {
  const allPages = await getAllMarkdownContent();

  return (
    <main className="max-w-4xl mx-auto p-8">
      {allPages.length === 0 ? (
        <div className="text-center py-10">
          <p>No markdown files found in the pages directory.</p>
        </div>
      ) : (
        allPages.map((page, index) => (
          <ArticleDisplay key={index} page={page} />
        ))
      )}
    </main>
  );
}
