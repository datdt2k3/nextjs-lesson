"use client";

import { usePathname } from "next/navigation";

export default function NotFoundBlogPage() {
  const pathName = usePathname();
  console.log("NotFoundBlogPage pathName:", pathName);
  return (
    <div>
      <h1>Blog with ID: {pathName.split("/")[2]} Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}
