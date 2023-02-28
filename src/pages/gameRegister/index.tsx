import { type NextPage } from "next";
import Link from "next/link";

import Head from "next/head";
import { useRouter } from "next/router";

import { api } from "../../utils/api";
import { Header } from "../../components/Header";


const GameRegister: NextPage = () => {
  const { data: games } = api.game.getGames.useQuery();
  return (
    <>
      <Head>
        <title>Game Registration</title>
        <meta name="description" content="PERAK 2023 Game Registration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Header></Header>
        <div className="relative bg-purple-darkest">
          <div className="flex flex-row gap-[200px]">
            <div className="flex flex-col gap-4 justify-left min-h-screen px-[120px] py-[60px]">
              <div className="font-black text-orange text-4xl flex flex-wrap w-[400px] text-border-2 drop-shadow-[4px_4px_rgba(0,0,0,1)]">
                Pilih games yang kamu inginkan 
              </div>
              <div className="font-normal tracking-wider text-white text-2xl flex flex-wrap w-[200px] font-custom drop-shadow-[2px_2px_rgba(0,0,0,1)]">
                Game individual
              </div>

              <ul className="flex flex-row gap-4">  
                  {games?.map((game) => (
                    <li key={game.id}>
                      <div className="flex bg-purple justify-center items-center outline outline-6 outline-purple-light h-[120px] w-[240px] rounded-lg">
                        <Link className="text-background-light text-2xl tracking-wider font-custom drop-shadow-[4px_4px_rgba(0,0,0,1)" href= {{
                          pathname:"/gameForm",
                          query: game
                        }}>
                          {game.name}
                        </Link>
                      </div>
                    </li>
                    ))}
              </ul>
            </div>

            <div className="relative top-2">
              <img src="HomepageReg2.png" alt="star" />
            </div>
          </div>
          
          <div className="relative bottom-0 order-last">
            <img src="HomepageReg3.png" alt="star" />
          </div>
        </div>
      </main>
    </>
  );
};

export default GameRegister;
