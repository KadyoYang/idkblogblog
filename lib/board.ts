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

type MdxContentType = string & { _brand: "mdxContent" };

type BoardDescription = {
  name: string;
  description: string;
};

type Post = {
  meta: Record<string, any>;
  content: MdxContentType;
};

type Board = {
  // #TODO board descripton.md 에서 추출하도록 추가
  name: string;
  description?: string; // board description
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

  const boardDescription = fs.existsSync(join(basePath, "description.mdx"))
    ? (matter(fs.readFileSync(join(basePath, "description.mdx")))
        .data as BoardDescription)
    : undefined;

  console.log(boardDescription);
  // console.log(mdxFiles);
  return {
    name: boardDescription?.name || dirName,
    description: boardDescription?.description || "",
    posts: mdxFiles.map((v) => {
      const fileContents = fs.readFileSync(join(basePath, v.name), "utf8");
      const { data, content } = matter(fileContents);
      return { content: content as MdxContentType, meta: data };
    }),
    childBoard: dirs.map((v) => getBoard(v.name, basePath)),
  };
}
