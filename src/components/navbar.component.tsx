import React from "react";
import Text from "./text.component";
import twitter from "../assets/images/twitter.svg";
import discord from "../assets/images/discord.svg";
import logo from "../assets/images/logo-white.svg";
import { motion } from "framer-motion";

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
        <nav
            // initial={{ opacity: 0, y: -100 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{
            //     delay: 1,
            //     ease: "easeOut",
            //     duration: 1,
            // }}
            className="fixed w-full z-50"
        >
            <div className="container flex justify-between items-center py-5">
                <motion.img
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: [null, 100, 0] }}
                    transition={{
                        delay: 1.5,
                        ease: "easeIn",
                        duration: 1,
                    }}
                    alt=""
                    src={logo}
                />
                <div className="flex items-center gap-x-12">
                    {links.map((item, index) => (
                        <motion.span
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.5 + index / 10,
                                ease: "easeIn",
                                duration: 0.5,
                            }}
                            className="cursor-pointer hover:opacity-80 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        >
                            <Text key={index} size="20" variant="light">
                                {item}
                            </Text>
                        </motion.span>
                    ))}
                </div>
                <div className="flex items-center gap-x-9">
                    {btns.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.9 + index / 10,
                                ease: "easeIn",
                                duration: 0.5,
                            }}
                            className="w-[110px] h-[39px] rounded-2xl bg-light flex items-center gap-x-2 justify-center hover:bg-light/80 cursor-pointer shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        >
                            <img alt="" src={item.icon} />
                            <Text key={index}>{item.name}</Text>
                        </motion.div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
