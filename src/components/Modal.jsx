import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";
import PlusCircle from '../assets/plus-circle.svg'

const Modal = () => {
    return (
        <div className="bg-white w-11/12 flex flex-col justify-center items-start mx-auto -mt-10 z-10 p-5 rounded-lg gap-2">
            <p className="text-zinc-500 uppercase font-medium">Name</p>
            <select
                name=""
                id=""
                className="border border-solid border-zinc-400 w-full rounded-md pl-2 py-3 text-zinc-500"
            >
                <option value="">Shopping</option>
                <option value="">Transportation</option>
                <option value="">Food</option>
                <option value="">Home</option>
                <option value="">Home</option>
            </select>
            <p className="text-zinc-500 uppercase font-medium">Amount</p>
            <div className="flex border border-solid border-zinc-400 w-full rounded-md py-3">
                <p className="brand ml-2">$</p>
                <input type="text" name="" id="" className="brand" />
            </div>
            <p className="text-zinc-500 uppercase font-medium">Date</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="w-full" />
            </LocalizationProvider>
            <p className="text-zinc-500 uppercase font-medium">Invoice</p>
            <Button variant="contained" component="label" className="w-full file">
                <img src={PlusCircle} alt="" className="mr-2"/>
                Add invoice
                <input type="file" hidden/>
            </Button>
        </div>
    );
};

export default Modal;
