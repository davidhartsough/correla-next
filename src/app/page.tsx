import { Suspense } from "react";
import Link from "next/link";
import { Compass } from "lucide-react";
import HighFiveIcon from "@/components/icons/HighFiveIcon";
import FindPersonIcon from "@/components/icons/FindPersonIcon";
import TalkIcon from "@/components/icons/TalkIcon";
import HomeAccountLoad from "@/components/home/HomeAccountLoad";
import HomeAccountLink from "@/components/home/HomeAccountLink";
import BgLogoSpin from "@/components/home/BgLogoSpin";
import "./home.css";

export default async function Home() {
  return (
    <main className="max-w-none p-0">
      <section className="relative">
        <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 overflow-hidden bg-bluebase">
          <div className="mx-auto mt-8 flex items-center justify-center rounded-full text-center opacity-70">
            <BgLogoSpin />
          </div>
        </div>
        <div className="relative z-10 bg-gradient-to-t from-bgbase via-bgbase/30 to-bluebase/70">
          <div className="bg-gradient-to-b from-bluebase/50 pb-4 pt-14">
            <h2 className="text-shadow mb-4 text-center text-2xl leading-tight text-white">
              Find amazing people. <br className="min-[512px]:hidden" />
              Make new connections.
            </h2>
            <div className="m-auto max-w-3xl justify-evenly min-[464px]:flex">
              <div className="m-auto mt-4 basis-52 text-center">
                <p className="text-shadow mb-4 text-lg font-semibold leading-tight text-white">
                  Explore the directory <br /> and find your people.
                </p>
                <Link
                  href="/explore"
                  className="m-auto flex w-44 rounded-3xl border border-white/40 bg-[rgba(38,144,237,.9)] px-8 py-2 font-medium tracking-wide text-white shadow shadow-white/50 transition-all hover:scale-105 hover:shadow-white/60 focus:shadow-white/80"
                >
                  <Compass />
                  <span className="ml-2">Discover</span>
                </Link>
              </div>
              <Suspense fallback={<HomeAccountLink isLoggedIn={false} />}>
                <HomeAccountLoad />
              </Suspense>
            </div>
          </div>
          <div className="bg-gradient-to-t from-bgbase via-bgbase/80 p-4 pb-0">
            <div className="m-auto mb-8 max-w-xl">
              <div className="my-4 flex items-center">
                <div className="h-12 w-12">
                  <FindPersonIcon />
                </div>
                <p className="ml-3">
                  Search for your people using &quot;tags&quot; that describe
                  you.
                </p>
              </div>
              <div className="my-4 flex items-center">
                <div className="h-12 w-12">
                  <HighFiveIcon />
                </div>
                <p className="ml-3">
                  Meet your next friend, partner, mentor, teammate, or
                  connection.
                </p>
              </div>
              <div className="my-4 flex items-center">
                <div className="h-12 w-12">
                  <TalkIcon />
                </div>
                <p className="ml-3">
                  Start conversations through your preferred websites and social
                  media.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
