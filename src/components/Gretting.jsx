import React from "react";
import Decoration from "../assets/background-frame-decoration.svg";

const Gretting = (props) => {
    return (
        <div className="linear-color relative w-full pb-2 rounded-b-3xl">
            <img src={Decoration} alt="" className="z-0" />
            <div className="z-10 absolute top-10 mx-5">
                <p>{props.gretting}</p>
                <p className="font-semibold text-xl">{props.username}</p>
            </div>
        </div>
    );
};

export default Gretting;
