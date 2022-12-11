import React from "react";
import Navbar from "./components/navbar.component";
import heroBg from "./assets/images/hero-bg.svg";
import heroBg2 from "./assets/images/hero-bg2.svg";
import Text from "./components/text.component";
import heroDragon from "./assets/images/hero-dragon.svg";
import dragon2 from "./assets/images/dragon2.svg";
import alinaIcon from "./assets/images/Alina.svg";
import rizontieIcon from "./assets/images/Rizontie.svg";
import xiuhcoatlIcon from "./assets/images/Xiuhcoatl.svg";
import alina3d from "./assets/images/alina-3d.svg";
import rizontie3d from "./assets/images/rizontie-3d.svg";
import xiu3d from "./assets/images/xiu-3d.svg";
import arrow from "./assets/images/Arrow.svg";
import Footer from "./components/footer.component";
import token2 from "./assets/images/token2.svg";
import token from "./assets/images/senso-token.svg";
import nfts from "./assets/images/Nfts.svg";
import scroll from "./assets/images/scroll.svg";
import scroll2 from "./assets/images/scroll2.svg";
import discord from "./assets/images/discord1.svg";
import twitter from "./assets/images/twitter1.svg";
import serpent from "./assets/images/serpent.svg";
import flydragon from "./assets/images/flydragon.svg";
import rect1 from "./assets/images/Rectangle1.svg";
import rect2 from "./assets/images/Rectangle2.svg";
import rect3 from "./assets/images/Rectangle3.svg";

function App() {
    const [activeNav, setActiveNav] = React.useState(false);
    const elements = [
        {
            name: "Alina",
            icon: alinaIcon,
        },
        {
            name: "Rizontie",
            icon: rizontieIcon,
        },
        {
            name: "Xiuhcoatl",
            icon: xiuhcoatlIcon,
        },
    ];

    const faqs = [
        {
            title: "When is the pre-sale and public-sale?",
        },
        {
            title: "What are the value for  having a senso dragon?",
        },
        {
            title: "what is the total supply for senso dragons?",
        },
        {
            title: "What wallet is advisable to use for minting and mint price?",
        },
        {
            title: "what are the rules for whitelist?",
        },
        {
            title: "what are the rules for whitelist?",
        },
    ];
    return (
        <div className="app">
            <Navbar />
            <div
                className={"min-h-screen bg-no-repeat bg-cover"}
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div
                    className="min-h-screen grid place-items-center w-full"
                    style={{
                        background:
                            "linear-gradient(180deg, #0066FF 0%, rgba(0, 178, 255, 0) 100%)",
                    }}
                >
                    <div className="text-center">
                        <Text size="150" variant="light">
                            Senso Dragons
                        </Text>
                        <img
                            alt=""
                            src={heroDragon}
                            className="-mt-24 animate-hero"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-[#e0f2ff] min-h-screen">
                <div className="container text-center pb-[150px]">
                    <Text size="289" color="text-[#49ADFAB2]/70">
                        About Senso
                    </Text>
                    <div className="container max-w-[916px]">
                        <Text size="28">
                            Senso Dragons Society is a collection of 1111 NFTs
                            generated and curated on the Cardano blockchain. You
                            can mint a Senso Dragon NFT or purchase on a
                            secondary marketplace to join our highly rewarding
                            community.
                        </Text>
                    </div>
                    <img alt="" src={nfts} className="mx-auto mt-36" />
                </div>
            </div>
            <div className="bg-[#031734]">
                <div className="container min-h-screen flex items-center justify-between max-w-screen-xl">
                    <div className="max-w-[708px]">
                        <span className="block mb-10">
                            <Text variant="light" size="100">
                                Order
                            </Text>
                        </span>
                        <Text size="28" variant="light">
                            The Mother dragon reincarnated along with her
                            original seven offsprings make up the 1/1s in our
                            collection. However, there exists a militarised
                            order set in place amongst the dragon realms which
                            has endured for millenia.
                        </Text>
                        <button className="bg-[#0085FF] rounded-xl w-[205px] h-[64px] mt-20 hover:bg-[#0085FF]/80 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <Text variant="light" size="21">
                                Join The Dwellers
                            </Text>
                        </button>
                    </div>
                    <img alt="" src={dragon2} className="absolute right-0" />
                </div>
            </div>

            <div className="bg-[#03142D]">
                <div className="container min-h-[302px] flex items-center justify-between">
                    {elements.map((item, index) => (
                        <div className="flex gap-20 items-center" key={index}>
                            <img
                                alt=""
                                src={item.icon}
                                className="animate-pulse"
                            />
                            <Text
                                size="60"
                                color={
                                    index === 0
                                        ? "text-[#00BAFF]"
                                        : index === 1
                                        ? "text-[#00F6FF]"
                                        : "text-[#EC5B00]"
                                }
                            >
                                {item.name}
                            </Text>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#031734]">
                <div className="container flex items-center justify-between min-h-screen max-w-screen-xl">
                    <div className="relative max-w-[550px] w-full">
                        <img
                            alt=""
                            src={xiu3d}
                            className="absolute animate-spin1 animate-pulse"
                        />
                        <img
                            alt=""
                            src={rizontie3d}
                            className="absolute -top-14 left-44 animate-spin2 animate-pulse"
                        />
                        <img
                            alt=""
                            src={alina3d}
                            className="absolute -top-48 left-9 animate-spin3 animate-pulse"
                        />
                    </div>
                    <div className="flex flex-col gap-y-16 max-w-[700px]">
                        <Text variant="light" size="24">
                            In the beginning, there was only the Mother dragon.
                            Imbued with the power of the elements, she brought
                            forth 7 offsprings with varying energies. With time,
                            1 world became 3 as the dragons multiplied and
                            prospered: alina, rizontie, xiuhcoatl
                        </Text>

                        <span className="flex w-fit items-center gap-x-6 cursor-pointer lore">
                            <Text size="32" color="text-[#0084FF]">
                                Full Lore
                            </Text>
                            <img alt="" src={arrow} className="animate-lore" />
                        </span>
                    </div>
                </div>
            </div>

            <div className="min-h-screen flex flex-col">
                <div className="text-center roadmap-header relative">
                    <div
                        className="w-[688px] h-[790px] bg-[#00D1FF] absolute rotate-[50deg] mt-[10rem] -left-[15rem]"
                        style={{ filter: "blur(100px)" }}
                    ></div>
                    <div className="z-10">
                        <Text size="289" color="text-[#03173466]/40">
                            Roadmap
                        </Text>
                    </div>
                </div>
                <div className="roadmap-content py-[100px] grow">
                    <div className="container relative">
                        <img alt="" src={rect1} className="ml-auto" />
                        <div className="flex items-center gap-x-20">
                            <img alt="" src={flydragon} className="z-10" />
                            <div className="grow flex flex-col">
                                <div className="mb-16">
                                    <Text size="49" variant="light">
                                        Phase 1
                                    </Text>
                                    <img
                                        alt=""
                                        src={rect2}
                                        className="absolute left-40 mt-5"
                                    />
                                </div>
                                <div className="flex flex-col gap-y-10">
                                    {[
                                        "Artwork",
                                        "Twitter Launch",
                                        "Community Building",
                                        "Clanlist Distribution",
                                    ].map((item, index) => (
                                        <Text
                                            variant="light"
                                            key={index}
                                            size="25"
                                        >
                                            {item}
                                        </Text>
                                    ))}
                                </div>
                            </div>
                            <img
                                alt=""
                                src={rect3}
                                className="absolute bottom-0 right-0"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="token">
                <div className="container min-h-screen max-w-screen-lg py-[150px]">
                    <div className="container text-center max-w-[784px] flex flex-col gap-y-16">
                        <Text size="60" variant="light">
                            $Dragold Token
                        </Text>
                        <Text variant="light" size="18">
                            This is the currency of exchange in the Senso
                            Dragons Society. Each dragon minted or purchased on
                            the secondary market grants its holder different
                            staking powers that enable them to accumulate
                            $Dragold. The amount accumulated by a particular
                            holder determines the benefits to such holder. These
                            includes IRL Merch, raffles and airdrop
                            qualifications. The highest accumulators are
                            rewarded with the exclusive eligibility for the
                            Dragon and Slayer retreats.
                        </Text>
                    </div>

                    <div className="flex items-center h-[800px]">
                        <img alt="" src={token2} className="animate-spin1" />
                        <img alt="" src={token} className="absolute right-0" />
                    </div>
                </div>
            </div>

            <div className="bg-[#A0C7FF00] min-h-screen">
                <div className="container max-w-screen-lg py-[100px] relative">
                    <div className="text-center flex justify-center items-center mb-9">
                        <img
                            alt=""
                            src={scroll2}
                            className="absolute left-0 animate-hero"
                        />
                        <Text size="52">Frequently Asked Questions</Text>
                    </div>

                    <div className="container max-w-[660px] text-center divide-y-[3px] divide-dark">
                        {faqs.map((item, index) => (
                            <div className="py-12">
                                <Text key={index} size="21">
                                    {item.title}
                                </Text>
                            </div>
                        ))}
                    </div>
                    <img
                        alt=""
                        src={scroll}
                        className="ml-auto -mt-14 animate-hero"
                    />
                </div>
            </div>

            <div className="bg-[#A0C7FF00] min-h-screen">
                <div className="container max-w-screen-xl text-center py-[100px]">
                    <div className="flex flex-col gap-y-48">
                        <Text color="text-[#153375]" size="156">
                            Bringing Balance Between Realms
                        </Text>
                        <Text color="text-[#153375]" size="89">
                            join the dwellers
                        </Text>
                        <div className="flex flex-col items-center -gap-20">
                            <div className="flex justify-center gap-x-14">
                                <img alt="" src={twitter} className="animate-bounce hover:animate-none" />
                                <img alt="" src={discord} className="animate-bounce hover:animate-none" />
                            </div>
                            <img alt="" src={serpent} className="-mt-40" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
