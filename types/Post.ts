// OG Image(Open Graphic Iamge) : the image that appears when you post a link to a web page or video content on your social media page

export type Author = {
  name: string;
  picture: string;
};

export type Post = {
  /** 글 식별자 */
  slug: string;
  /** 제목 */
  title: string;
  /** 본문 (mdx string) */
  content: string;
  /** 글쓴이 */
  author: Author;
  /** 작성시간 YY-MM-DDTHH:mm:ss 로 어때*/
  date: Date;
  /** 링크로 떴을때 나오는 이미지 */
  ogImage: {
    url: string;
  };
  /** 커버이미지 */
  coverImage: string;
  /** 태그 */
  tags: string[];
};

export type PostFields = keyof Post;
