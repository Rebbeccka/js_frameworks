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
          h1: (props) => <h1 className="text-2xl font-bold mb-4" {...props} />,
          h2: (props) => <h2 className="text-xl font-bold mb-3" {...props} />,
          p: (props) => <p className="mb-4" {...props} />,
          a: (props) => (
            <a className="text-blue-600 hover:underline" {...props} />
          ),
          code: ({ inline, ...props }) =>
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
