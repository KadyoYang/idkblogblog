import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Post, PostFields } from "../types/Post";

const handbookDirectory = join(process.cwd(), "_posts", "handbook");

/**
 * handbook 슬러그를 리턴한다
 * @returns Map<1단계 폴더, 속한 mdx 파일 배열>
 */
export function getHandbookSlugs() {
  const subDirs = fs.readdirSync(handbookDirectory, { withFileTypes: true });
  const dirToMdxFileNames: Map<string, string[]> = new Map();
  subDirs.forEach((dir) => {
    if (dir.isDirectory()) {
      let subMdxFiles = fs.readdirSync(join(handbookDirectory, dir.name));
      if (subMdxFiles.length > 0) dirToMdxFileNames.set(dir.name, subMdxFiles);
    }
  });
  return dirToMdxFileNames;
}

/**
 * 핸드북을 리턴한다.
 * @param slug [폴더명, 슬러그]
 * @param fields 원하는 필드
 * @returns Post
 */
export function getHandbookBySlug(slug: string[], fields: PostFields[]) {
  const realSlug = slug[1].replace(/\.mdx$/, "");
  const fullPath = join(handbookDirectory, slug[0], `${realSlug}.mdx`);
  // console.log(`slug is ${slug}`);
  // console.log(`full path is ${fullPath}`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // @ts-ignore
  const items: PostType = {};

  // 필요한 최소데이터만 노출되게끔 fields 파라미터에 입력된 것만 넣는다.
  fields.forEach((field) => {
    switch (field) {
      case "slug":
        // @ts-ignore
        items[field] = realSlug;
        break;
      case "content":
        // @ts-ignore
        items[field] = content;
        break;
      default:
        if (typeof data[field] !== "undefined") {
          // @ts-ignore
          items[field] = data[field];
        }
        break;
    }
  });

  return items;
}

/**
 * 핸드북을 전부 리턴한다
 * @param fields
 * @returns dirName to Post[] Map을 반환한다.
 */
export function getAllHandbooks(fields: PostFields[] = []) {
  const slugs = getHandbookSlugs();
  const result: Map<string, Post[]> = new Map();

  slugs.forEach((values, key, map) => {
    // console.log(`key : ${key} values : ${values}`);
    result.set(
      key,
      values.map((val) => {
        return getHandbookBySlug([key, val], fields);
      })
    );
  });
  return result;
}
