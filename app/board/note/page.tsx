import { getPostList } from "@/util/board";
import { Container, Paper } from "@mui/material";
import { join } from "path";
import PaginatedNote from "./PaginatedNote";
import { serializeT } from "@/util/common-util";

export default function Note() {
  const posts = getPostList(join(process.cwd(), "_board", "note"));

  return <PaginatedNote posts={serializeT(posts)} />;
}
