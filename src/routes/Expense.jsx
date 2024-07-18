import React from "react";
import Background from "../components/Background";
import Modal from "../components/Modal";

const Expense = () => {
    return (
        <div className="app-container h-full flex flex-col border border-solid border-zinc-950 relative">
            <Background />
            <Modal />
        </div>
    );
};

export default Expense;
