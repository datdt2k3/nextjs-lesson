type ParamsProps = {
  params: Promise<{
    blogID: string;
  }>;
};
export default async function CommentPage({ params }: ParamsProps) {
  const resolvedParams = await params;
  return (
    <>
      <div>CommentPage</div>
      <div>Comments on Blog: {resolvedParams.blogID}</div>
    </>
  );
}
