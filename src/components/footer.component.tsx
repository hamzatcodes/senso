import React from "react";
import logo from "../assets/images/logo2.svg";
import Text from "./text.component";

const Footer = () => {
    return (
        <div className="h-64 bg-dark">
            <div className="container flex items-center justify-between h-full max-w-screen-xl">
                <div className="flex gap-x-16">
                    <Text size="20" variant="white">Disclaimer</Text>
                    <Text size="20" variant="white">Terms & Conditions</Text>
                </div>
                <img alt="" src={logo} />
                <Text size="20" variant="white">Senso Dragons All Rights Reserved 2022</Text>
            </div>
        </div>
    );
};

export default Footer;
