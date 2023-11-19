"use client";
import HeaderMenu from "@/components/HeaderMenu";
import Profile from "@/components/Profile";
import styled from "@emotion/styled";
import { ReactNode } from "react";

const DefaultLayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #e6e6e6; */
  width: 1000px;
  margin: 0 auto;
  font-size: 15px;
  font-family: sans-serif;

  header {
    /* background-color: blue; */
    height: 100px;
  }

  section {
    display: flex;
    width: 1000px;
    /* background-color: red; */
    height: 500px;

    .meta_section {
      display: flex;
      flex-direction: column;
      max-width: 200px;
    }

    .content_section {
      max-width: 800px;
    }
  }

  footer {
    background-color: silver;
    height: 100px;
    width: 100%;

    padding-top: 60px;
  }
`;

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
