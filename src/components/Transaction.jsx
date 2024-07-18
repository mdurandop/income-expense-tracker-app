import React from "react";
import Upwork from "../assets/upwork.svg";

const Transactions = () => {
    return (
        <div className="flex justify-between items-center py-3">
            <div className="flex gap-3">
                <img
                    src={Upwork}
                    alt=""
                    className="bg-zinc-300 rounded-xl p-3"
                />
                <div>
                    <p className="text-xl text-zinc-950 font-semibold">Upwork</p>
                    <p className="text-zinc-500">Today</p>
                </div>
            </div>
            <p className="text-green-600 font-bold">+ $850.00</p>
        </div>
    );
};

export default Transactions;
