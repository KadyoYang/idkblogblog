"use client";

import DefaultLayout from "@/containers/DefaultLayout";
import { Serialized, deserializeT, getPage } from "@/util/common-util";
import styled from "@emotion/styled";
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

const PaginatedNoteWrapper = styled.div`
  .header {
  }

  .content {
    .post {
      border: 1px solid black;
      cursor: "pointer";
      :hover {
        background-color: yellow;
      }
    }
  }
`;

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
      <PaginatedNoteWrapper>
        <div className="header">Note</div>
        <div className="content">
          {targetPosts.map((v, i) => (
            <div
              className="post"
              key={i}
              onClick={() => {
                router.push(`/board/note/${encodeURIComponent(v.slug)}`);
              }}
            >
              <p>{v.meta.title}</p>
              {v.meta.subTitle}
            </div>
          ))}
        </div>
      </PaginatedNoteWrapper>

      <div style={{ maxHeight: "600px" }}>
        <Stack direction={"row"} justifyContent={"space-around"}>
          <Pagination
            count={maxPage}
            page={page}
            shape="rounded"
            onChange={(e, v) => setPage(v)}
          />
        </Stack>
      </div>
    </DefaultLayout>
  );
}
