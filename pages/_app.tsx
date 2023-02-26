import { SWRConfig } from "swr";
import "../global.css";

export default function App({ Component, pageProps }: any) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then(response => response.json()),
      }}
    >
      <main className="flex flex-col justify-center items-center w-full h-screen bg-neutral-900">
        <section className="h-full w-full flex flex-col bg-neutral-800 items-center overflow-y-auto max-w-3xl py-10 text-white">
          <div className="w-full flex items-center justify-center gap-5 flex-1">
            <svg
              viewBox="328 355 335 276"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-cyan-400"
            >
              <path
                d="
                  M 630, 425
                  A 195, 195 0 0 1 331, 600
                  A 142, 142 0 0 0 428, 570
                  A  70,  70 0 0 1 370, 523
                  A  70,  70 0 0 0 401, 521
                  A  70,  70 0 0 1 344, 455
                  A  70,  70 0 0 0 372, 460
                  A  70,  70 0 0 1 354, 370
                  A 195, 195 0 0 0 495, 442
                  A  67,  67 0 0 1 611, 380
                  A 117, 117 0 0 0 654, 363
                  A  65,  65 0 0 1 623, 401
                  A 117, 117 0 0 0 662, 390
                  A  65,  65 0 0 1 630, 425
                  Z"
                fill="#3BA9EE"
              />
            </svg>
            <h1 className="text-4xl text-white font-bold sm:text-5xl ">
              Tweeeter
            </h1>
          </div>
          <Component {...pageProps} />
        </section>
      </main>
    </SWRConfig>
  );
}
