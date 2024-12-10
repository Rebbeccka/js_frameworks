export interface MarkdownMetadata {
  title?: string;
  date?: string;
  [key: string]: any;
}

export interface MarkdownContent {
  metadata: MarkdownMetadata;
  content: string;
  filename: string;
}
