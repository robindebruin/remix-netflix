import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { LoaderArgs } from "@remix-run/server-runtime";
import { getUserId } from "~/session.server";
import MediaRow from "./MediaRow";

export async function loader({ request }: LoaderArgs) {
  const userId = await getUserId(request);
  return json({ test: userId });
}

export default function Browse() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      some ja die ja<p>{data.test}</p>
      <MediaRow />
      <MediaRow />
      <MediaRow />
    </div>
  );
}
