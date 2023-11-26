import { getPostDetail, getPostList } from "@/util/board";
import { join } from "path";
import showdown from "showdown";
import "./markdown.css";

export async function generateStaticParams() {
  const posts = getPostList(join(process.cwd(), "_board", "note"));
  const maxPage = Math.ceil(posts.length / 5);

  // return [...Array(maxPage)].map((_, i) => ({
  //   slug: String(i + 1),
  // }));

  return posts.map((v) => ({ slug: v.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const postDetail = getPostDetail(join(process.cwd(), "_board", "note"), slug);

  let conv = new showdown.Converter();
  let html = conv.makeHtml(postDetail.content);
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="markdown-body"
      ></div>
    </>
  );
}
