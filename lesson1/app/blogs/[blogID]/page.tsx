type ParamsProps = {
  params: Promise<{
    blogID: string;
  }>;
};

export default async function page({ params }: ParamsProps) {
  const { blogID } = await params;
  return (
    <>
      <div>BlogID: {blogID}</div>
    </>
  );
}
