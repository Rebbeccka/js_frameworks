"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className = "prose",
}) => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className={className}>Loading...</div>;
  }

  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          h1: ({ node, ...props }) => (
            <h1 className="text-2xl font-bold mb-4" {...props} />
          ),
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          h2: ({ node, ...props }) => (
            <h2 className="text-xl font-bold mb-3" {...props} />
          ),
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          p: ({ node, ...props }) => <p className="mb-4" {...props} />,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          a: ({ node, ...props }) => (
            <a className="text-blue-600 hover:underline" {...props} />
          ),
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          code: ({ node, inline, ...props }) =>
            inline ? (
              <code className="bg-gray-100 px-1 rounded" {...props} />
            ) : (
              <code className="block bg-gray-100 p-4 rounded" {...props} />
            ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
