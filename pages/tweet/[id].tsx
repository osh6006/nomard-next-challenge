import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import useMutation from "../../lib/client/useMutation";

export default function TweetDetail() {
  const router = useRouter();
  const { data, mutate } = useSWR(
    router.query.id ? `/api/tweets/${router.query.id}` : null
  );
  const [toggleFav] = useMutation(`/api/tweets/${router.query.id}/fav`);

  console.log(data);

  return (
    <div>
      <div className="text-2xl uppercase text-center">Tweet contents</div>
      <p className="mt-10 text-center text-xl">{data?.tweet?.content}</p>
      <button
        onClick={() => {
          if (!data) return;
          mutate({ ...data, isLiked: !data.isLiked }, false);
          toggleFav({});
        }}
        className="text=xl bg-sky-500 p-2.5 m-auto w-full mt-10 uppercase rounded-lg hover:bg-sky-300 transition-colors text-red-600 font-bold"
      >
        {data?.isLiked && <p>liked</p>}
        {data?.isLiked || <p>not liked</p>}
      </button>
    </div>
  );
}
