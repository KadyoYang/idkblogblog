import { getPostDetail, getPostList } from "@/util/board";
import { join } from "path";

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

  return (
    <>
      <h2>{JSON.stringify(postDetail)}</h2>
    </>
  );
}
