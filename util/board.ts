import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

// const boardCache = new Map<string, any>();

export function getPostDetail(path: string, slug: string) {
  const result = matter(fs.readFileSync(join(path, slug), "utf8"));
  return {
    content: result.content,
    meta: result.data,
  };
}

export function getPostList(path: string) {
  const childs = fs.readdirSync(path, { withFileTypes: true });
  const mdxFiles = childs.filter((v) => v.isFile() && v.name.includes(".mdx"));
  return mdxFiles.map((mdxFile) => getPostDetail(path, mdxFile.name));
}
