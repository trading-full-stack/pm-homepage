import Image from "next/image";
import WhitePaperModal from "./WhitePaperModal";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col px-6 items-center justify-center overflow-hidden"
      style={{ fontFamily: "Virgil" }}
    >
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/pm.svg"
          alt="Next.js Logo"
          width={400}
          height={400}
          priority
        />
      </div>

      <h1 className="max-w-full text-3xl sm:text-5xl mt-10 font-bold text-center text-pink-400 whitespace-pre !leading-[1.5]">
        {`Create Biggest Bubble \n with PM Community`}
      </h1>
      <div className="mt-8 flex underline justify-center items-center text-pink-400 divide-x divide-pink-400">
        <span className="text-xl px-4 cursor-pointer">
          <WhitePaperModal />
        </span>
        <span className="text-xl px-4 cursor-pointer">
          <a href="https://twitter.com/FrothC14141" target="_blank">
            Twitter
          </a>
        </span>
        <span className="text-xl px-4 cursor-pointer">
          <a href="https://t.me/FrothCoin1" target="_blank">
            Telegram
          </a>
        </span>
        <span className="text-xl px-4 cursor-pointer">
          <a
            href="https://pancakeswap.finance/swap?outputCurrency=0xa780ec18b48f43c884694aab9c8411e7203234aa"
            target="_blank"
          >
            Buy
          </a>
        </span>
      </div>
    </main>
  );
}
