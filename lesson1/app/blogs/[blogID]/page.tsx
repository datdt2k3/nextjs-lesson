import { notFound } from "next/navigation";

type ParamsProps = {
  params: Promise<{
    blogID: string;
  }>;
};

export default async function BlogIDPage({ params }: ParamsProps) {
  const { blogID } = await params;
  if (!/^\d+$/.test(blogID)) {
    return notFound();
  }
  return (
    <>
      <div>BlogID: {blogID}</div>
    </>
  );
}
