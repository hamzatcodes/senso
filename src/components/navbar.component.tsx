import React from "react";
import Text from "./text.component";
import twitter from "../assets/images/twitter.svg";
import discord from "../assets/images/discord.svg";
import logo from "../assets/images/logo-white.svg";

const Navbar = () => {
    const links = ["Home", "Roadmap", "Token", "Faq", "Team"];
    const btns = [
        {
            name: "twitter",
            icon: twitter,
        },
        {
            name: "discord",
            icon: discord,
        },
    ];

    return (
        <nav className="fixed w-full z-50">
            <div className="container flex justify-between items-center py-5">
                <img alt="" src={logo} />
                <div className="flex items-center gap-x-12">
                    {links.map((item, index) => (
                        <span className="cursor-pointer hover:opacity-80">
                            <Text key={index} size="20" variant="light">
                                {item}
                            </Text>
                        </span>
                    ))}
                </div>
                <div className="flex items-center gap-x-9">
                    {btns.map((item, index) => (
                        <div className="w-[110px] h-[39px] rounded-2xl bg-light flex items-center gap-x-2 justify-center hover:bg-light/80 cursor-pointer shadow-md">
                            <img alt="" src={item.icon} />
                            <Text key={index}>{item.name}</Text>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
