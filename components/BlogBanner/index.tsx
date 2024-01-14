"use client";
import styled from "@emotion/styled";
import { usePathname, useRouter } from "next/navigation";

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
      <p onClick={() => router.push("/")}>{"Yangchan Note :D"}</p>
    </BannerStyle>
  );
};

export default BlogBanner;
