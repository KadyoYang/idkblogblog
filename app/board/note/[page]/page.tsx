import { getPostList } from "@/util/board";
import { Card, CardContent, Container, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { join } from "path";
import NotePagination from "./NotePagination";

// 글 3개정도가 한 페이지
// 그냥 페이지 이동하면 3개 글 주루룩 보이는게 좋지않을까?

// export async function getStaticProps() {
//   const posts = getPostList(join(process.cwd(), "_board", "note"));

//   return {
//     props: {},
//   };
// }

export async function generateStaticParams() {
  const posts = getPostList(join(process.cwd(), "_board", "note"));
  const maxPage = Math.ceil(posts.length / 5);

  return [...Array(maxPage)].map((_, i) => ({
    page: String(i + 1),
  }));
}

export default function Note({ params }: { params: { page: string } }) {
  const posts = getPostList(join(process.cwd(), "_board", "note"));
  const pageSize = 5;
  const page = Number.parseInt(params.page ?? "1", 10) ?? 1;
  const targetIndex = page * pageSize;

  const maxPage = Math.ceil(posts.length / pageSize);
  const targetPosts = posts.splice(
    (page - 1) * pageSize,
    targetIndex < posts.length ? targetIndex : posts.length
  );
  return (
    <Container>
      <Paper>
        {targetPosts.map((v, i) => (
          <Link key={i} href={`/board/note/post/${v.slug}`}>
            <Card variant="outlined" sx={{ maxWidth: "100%" }} key={i}>
              <CardContent>
                <Typography variant={"h5"} gutterBottom>
                  {v.meta.title}
                </Typography>
                <Typography overflow={"hidden"} textOverflow={"ellipsis"}>
                  {v.meta.title}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Paper>

      <Paper>
        <NotePagination maxPage={maxPage} currentPage={page} />
      </Paper>
    </Container>
  );
}
