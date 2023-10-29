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
  // #TODO board descripton.md 에서 추출하도록 추가
  name: string;
  content?: string; // board description
  posts: Array<Post>;
  childBoard: Array<Board>;
};

export const _POST_BASE_PATH = join(process.cwd(), "_posts");

// #TODO unit test 로 검증 필요
export function getBoard(dirName: string, path = _POST_BASE_PATH): Board {
  const basePath = join(path, dirName);
  const subDirs = fs.readdirSync(basePath, { withFileTypes: true });

  const dirs = subDirs.filter((v) => v.isDirectory());
  const mdxFiles = subDirs.filter((v) => v.isFile());

  // console.log(mdxFiles);
  return {
    name: dirName,
    posts: mdxFiles.map((v) => {
      const fileContents = fs.readFileSync(join(basePath, v.name), "utf8");
      const { data, content } = matter(fileContents);
      return { content, meta: data };
    }),
    childBoard: dirs.map((v) => getBoard(v.name, basePath)),
  };
}
