type ParamsProps = {
  params: Promise<{
    docPath: string[];
  }>;
};

export default async function DocsPage({ params }: ParamsProps) {
  const { docPath } = (await params) || {};
  console.log(docPath);

  return <div>DocsPage {docPath.join("/")}</div>;
}
