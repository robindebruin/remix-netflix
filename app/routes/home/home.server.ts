import { json } from "@remix-run/node";

export type Data = { data: { title: string } };

export const getData = async (): Promise<Data> => {
  return {
    data: {
      title: "welkom home",
    },
  };
};
