import { getPostDetail, getPostList } from "@/util/board";
import { join } from "path";
import showdown from "showdown";
import "./markdown.css";
import DefaultLayout from "@/containers/DefaultLayout";
import { Container } from "@mui/material";

export async function generateStaticParams() {
  const posts = getPostList(join(process.cwd(), "_board", "note"));
  const maxPage = Math.ceil(posts.length / 5);

  // return [...Array(maxPage)].map((_, i) => ({
  //   slug: String(i + 1),
  // }));

  return posts.map((v) => ({ postSlug: v.slug }));
}

export default function Page({ params }: { params: { postSlug: string } }) {
  const { postSlug } = params;

  const postDetail = getPostDetail(
    join(process.cwd(), "_board", "note"),
    decodeURIComponent(postSlug)
  );

  let conv = new showdown.Converter();
  let html = conv.makeHtml(postDetail.content);
  return (
    <DefaultLayout>
      <div style={{ height: "100%" }}>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="markdown-body"
        ></div>
      </div>
    </DefaultLayout>
  );
}
