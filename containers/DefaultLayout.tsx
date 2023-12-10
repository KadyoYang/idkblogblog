"use client";
import HeaderMenu from "@/components/HeaderMenu";
import Profile from "@/components/Profile";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { DefaultLayoutStyle } from "./styles";

const DefaultLayout: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const headerMenus = [
    { name: "홈", path: "/" },
    { name: "노트", path: "/board/note" },
    { name: "테스트", path: "/board/test" },
  ];

  return (
    <DefaultLayoutStyle>
      <header>
        <p>반갑습니다 공사중입니다</p>
        <p>=== 정상영업 합니다 ===</p>
      </header>
      <section>
        <div className="meta_section">
          <Profile
            name="주인장"
            description="본 사이트 정상 영업합니다. 저만 사용할겁니다"
          />
          <HeaderMenu menus={headerMenus} headerMenuTitle="메뉴" />
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
