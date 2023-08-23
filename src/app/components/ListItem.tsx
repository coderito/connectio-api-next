// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

import Item from './Item';

export default async function ListItem({ id }: { id: number }) {
  //   await sleep(1000000);

  const items = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  ).then(
    (res) =>
      res.json() as Promise<{ title: string; text: string; type: string }>
  );

  return (
    <>
      <Item id={id} title={items.title} text={items.text} by={items.type} />{' '}
    </>
  );
}
