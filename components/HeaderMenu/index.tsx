"use client";
import styled from "@emotion/styled";
import { colors } from "@mui/material";
import { display } from "@mui/system";
import { usePathname, useRouter } from "next/navigation";

type Menu = {
  name: string;
  path: string;
};

type HeaderMenuProps = {
  headerMenuTitle?: string;
  menus: Menu[];
};

const HeaderMenuStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 10px;
  hr {
    width: 100%;
    background: black;
    height: 1px;
    border: 0;
  }
  span {
    cursor: pointer;
    padding: 3px 0;
  }
  .clicked {
    font-weight: bolder;
  }
`;

const HeaderMenu = (props: HeaderMenuProps) => {
  const { menus, headerMenuTitle } = props;
  const currentURI = usePathname();
  const router = useRouter();
  console.log(currentURI);

  return (
    <HeaderMenuStyle>
      <p>{headerMenuTitle}</p>
      <hr />
      {menus.map((menu, i) => (
        <span
          key={i}
          className={currentURI === menu.path ? "clicked" : ""}
          onClick={() => {
            router.push(menu.path);
          }}
        >
          {menu.name}
        </span>
      ))}
    </HeaderMenuStyle>
  );
};

export default HeaderMenu;
