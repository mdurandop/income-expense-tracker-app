import React from "react";
import Home from '../assets/home.svg'
import BarChart from '../assets/bar-chart.svg'
import Wallet from '../assets/wallet.svg'
import User from '../assets/user.svg'
import { Link } from "react-router-dom";

const BottomNav = () => {
    return (
        <div className="w-full">
            <div className="flex w-full bg-white py-4 items-center justify-evenly">
                <div>
                    <img src={Home} alt="" />
                </div>
                <div>
                    <img src={BarChart} alt="" />
                </div>
                <Link to='/expense' className="flex rounded-full brand-color size-10 shadow-xl cursor-pointer">
                    <p className="m-auto text-2xl">+</p>
                </Link>
                <div>
                    <img src={Wallet} alt="" />
                </div> 
                <div>
                    <img src={User} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BottomNav;