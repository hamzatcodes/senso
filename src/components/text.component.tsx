import React from "react";
import { textSizeProps, textVariantProps } from "../functions/propsFunctions";

type _props = {
    size?: string;
    children?: React.ReactNode;
    variant?: "light" | "dark" | "white";
    color?: string;
};

const Text = (props: _props) => {
    const { size, children, variant, color } = props;
    return (
        <p
            className={`${textSizeProps(size)} ${
                color ? color : textVariantProps(variant)
            }`}
        >
            {children}
        </p>
    );
};

export default Text;
