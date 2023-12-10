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
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

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
        subTitle: string;
        writtenAt: Date;
      };
    }[]
  >;
};

export default function PaginatedNote(props: PaginatedNoteProps) {
  const posts = deserializeT(props.posts);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setQueryParams = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const page = Number.parseInt(searchParams.get("page") || "1");
  const setPage = (targetPage: number) => {
    router.push(pathname + "?" + setQueryParams("page", String(targetPage)));
  };
  const pageSize = 5;
  const maxPage = Math.ceil(posts.length / pageSize);

  const targetPosts = getPage(posts, pageSize, page);

  return (
    <DefaultLayout>
      <Container maxWidth={false}>
        <Paper sx={{ minHeight: "600px" }}>
          {targetPosts.map((v, i) => (
            <Card
              variant="outlined"
              sx={{
                maxWidth: "100%",
                height: "100px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
              key={i}
              onClick={() => {
                router.push(`/board/note/${encodeURIComponent(v.slug)}`);
              }}
            >
              <CardContent>
                <p>{v.meta.title}</p>
                <Typography overflow={"hidden"} textOverflow={"ellipsis"}>
                  {v.meta.subTitle}
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
