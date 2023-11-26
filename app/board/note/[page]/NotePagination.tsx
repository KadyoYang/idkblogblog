"use client";

import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";

export default function NotePagination({
  maxPage,
  currentPage,
}: {
  maxPage: number;
  currentPage: number;
}) {
  const router = useRouter();
  return (
    <>
      <Pagination
        count={maxPage}
        page={currentPage}
        shape="rounded"
        onChange={(e, v) => router.push(`/board/note/${v}`)}
      />
    </>
  );
}
