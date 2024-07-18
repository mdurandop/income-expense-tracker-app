import React from "react"
import Decoration from '../assets/background-frame-decoration.svg'
import ArrowLeft from '../assets/arrow-left.svg'
import MoreInfo from "../assets/more-info.svg";
import { Link } from "react-router-dom";

const Background = () => {
    return (
        <div className="linear-color relative w-full pb-2 rounded-b-3xl">
            <img src={Decoration} alt="" className="z-0" />
            <div className="flex z-10 absolute top-10 mx-5 items-center gap-20">
                <Link to='/'>
                    <img src={ArrowLeft} alt="" />
                </Link>
                <p className="font-semibold text-center">Add Expense</p>
                <img src={MoreInfo} alt="" />
            </div>
        </div>
    );
};

export default Background;
