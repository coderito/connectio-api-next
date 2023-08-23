# Development
![image](https://github.com/itodev-source/connectio-api-next/assets/92868937/4d98c1dc-cd0c-49ef-a5b4-1cccf1f2570f)


- [x] Connection to an api to retrieve all data with next13
- [x] Once rendered retrieve data from an api
- [x] Place Skeleton Item
- [x] Use Typescript
- [x] Use Loading from next 

# TypeScript in fetch
```
  const posts = await fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=10&orderBy=%22$key%22'
  ).then((res) => res.json() as Promise<number[]>);
```

```
  const items = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  ).then(
    (res) =>
      res.json() as Promise<{ title: string; text: string; type: string }>
  );
```

# Typescript in Props
```
export default function Item({
  id,
  title,
  text,
  by,
}: {
  id: number;
  title: string;
  text: string;
  by: string;
}) {
 
  return (
    <div>
      {id}
    </div>
  );
}
```
