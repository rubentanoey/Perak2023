import { type NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { api } from "../../utils/api";
import { Header } from "../../components/Header";

import Head from "next/head";

const GameForm: NextPage = () => {
  const { data: games } = api.game.getGames.useQuery();
  const router = useRouter();
  const data2 = router.query;

  const closeModal = () => {
    const x = document.getElementById("Modal");
    x?.classList.add("hidden");
  }

  return (
    <>
      <Head>
        <title>Game Registration</title>
        <meta name="description" content="PERAK 2023 Game Registration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Modal */}
      <div id="Modal" className="hidden w-full flex flex-col fixed justify-center z-10 min-h-screen items-center bg-[#04285A] bg-opacity-50 gap-[24px]">
        <div className="flex flex-col flex-wrap bg-purple-dark p-[30px] w-[300px] md:w-[360px] rounded-xl gap-3 items-center" >
          <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.0507812" y="0.127319" width="85.3528" height="85.3528" rx="42.6764" fill="#FEB048"/>
            <path d="M59.3664 28.5704C58.7595 28.5704 58.1264 28.7696 57.6641 29.2248L37.0205 49.6004C36.4112 50.2002 35.7995 50.0889 35.3206 49.3823L28.2173 38.9029C27.4918 37.8336 25.9745 37.5348 24.8862 38.2485C23.8003 38.9621 23.4968 40.4535 24.2223 41.5227L31.3232 52.0021C33.4618 55.1531 37.6275 55.5538 40.3517 52.8747L61.0687 32.5725C61.991 31.6621 61.991 30.1352 61.0687 29.2248C60.6064 28.7696 59.971 28.5704 59.3664 28.5704Z" fill="black" fill-opacity="0.5"/>
          </svg>
          <div className="text-center font-bold text-orange text-xl md:text-2xl">
            Apakah Anda Yakin Ingin Mendaftar di Permainan Ini?
          </div>
          <div className="text-center font-medium text-white text-md md:text-lg">
            Pastikan semua data yang telah anda masukkan tidak ada yang salah. Anda tidak bisa mengubah data setelah pendaftaran tersimpan.
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-4">
            <button form="Registerform" className="home bg-orange flex flex-row gap-2 px-2 py-1 md:px-7 md:py-3 items-center rounded-md">
              <div className="text-purple-darkest md:text-base font-bold">Simpan</div>
            </button>
            <button onClick={closeModal} type="submit" className="home bg-background-light flex flex-row gap-2 px-2 py-1 md:px-7 md:py-3 items-center rounded-md">
              <div className="text-purple-darkest md:text-base font-bold">Batal</div>
            </button>
          </div>
        </div>
      </div>
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
              <div className="relative select-none md:gap-[120px]">
                <div className="flex flex-col gap-4 justify-left 
                min-h-screen px-[20px] py-[80px] md:px-[120px] md:py-[60px]">
                  <div className="font-black text-orange text-2xl lg:text-4xl flex flex-wrap w-[280px] md:w-[400px] text-border-2 drop-shadow-[4px_4px_rgba(0,0,0,1)]">
                    Pendaftaran Game Individual
                  </div>
                  <div className="font-normal tracking-wider text-white text-xl md:text-3xl flex flex-wrap w-[200px] font-custom drop-shadow-[2px_2px_rgba(0,0,0,1)]">
                    {data2.name}
                  </div>
                  <div className="mt-[32px] font-normal text-background-light text-lg flex flex-wrap w-[300px]">
                    Biaya Pendaftaran : Rp{data2.registerationFee}
                  </div>
                  <div className="mb-[32px] font-normal text-background-light text-sm flex flex-wrap md:w-[400px]">
                    Instruksi pembayaran diberikan setelah mengisi form pendaftaran
                  </div>
                  <Content></Content>
                </div>
                
              </div>
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

    const openModal = () => {
      const x = document.getElementById("Modal");
      x?.classList.remove("hidden");
    }
    
    const createRegistrant = api.auth.register.useMutation({
        onSuccess: () => {
            alert("Registrant created!");
            window.location.href = "/gameSummary?name=" + name + "&npm=" + npm + "&userType=" + typeId + "&gameId=" + data2.id;
        }, 
        onError: (error) => {
            alert(error);
        }

    });  
    const router = useRouter(); 
    const data2 = router.query;
    
    return (
      <div className="flex flex-col min-w-screen min-h-screen object-center">
        <form 
            className="flex flex-col gap-2"
            id = "Registerform"
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
            <div className="flex flex-col md:flex-row gap-2 md:gap-5">

                <div className="flex gap-3 items-center">
            
                    <input
                    className="h-[28px] w-[28px] md:h-[32px] md:w-[32px] accent-green-800"
                    id="staf"
                    name="typeId"
                    type="radio" 
                    value={"U2"}
                    onChange={(e) => setTypeId(e.target.value)}
                    />
                    <label htmlFor="staf" id="U2" 
                    className="font-medium text-base md:text-xl text-background-light">Elemen Staf / Dosen</label>
                </div>

                <div className="flex gap-3 items-center">
                    <input
                    className="h-[28px] w-[28px] md:h-[32px] md:w-[32px] accent-green-800 hover:bg-red-500"
                    id="mahasiswa" 
                    name="typeId"
                    type="radio" 
                    value={"U1"}
                    onChange={(e) => setTypeId(e.target.value)}
                    />
                    <label htmlFor="mahasiswa" id="U2"
                    className="font-medium text-base md:text-xl text-background-light">Mahasiswa</label>
                </div>
            
            </div>

            <label htmlFor="namaLengkap" className="mt-2 font-medium 
            text-background-light">Nama Lengkap</label>
            <input
                id="namaLengkap" 
                type="text" 
                placeholder="Perry Perak"
                className="min-w-screen md:w-[500px] h-[40px] rounded-lg bg-white 
                text-purple-darkest px-4 outline outline-2 outline-background-light 
                focus:outline-purple-light focus:shadow-lg focus:shadow-purple/50"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

            <label htmlFor="namaPanggilan" className="mt-2 font-medium 
            text-background-light">Nama Panggilan</label>
            <input
                id="namaPanggilan" 
                type="text" 
                placeholder="Perry"
                className="min-w-screen md:w-[500px] h-[40px] rounded-lg bg-white 
                text-purple-darkest px-4 outline outline-2 outline-background-light 
                focus:outline-purple-light focus:shadow-lg focus:shadow-purple/50"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                />

            <label htmlFor="NPM" className="mt-2 font-medium 
            text-background-light">NPM</label>
            <input
                id="NPM" 
                type="text" 
                placeholder="2100000000"
                className="min-w-screen md:w-[500px] h-[40px] rounded-lg bg-white 
                text-purple-darkest px-4 outline outline-2 outline-background-light 
                focus:outline-purple-light focus:shadow-lg focus:shadow-purple/50"
                value={npm}
                onChange={(e) => setNpm(e.target.value)}
                />

            <label htmlFor="IDLine" className="mt-2 font-medium 
            text-background-light">ID Line / WhatsApp</label>
            <input
                id="IDLine" 
                type="text" 
                placeholder="perrytheperak"
                className="min-w-screen md:w-[500px] h-[40px] rounded-lg bg-white 
                text-purple-darkest px-4 outline outline-2 outline-background-light 
                focus:outline-purple-light focus:shadow-lg focus:shadow-purple/50"
                onChange={(e) => setContactInfo(e.target.value)}
                value={contactInfo}
                />
            
        </form>
        <button onClick={openModal} className=" min-w-screen hover:shadow-lg px-4 hover:shadow-green-500/30 mt-8 text-background-light md:w-[500px] h-[40px] rounded-lg bg-[#188C58]">  
          Daftar Sekarang
        </button>
      </div>
    )
};

export default GameForm;
