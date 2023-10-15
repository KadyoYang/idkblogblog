import Link from "next/link";
import {
  NavBar,
  DropDownMenu,
  LogoImage,
  MenuList,
  MenuButton,
  HomeButton,
} from "./Navigation.style";

export const Navigation = () => {
  return (
      <NavBar>
        <HomeButton>
          {/* 로고 이미지를 next/Image 쓸지 생각중 */}
          <LogoImage src="https://dummyimage.com/60x60" />
        </HomeButton>
        <MenuList>
          <MenuButton>
            <Link href="/post">
              <a>post</a>
            </Link>
          </MenuButton>
          <MenuButton>
            <Link href="/note">
              <a>note</a>
            </Link>
          </MenuButton>
          <MenuButton>
            <Link href="/project">
              <a>project</a>
            </Link>
          </MenuButton>
          <MenuButton>
            <Link href="/about">
              <a>about</a>
            </Link>
          </MenuButton>
        </MenuList>
      </NavBar>
  );
};
