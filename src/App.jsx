import React from "react";
import "./index.css";
import Greeting from "./components/Greeting";
import Transaction from "./components/Transaction";
import BottomNav from "./components/BottomNav";
import Card from "./components/Card";

const App = () => {
    return (
        <div className="app-container h-full flex flex-col border border-solid border-zinc-950 relative">
            <Greeting gretting='Good morning,' username='Maivi Durango'/>
            <Card />
            <div className="m-4">
                <div className="flex justify-between items-center">
                    <p className="text-zinc-950 font-bold text-lg">
                        Transaction History
                    </p>
                    <p className="text-zinc-500 cursor-pointer">See all</p>
                </div>
                <Transaction />
                <Transaction />

            </div>
            <BottomNav />
        </div>
    );
};

export default App;
