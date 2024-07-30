import Link from "next/link";
import React from "react";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "blog 1",
      des: "Blog description 1",
    },
    {
      id: 2,
      title: "blog 2",
      des: "Blog description 2",
    },
  ];
  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
