import React, { useEffect } from 'react';
import Markdown from 'react-markdown';
import Prism from 'prismjs';

type CodeSnippetProps = {
  markdownContent: string;
};

const CodeSnippet: React.FC<CodeSnippetProps> = ({
  markdownContent,
}: CodeSnippetProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="rounded-lg bg-darkgrey my-10 p-5 text-14">
      <Markdown source={markdownContent} />
    </div>
  );
};

export default CodeSnippet;
