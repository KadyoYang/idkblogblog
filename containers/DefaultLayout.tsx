"use client";
import HeaderMenu from "@/components/HeaderMenu";
import styled from "@emotion/styled";
import { ReactNode } from "react";

const DefaultLayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-color: grey;

  .header_section {
  }
`;

const DefaultLayout: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const headerMenus = [
    { name: "홈", path: "/" },
    { name: "테스트", path: "/test" },
    { name: "테스트", path: "/test" },
  ];

  return (
    <DefaultLayoutStyle>
      <div className="header_section"></div>
      <HeaderMenu menus={headerMenus} />
      {children}
    </DefaultLayoutStyle>
  );
};

// export const applyDefaultLayout = (children: ReactNode) => (
//   <DefaultLayout>{children}</DefaultLayout>
// );

export default DefaultLayout;
