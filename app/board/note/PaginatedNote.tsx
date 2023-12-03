"use client";

import DefaultLayout from "@/containers/DefaultLayout";
import { Serialized, deserializeT, getPage } from "@/util/common-util";
import {
  Card,
  CardContent,
  Container,
  Pagination,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { useEffect, useState } from "react";

// 글 3개정도가 한 페이지
// 그냥 페이지 이동하면 3개 글 주루룩 보이는게 좋지않을까?

// export async function getStaticProps() {
//   const posts = getPostList(join(process.cwd(), "_board", "note"));

//   return {
//     props: {},
//   };
// }

type PaginatedNoteProps = {
  posts: Serialized<
    {
      slug: string;
      content: string;
      meta: {
        title: string;
        writtenAt: Date;
      };
    }[]
  >;
};

export default function PaginatedNote(props: PaginatedNoteProps) {
  const posts = deserializeT(props.posts);
  const [page, setPage] = useState(1);

  const pageSize = 5;
  const maxPage = Math.ceil(posts.length / pageSize);

  const targetPosts = getPage(posts, pageSize, page);

  console.log(posts.length);
  console.log(targetPosts.length);
  return (
    <DefaultLayout>
      <Container sx={{ background: blue }} maxWidth={false}>
        <Paper>
          {targetPosts.map((v, i) => (
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
          ))}
        </Paper>

        <Stack direction={"row"} justifyContent={"space-around"}>
          <Pagination
            count={maxPage}
            page={page}
            shape="rounded"
            onChange={(e, v) => setPage(v)}
          />
        </Stack>
      </Container>
    </DefaultLayout>
  );
}
