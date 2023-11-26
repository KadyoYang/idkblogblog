"use client";

import { Card, CardContent, Container, Paper, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { memo, useMemo } from "react";

// 글 3개정도가 한 페이지
// 그냥 페이지 이동하면 3개 글 주루룩 보이는게 좋지않을까?

// export async function getStaticProps() {
//   const posts = getPostList(join(process.cwd(), "_board", "note"));

//   return {
//     props: {},
//   };
// }

export default function PaginatedNote({
  posts,
}: {
  posts: {
    slug: string;
    content: string;
    meta: {
      title: string;
      writtenAt: Date;
    };
  }[];
}) {
  // const { page } = usePagination();
  const searchParams = useSearchParams();
  const page = Number.parseInt(searchParams.get("page") ?? "1", 10) ?? 1;
  const pageSize = 10;
  const targetIndex = page * pageSize;

  const targetPosts = useMemo(() => {
    const targetPosts = posts.splice(
      page - 1,
      targetIndex < posts.length ? targetIndex : posts.length
    );
    return targetPosts;
  }, [targetIndex]);

  return (
    // <DefaultLayout>
    <Container>
      <Paper>
        {targetPosts.map((v, i) => (
          <Card variant="outlined" sx={{ maxWidth: "100%" }} key={i}>
            <CardContent>
              <Typography variant={"h5"} gutterBottom>
                제목{"page" + posts.length}
              </Typography>
              <Typography overflow={"hidden"} textOverflow={"ellipsis"}>
                그냥 내용
              </Typography>
            </CardContent>
          </Card>
        ))}

        <Card variant="outlined" sx={{ maxWidth: "100%" }}>
          <CardContent>
            <Typography variant={"h5"} gutterBottom>
              제목{"page" + posts.length}
            </Typography>
            <Typography overflow={"hidden"} textOverflow={"ellipsis"}>
              그냥 내용
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ maxWidth: "100%" }}>
          <CardContent>
            <Typography variant={"h5"} gutterBottom>
              제목
            </Typography>
            <Typography overflow={"hidden"} textOverflow={"ellipsis"}>
              그냥 내용
            </Typography>
          </CardContent>
        </Card>
      </Paper>
      {"aa" + posts.length}
    </Container>

    // </DefaultLayout>
  );
}
