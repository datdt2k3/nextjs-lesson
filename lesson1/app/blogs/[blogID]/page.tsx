import { notFound } from "next/navigation";

type ParamsProps = {
  params: Promise<{
    blogID: string;
  }>;
};

export default async function page({ params }: ParamsProps) {
  const { blogID } = await params;
  if (blogID === "test") {
    return notFound();
  }
  return (
    <>
      <div>BlogID: {blogID}</div>
    </>
  );
}
