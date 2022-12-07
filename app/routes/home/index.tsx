import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getData } from "./home.server";

type Data = { data: { title: string } };

export const loader = async () => {
  return json<any>({
    data: await getData(),
  });
};

export default function Home() {
  const { data } = useLoaderData() as Data;
  return (
    <main>
      <h1>home page</h1>
      <p>{JSON.stringify(data)}</p>
    </main>
  );
}
