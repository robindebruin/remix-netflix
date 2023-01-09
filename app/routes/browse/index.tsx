import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { LoaderArgs, LoaderFunction } from "@remix-run/server-runtime";
import { getUserId } from "~/session.server";
import MediaRow from "./MediaRow";

type Genre = "thriller" | "comedy";
export interface MediaPreview {
  title: string;
  img_url: string;
  genre: Array<Genre>;
}
export interface MediaWheel {
  rowTitle: string;
  mediaPreview: Array<MediaPreview>;
}

export async function loader({ request }: LoaderArgs) {
  const userId = await getUserId(request);

  const mediaWheel: MediaWheel = {
    rowTitle: "",
    mediaPreview: [
      {
        title: "foo",
        img_url: "blalal.img",
        genre: ["thriller"],
      },
      {
        title: "baz",
        img_url: "blalal.img",
        genre: ["thriller"],
      },
      {
        title: "bar",
        img_url: "blalal.img",
        genre: ["thriller"],
      },
    ],
  };
  return json({ test: userId, mediaWheel });
}

export default function Browse() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      some ja die ja<p>{data.test}</p>
      <MediaRow data={data.mediaWheel} />
    </div>
  );
}
