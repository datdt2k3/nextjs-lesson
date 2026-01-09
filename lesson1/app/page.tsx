import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <p>Hello</p>
        <Link href="/about" className="text-red-500">
          About Page
        </Link>
        <br />
        <Link href="/service">Service Page</Link>
        <br />
        <Link href="/blogs">Blogs Page</Link>
        <br />
        <Link href="/docs">Docs Page</Link>
      </div>
    </>
  );
}
