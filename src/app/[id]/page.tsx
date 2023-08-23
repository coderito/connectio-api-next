// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function IdItem({
  params: { id },
}: {
  params: { id: string };
}) {
  //   await sleep(10000);

  const items = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  ).then(
    (res) => res.json() as Promise<{ title: string; text: string; url: string }>
  );

  return <iframe src={items.url} className="w-full h-full" />;
}
