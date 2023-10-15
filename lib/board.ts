import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

/*
 * directory structure
 *
 * board {
 *   index.mdx
 *   free {
 *     index.mdx
 *   }
 *   project {
 *     index.mdx
 *   }
 * }
 */

type Post = {
  meta: Record<string, any>;
  content: string;
};

type Board = {
  content?: string; // board description
  posts: Array<Post>;
  childBoard: Array<Board>;
};

export const boardBasePath = join(process.cwd(), "_posts", "board");

// #TODO unit test 로 검증 필요
export function getBoard(basePath: string = boardBasePath): Board {
  const subDirs = fs.readdirSync(boardBasePath, { withFileTypes: true });

  const dirs = subDirs.filter((v) => v.isDirectory());
  const mdxFiles = subDirs.filter((v) => v.isFile());

  return {
    posts: mdxFiles.map((v) => {
      const fileContents = fs.readFileSync(v.path, "utf8");
      const { data, content } = matter(fileContents);
      return { content, meta: data };
    }),
    childBoard: dirs.map((v) => getBoard(v.path)),
  };
}
