import { remark } from "remark";
import html from "remark-html";
import remarkMdx from "remark-mdx";

const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(remarkMdx).process(markdown);
  return result.toString();
};

export default markdownToHtml;
