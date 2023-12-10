"use client";
import styled from "@emotion/styled";
import { usePathname, useRouter } from "next/navigation";

type Menu = {
  name: string;
  path: string;
};

type HeaderMenuProps = {
  headerMenuTitle?: string;
  menus: Menu[];
};

const BannerStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  p {
    font-size: 20px;
    cursor: pointer;
    padding: 15px;
  }
`;

const BlogBanner = () => {
  const currentURI = usePathname();
  const router = useRouter();
  console.log(currentURI);

  return (
    <BannerStyle>
      <p onClick={() => router.push("/")}>
        {"Common 개발자의 지구정복 작전계획"}
      </p>
    </BannerStyle>
  );
};

export default BlogBanner;
