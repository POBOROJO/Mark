import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { Processor, unified } from "unified"
import remarkParse from "remark-parse"
import remarkFrontmatter from "remark-frontmatter"
import remarkRehype from "remark-rehype"
import rehypeSlug from 'rehype-slug'
import rehypeStringify from "rehype-stringify"
import rehypeHighlight from "rehype-highlight"
import matter from "gray-matter"
import fs from "fs"

export default async function BlogPage({params,}: {  params: Promise<{ slug: string }>}) {
    const result = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
const slug = (await params).slug

const filePath = `content/${slug}.md`
const fileContent = fs.readFileSync(filePath, "utf-8");
const { data, content } = matter(fileContent);


const htmlContent = (await result.process(content)).toString()

  return (
    <MaxWidthWrapper className="prose dark:prose-invert">
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      {slug}
    </MaxWidthWrapper>
  );
}

