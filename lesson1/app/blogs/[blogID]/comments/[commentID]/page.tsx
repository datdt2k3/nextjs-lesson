import React from "react";

type ParamsProps = {
  params: Promise<{
    blogID: string;
    commentID: string;
  }>;
};
export default async function CommentID({ params }: ParamsProps) {
  const resolvedParams = await params;
  return (
    <>
      <div>CommentID Page</div>
      <div>Blog ID: {resolvedParams.blogID}</div>
      <div>Comment ID: {resolvedParams.commentID}</div>
    </>
  );
}
