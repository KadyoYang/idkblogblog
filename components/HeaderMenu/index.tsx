"use client";
import styled from "@emotion/styled";
import { display } from "@mui/system";
import { usePathname, useRouter } from "next/navigation";

type Menu = {
  name: string;
  path: string;
};

type HeaderMenuProps = {
  menus: Menu[];
};

const HeaderMenuStyle = styled.div`
  display: flex;
  span {
    cursor: pointer;
    padding: 10px;
  }
  .clicked {
    color: #ff9050;
  }
`;

const HeaderMenu = (props: HeaderMenuProps) => {
  const { menus } = props;
  const currentURI = usePathname();
  const router = useRouter();
  console.log(currentURI);

  return (
    <HeaderMenuStyle>
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
