import React from "react";
import MoreInfo from "../assets/more-info.svg";
import CardExpense from "../assets/card-expense.svg";
import CardIncome from "../assets/card-income.svg";

const Card = () => {
    return (
        <div className="brand-color w-11/12 flex flex-col mx-auto z-10 px-4 py-5 rounded-xl -mt-20 shadow-xl">
            <div className="flex justify-between">
                <p className="font-semibold">Total Balance</p>
                <img src={MoreInfo} alt="" />
            </div>
            <p className="font-bold text-2xl">$2,548.00</p>
            <div className="flex justify-between mt-5">
                <div className="flex flex-col items-start justify-center gap-1">
                    <div className="flex gap-2">
                        <img src={CardIncome} alt="" className="w-5" />
                        <p>Income</p>
                    </div>
                    <p className="font-bold text-l">$ 1,840.00</p>
                </div>
                <div className="flex flex-col items-end justify-center gap-1">
                    <div className="flex gap-2">
                        <img src={CardExpense} alt="" className="w-5" />
                        <p>Expenses</p>
                    </div>
                    <p className="font-bold text-l">$ 284.00</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
