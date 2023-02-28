import { type NextPage } from "next";
import Link from "next/link";

import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import { api } from "../../utils/api";
import { Header } from "../../components/Header";
import { prisma } from "../../server/db";


const GameForm: NextPage = () => {
  const { data: games } = api.game.getGames.useQuery();
  const router = useRouter();
  const data2 = router.query;
  return (
    <>
      <Head>
        <title>Game Registration</title>
        <meta name="description" content="PERAK 2023 Game Registration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Header></Header>
        <div className="flex min-h-screen min-w-screen bg-purple-darkest">
          <div className="flex flex-row">
            <div className="flex flex-col gap-4 justify-left min-h-screen px-[120px] py-[60px]">
              <div className="font-black text-orange text-4xl flex flex-wrap w-[400px] text-border-2 drop-shadow-[4px_4px_rgba(0,0,0,1)]">
                Pendaftaran Game Individual
              </div>
              <div className="font-normal tracking-wider text-white text-3xl flex flex-wrap w-[200px] font-custom drop-shadow-[2px_2px_rgba(0,0,0,1)]">
                {data2.name}
              </div>
              <div className="mt-[32px] font-normal text-background-light text-lg flex flex-wrap w-[300px]">
                Biaya Pendaftaran : Rp{data2.registerationFee}
              </div>
              <div className="mb-[32px] font-normal text-background-light text-sm flex flex-wrap w-[400px]">
                Instruksi pembayaran diberikan setelah mengisi form pendaftaran
              </div>
              <Content></Content>
            </div>
            <div className="relative">
              <img src="HomepageReg4.png" alt="star" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const Content: React.FC = () => {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [npm, setNpm] = useState("");
    const [contactInfo, setContactInfo] = useState("");
    const [typeId, setTypeId] = useState("");


    
    const createRegistrant = api.auth.register.useMutation({
        onSuccess: () => {
            alert("Registrant created!");
            window.location.href = "/gameClosure?name=" + name + "&npm=" + npm + "&userType=" + typeId + "&gameId=" + data2.id;
        }, 
        onError: (error) => {
            alert(error);
        }

    });  
    const router = useRouter(); 
    const data2 = router.query;
    
    return (
        <form 
            className="flex flex-col gap-2"
            onSubmit={(e) => {
                e.preventDefault();
                createRegistrant.mutate({
                    name,
                    contactInfo,
                    nickname,
                    npm,
                    registeredGameId: data2.id as string,
                    typeId,
                });
                setName(""), setNickname(""), setNpm(""), setContactInfo(""), setTypeId("");
                
            }}
            >
            <div className="flex flex-row gap-5">

                <div className="flex gap-3 items-center">
            
                    <input
                    className="h-[32px] w-[32px] accent-green-800"
                    id="staf"
                    name="typeId"
                    type="radio" 
                    value={"U2"}
                    onChange={(e) => setTypeId(e.target.value)}
                    />
                    <label htmlFor="staf" id="U2" 
                    className="font-medium text-xl text-background-light">Elemen Staf / Dosen</label>
                </div>

                <div className="flex gap-3 items-center">
                    <input
                    className="h-[32px] w-[32px] accent-green-800"
                    id="mahasiswa" 
                    name="typeId"
                    type="radio" 
                    value={"U1"}
                    onChange={(e) => setTypeId(e.target.value)}
                    />
                    <label htmlFor="mahasiswa" id="U2"
                    className="font-medium text-xl text-background-light">Mahasiswa</label>
                </div>
            
            </div>

            <label htmlFor="namaLengkap" className="mt-2 font-medium text-background-light">Nama Lengkap</label>
            <input
                id="namaLengkap" 
                type="text" 
                placeholder="Perry Perak"
                className="w-[500px] h-[40px] rounded-lg bg-white 
                text-purple-darkest px-4 outline outline-2 outline-background-light 
                focus:outline-purple-light focus:shadow-lg focus:shadow-purple/50"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

            <label htmlFor="namaPanggilan" className="mt-2 font-medium text-background-light">Nama Panggilan</label>
            <input
                id="namaPanggilan" 
                type="text" 
                placeholder="Perry"
                className="w-[500px] h-[40px] rounded-lg bg-white 
                text-purple-darkest px-4 outline outline-2 outline-background-light 
                focus:outline-purple-light focus:shadow-lg focus:shadow-purple/50"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                />

            <label htmlFor="NPM" className="mt-2 font-medium text-background-light">NPM</label>
            <input
                id="NPM" 
                type="text" 
                placeholder="2100000000"
                className="w-[500px] h-[40px] rounded-lg bg-white 
                text-purple-darkest px-4 outline outline-2 outline-background-light 
                focus:outline-purple-light focus:shadow-lg focus:shadow-purple/50"
                value={npm}
                onChange={(e) => setNpm(e.target.value)}
                />

            <label htmlFor="IDLine" className="mt-2 font-medium text-background-light">ID Line / WhatsApp</label>
            <input
                id="IDLine" 
                type="text" 
                placeholder="perrytheperak"
                className="w-[500px] h-[40px] rounded-lg bg-white 
                text-purple-darkest px-4 outline outline-2 outline-background-light 
                focus:outline-purple-light focus:shadow-lg focus:shadow-purple/50"
                onChange={(e) => setContactInfo(e.target.value)}
                value={contactInfo}
                />
            
            <button typeof="submit" className="hover:shadow-lg hover:shadow-green-500/30 mt-8 text-background-light w-[500px] h-[40px] rounded-lg bg-[#188C58]" >
                <Link href= {{
                    pathname:"/gameClosure",
                    
                }}>
                    Daftar Sekarang
                </Link>
            </button>
        </form>
    )
};

export default GameForm;
