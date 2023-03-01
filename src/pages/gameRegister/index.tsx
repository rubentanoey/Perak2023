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
        {/* Header */}
        <div className="sticky top-0 z-10 select-none">
          <Header></Header>
        </div>
        {/* Scroll */}
        <div className="scroll-container">
          <div className="min-h-screen bg-background-light">
            <div className="bg-[url('../../public/GameRegBg2.svg')] md:bg-[url('../../public/GameRegBg.svg')] 
            min-w-screen relative select-none bg-cover bg-top bg-no-repeat xl:bg-cover">
              <div className="relative select-none md:gap-[120px]">
                {/* Content */}
                <div className="flex flex-col gap-4 justify-left min-h-screen px-[20px] py-[80px] md:px-[120px] md:py-[60px]">
                  <div className="flex flex-wrap w-[280px] md:w-[400px] 
                  text-border-2 drop-shadow-[4px_4px_rgba(0,0,0,1)]
                  font-black text-orange text-2xl md:text-4xl">
                    Pilih games yang kamu inginkan 
                  </div>
                  <div className="font-normal tracking-wider text-white text-xl flex flex-wrap w-[200px] font-custom drop-shadow-[2px_2px_rgba(0,0,0,1)]">
                    Game Individual
                  </div>

                  <ul className="flex flex-row flex-wrap md:w-[800px] gap-6 md:gap-10">  
                      {games?.map((game) => (
                        <li key={game.id}>
                          <div className="flex bg-purple justify-center items-center 
                          outline outline-[5px] outline-purple-light
                          h-[120px] w-[172px] md:h-[120px] md:w-[240px] 
                          rounded-lg drop-shadow-[4px_4px_rgba(0,0,0,1)]
                          hover:shadow-lg hover:shadow-black/50">
                            <Link className="text-background-light text-xl md:text-2xl tracking-wider font-custom drop-shadow-[4px_4px_rgba(0,0,0,1)" href= {{
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
                {/* Image */}
                <svg className="absolute hidden xl:block top-10 right-10" width="500" height="217" viewBox="0 0 500 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_442_11994)">
                  <g filter="url(#filter0_ddd_442_11994)">
                  <path d="M474.682 160.482C299.902 -9.16381 272.201 25.976 179.842 45.94C175.601 46.8567 174.154 52.3198 177.135 55.4726C198.224 77.7804 171.951 79.3308 177.218 106.239C177.594 108.163 179.156 109.608 181.076 110.002L470.175 169.308C475.224 170.343 478.38 164.071 474.682 160.482Z" fill="#FEB048"/>
                  <path d="M472.737 156.74C311.236 52.5911 262.576 69.5267 151.732 101.272C147.763 102.408 146.674 107.477 150.062 109.835C181.487 131.713 210.126 122.743 219.641 148.799C220.409 150.901 222.282 152.477 224.516 152.6L469.668 166.132C474.938 166.423 477.173 159.6 472.737 156.74Z" fill="#D25827"/>
                  <path d="M478.167 160.554C290.371 86.7635 205.513 108.101 98.4903 154.382C94.6862 156.027 94.6673 161.014 98.4826 162.969C99.0436 163.257 99.5756 163.526 100.08 163.778C97.3538 163.893 95.7665 166.091 99.2117 173.483C100.073 175.331 102.147 176.491 104.298 176.453L476.636 169.822C482.353 169.72 483.521 162.658 478.167 160.554Z" fill="#F2A343"/>
                  <path d="M107.014 23.2857C100.421 16.2598 88.6225 20.5542 88.0882 30.1741L85.5596 75.7083C85.3165 80.085 82.4877 83.8955 78.3686 85.3947L31.2934 102.529C20.6539 106.401 22.1639 121.9 33.3508 123.646L72.6734 129.783C78.2353 130.651 82.234 135.593 81.9218 141.214L79.8902 177.798C79.3123 188.205 92.2231 193.461 99.079 185.611L134.844 144.655C137.317 141.823 141.069 140.457 144.784 141.037L198.507 149.422C208.806 151.029 215.317 138.703 208.185 131.102L183.113 104.383C179.261 100.278 179.147 93.9221 182.85 89.682L209.028 59.7047C216.475 51.1765 207.67 38.333 197.03 42.2055L149.955 59.3394C145.836 60.8387 141.219 59.738 138.22 56.5415L107.014 23.2857Z" fill="white"/>
                  <path d="M106.087 26.2274C99.4943 19.2015 87.6955 23.4959 87.1613 33.1159L84.7511 76.5164C84.508 80.8932 81.6793 84.7036 77.5601 86.2028L33.0426 102.406C22.4031 106.278 23.9131 121.777 35.1 123.523L71.9382 129.272C77.5001 130.14 81.4987 135.083 81.1866 140.703L79.2734 175.154C78.6955 185.561 91.6063 190.817 98.4622 182.966L132.573 143.905C135.046 141.073 138.799 139.707 142.514 140.287L193.752 148.284C204.051 149.891 210.562 137.565 203.43 129.964L179.82 104.804C175.968 100.699 175.854 94.3425 179.557 90.1024L204.081 62.0191C211.529 53.4908 202.723 40.6474 192.083 44.5198L147.566 60.7229C143.447 62.2221 138.83 61.1215 135.831 57.9249L106.087 26.2274Z" fill="#F36A22"/>
                  </g>
                  </g>
                  <defs>
                  <filter id="filter0_ddd_442_11994" x="21.4942" y="17.2206" width="463.227" height="175.014" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="-2.5888" dy="-2.5888"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_442_11994"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="2.84768"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="effect1_dropShadow_442_11994" result="effect2_dropShadow_442_11994"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="3.10656" dy="1.03552"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="effect2_dropShadow_442_11994" result="effect3_dropShadow_442_11994"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_442_11994" result="shape"/>
                  </filter>
                  <clipPath id="clip0_442_11994">
                  <rect width="500" height="217" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                <svg className="absolute block xl:hidden top-5 right-0" width="150" height="230" viewBox="0 0 446 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_ddd_522_11998)">
                  <path d="M486.356 169.534C311.576 -0.111319 283.875 35.0285 191.516 54.9925C187.275 55.9092 185.828 61.3723 188.809 64.5251C209.898 86.8329 183.625 88.3833 188.891 115.291C189.268 117.215 190.83 118.661 192.75 119.055L481.849 178.36C486.898 179.396 490.054 173.124 486.356 169.534Z" fill="#FEB048"/>
                  <path d="M484.411 165.792C322.91 61.6436 274.25 78.5792 163.406 110.324C159.437 111.461 158.348 116.529 161.736 118.888C193.161 140.765 221.8 131.796 231.315 157.851C232.083 159.953 233.955 161.529 236.19 161.653L481.341 175.185C486.612 175.476 488.847 168.653 484.411 165.792Z" fill="#D25827"/>
                  <path d="M489.841 169.607C302.045 95.816 217.186 117.153 110.164 163.434C106.36 165.079 106.341 170.066 110.156 172.022C110.717 172.309 111.249 172.578 111.754 172.831C109.028 172.945 107.44 175.143 110.885 182.535C111.747 184.383 113.821 185.544 115.972 185.505L488.31 178.875C494.027 178.773 495.194 171.71 489.841 169.607Z" fill="#F2A343"/>
                  <path d="M118.688 32.3382C112.095 25.3122 100.296 29.6067 99.7621 39.2266L97.2334 84.7608C96.9903 89.1375 94.1616 92.948 90.0424 94.4472L42.9672 111.581C32.3277 115.454 33.8377 130.953 45.0247 132.698L84.3472 138.835C89.9091 139.703 93.9078 144.646 93.5957 150.266L91.564 186.85C90.9861 197.257 103.897 202.514 110.753 194.663L146.518 153.708C148.991 150.876 152.743 149.51 156.458 150.09L210.181 158.474C220.48 160.081 226.991 147.756 219.859 140.155L194.787 113.436C190.935 109.331 190.821 102.975 194.524 98.7345L220.702 68.7572C228.149 60.229 219.343 47.3855 208.704 51.258L161.629 68.3919C157.51 69.8912 152.893 68.7905 149.894 65.594L118.688 32.3382Z" fill="white"/>
                  <path d="M117.761 35.28C111.168 28.2541 99.3693 32.5485 98.8351 42.1684L96.4249 85.569C96.1819 89.9457 93.3531 93.7562 89.234 95.2554L44.7164 111.458C34.0769 115.331 35.5869 130.83 46.7738 132.576L83.612 138.325C89.1739 139.193 93.1725 144.135 92.8604 149.756L90.9473 184.206C90.3693 194.613 103.28 199.87 110.136 192.019L144.247 152.958C146.72 150.126 150.473 148.76 154.187 149.34L205.426 157.336C215.724 158.943 222.236 146.618 215.103 139.017L191.494 113.856C187.642 109.751 187.528 103.395 191.231 99.1549L215.755 71.0717C223.202 62.5434 214.397 49.6999 203.757 53.5724L159.24 69.7754C155.12 71.2747 150.504 70.174 147.505 66.9775L117.761 35.28Z" fill="#F36A22"/>
                  </g>
                  <defs>
                  <filter id="filter0_ddd_522_11998" x="33.1675" y="26.2731" width="463.227" height="175.014" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="-2.5888" dy="-2.5888"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_522_11998"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="2.84768"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="effect1_dropShadow_522_11998" result="effect2_dropShadow_522_11998"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="3.10656" dy="1.03552"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="effect2_dropShadow_522_11998" result="effect3_dropShadow_522_11998"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_522_11998" result="shape"/>
                  </filter>
                  </defs>
                </svg>

              </div>              
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default GameRegister;
