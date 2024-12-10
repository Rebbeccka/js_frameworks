export interface MarkdownMetadata {
  title?: string;
  date?: string;
  [key: string]: string | undefined;
}

export interface MarkdownContent {
  metadata: MarkdownMetadata;
  content: string;
  filename: string;
}
