export default async function getAllPost() {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return result.json();
}
