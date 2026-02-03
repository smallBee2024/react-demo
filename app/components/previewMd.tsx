"use client";

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';

interface PreviewMdProps {
  path: string;
}
const PreviewMd = ({ path }: PreviewMdProps) => {

  const [mdText, setMdText] = useState<string>("");

  useEffect(() => {
    fetch(path)
      .then((res) => res.text())
      .then((text) => {
        setMdText(text);
      });
  }, [path]);

  return <div className="markdown-content">
    <ReactMarkdown
      children={mdText}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeHighlight]}
    />
  </div>
};

export default PreviewMd;