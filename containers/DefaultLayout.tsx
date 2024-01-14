"use client";
import HeaderMenu from "@/components/HeaderMenu";
import Profile from "@/components/Profile";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { DefaultLayoutStyle } from "./styles";
import { useRouter } from "next/navigation";
import BlogBanner from "@/components/BlogBanner";

const DefaultLayout: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const headerMenus = [
    { name: "노트", path: "/board/note" },
    { name: "노트", path: "/board/note" },
    { name: "노트", path: "/board/note" },
  ];

  return (
    <DefaultLayoutStyle>
      <header>
        <BlogBanner></BlogBanner>
      </header>

      <section>
        <div className="meta_section">
          <HeaderMenu menus={headerMenus} />
        </div>
        <div className="content_section">{children}</div>
      </section>

      <footer>
        <p>안녕하세요</p>
      </footer>
    </DefaultLayoutStyle>
  );
};

// export const applyDefaultLayout = (children: ReactNode) => (
//   <DefaultLayout>{children}</DefaultLayout>
// );

export default DefaultLayout;
