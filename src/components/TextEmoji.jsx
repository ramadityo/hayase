import Image from "next/image";
import React from "react";

const TextEmoji = ({ image }) => {
    return <span>
        <Image width={50} height={50} src={image} alt="emoji" className="inline-block animate-bouncing delay-300 origin-center" />
    </span>;
};

export default TextEmoji;
