"use client";
import styled from "@emotion/styled";
import { colors } from "@mui/material";
import { display } from "@mui/system";
import { usePathname, useRouter } from "next/navigation";

const HeaderMenuStyle = styled.div`
  display: flex;
  flex-direction: column;
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

type Menu = {
  name: string;
  path: string;
};

type HeaderMenuProps = {
  menus: Menu[];
};

const HeaderMenu = (props: HeaderMenuProps) => {
  const { menus } = props;
  const currentURI = usePathname();
  const router = useRouter();
  console.log(currentURI);

  const currentURIArray = currentURI.split("/").map((v) => v);
  const menuWeightList = menus.map((menu) =>
    menu.path
      .split("/")
      .map((v) => v)
      .reduce((prev, curr, i) => {
        if (curr[i] && currentURIArray[i] && curr[i] === currentURIArray[i]) {
          return prev + 1;
        }
        return prev;
      }, 0)
  );
  const selectMenuIndex = menuWeightList.reduce((prev, curr, idx) => {
    return menuWeightList[prev] < curr ? idx : prev;
  }, 0);

  return (
    <HeaderMenuStyle>
      <p>{"Navigator chan"}</p>
      <hr />
      {menus.map((menu, i) => (
        <span
          key={i}
          className={
            selectMenuIndex === i && menuWeightList[i] > 0 ? "clicked" : ""
          }
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
