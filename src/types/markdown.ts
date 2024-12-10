export interface MarkdownMetadata {
  title?: string;
  date?: string;
  // Use Record<string, unknown> instead of any
  [key: string]: string | undefined | Record<string, unknown>;
}

export interface MarkdownContent {
  metadata: MarkdownMetadata;
  content: string;
  filename: string;
}
