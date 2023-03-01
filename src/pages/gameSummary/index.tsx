import { type NextPage } from "next";
import Link from "next/link";

import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import { api } from "../../utils/api";
import { Header } from "../../components/Header";


const GameSummary: NextPage = () => {
  const router = useRouter();
  const data2 = router.query; 
  
  const game = api.game.getGames.useQuery().data?.find((game) => game.id === data2.gameId);
  const regs = api.auth.getRegistrants.useQuery().data?.find((regs) => regs.name === data2.name && regs.npm === data2.npm);
  var user = "";
  if (data2.userType == "U1")
    user = "Mahasiswa";
  else user = "Staf / Dosen";

  return (
    <>
      <Head>
        <title>Game Registration</title>
        <meta name="description" content="PERAK 2023 Game Registration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Main */}
      <main >
        {/* Header */}
        <div className="sticky top-0 z-10 select-none">
          <Header></Header>
        </div>
        {/* Scroll */}
        <div className="scroll-container">
          <div className="min-h-screen bg-purple-darkest">
            <div className="bg-[url('../../public/GameFormBg2.svg')] md:bg-[url('../../public/GameFormBg.svg')] 
            min-w-screen relative select-none bg-cover bg-top bg-no-repeat xl:bg-cover">
              <div className="flex flex-col gap-4 justify-left 
              min-h-screen px-[20px] py-[80px] md:px-[120px] md:py-[60px]">
                <div className="font-black text-orange text-2xl lg:text-4xl flex flex-wrap w-[280px] md:w-[400px] text-border-2 drop-shadow-[4px_4px_rgba(0,0,0,1)]">
                  Pendaftaran Game Individual
                </div>
                <div className="font-normal tracking-wider text-white text-xl md:text-3xl flex flex-wrap w-[200px] font-custom drop-shadow-[2px_2px_rgba(0,0,0,1)]">
                  {game?.name}
                </div>
                <div className="w-[320px] mt-[32px] font-normal text-background-light text-lg flex flex-wrap md:w-[300px]">
                  Terima kasih telah melakukan pendaftaran games di PERAK 2023
                </div>
                <div className="min-w-screen font-normal text-background-light text-sm flex flex-wrap md:w-[400px]">
                  Silahkan melakukan pembayaran biaya pendaftaran sebesar
                </div>
                <div className="min-w-screen font-bold  text-background-light text-lg flex flex-wrap md:w-[300px]">
                  Rp {game?.registerationFee}
                </div>
                <div className="min-w-screen font-bold  text-background-light text-sm flex flex-wrap md:w-[400px]">
                  Melalui nomor rekening:
                </div>
                <div className="min-w-screen font-bold  text-background-light text-sm flex flex-wrap md:w-[400px]">
                  <ul className="flex flex-col gap-1">  
                      {game?.paymentInfos.map((payment) => (
                          <li className="flex flex-row gap-2 ml-2">
                          <div className="font-semibold text-background-light">
                              {payment.name}
                          </div>
                          <div className="font-medium text-background-light">
                              {payment.number}
                          </div>
                          </li>
                          ))}
                  </ul>
                </div>
                <div className="flex flex-col bg-purple-dark outline outline-3 outline-black rounded-lg h-[120px] w-[240px] justify-center items-center">
                  <div>
                    <div className="text-white text-3xl">
                      {regs?.name}
                    </div>
                    <div className="text-background">
                      {regs?.nickname} - {user}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="min-w-screen mt-4 font-bold  text-background-light text-sm flex flex-wrap md:w-[400px]">
                    NPM
                  </div>
                  <div className="min-w-screen font-medium  text-background-light text-sm flex flex-wrap md:w-[400px]">
                    {regs?.npm}
                  </div>
                </div>
                <div>
                  <div className="min-w-screen font-bold  text-background-light text-sm flex flex-wrap md:w-[400px]">
                    ID Line / WhatsApp
                  </div>
                  <div className="min-w-screen font-medium  text-background-light text-sm flex flex-wrap md:w-[400px]">
                    {regs?.contactInfo}
                  </div>
                </div>   
                <button className="min-w-screen hover:shadow-lg hover:shadow-green-500/30 mt-8 text-background-light md:w-[500px] h-[40px] rounded-lg bg-[#188C58]" >
                  <Link href= {{
                      pathname:"/gameRegister",
                      
                  }}>
                      Daftar Games Lain
                  </Link>
                </button>        
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default GameSummary;
