import { Metadata } from "next";
import BlogList from "@/components/blog";

export const metadata: Metadata = {
  title: "博客列表",
  description: "Home page description",
};

const BlogPage = () => {
  return (
    <BlogList />
  );
};
export default BlogPage;
