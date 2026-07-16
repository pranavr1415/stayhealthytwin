async function Page() {
  const response = await fetch('http://localhost:3000/api/books');
  const data = await response.json();

  return (
    <main>
      <code>{JSON.stringify(data, null, 2)}</code>
    </main>
  );
}

export default Page;