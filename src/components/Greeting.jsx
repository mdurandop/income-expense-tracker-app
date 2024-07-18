import React from "react";
import Decoration from "../assets/background-frame-decoration.svg";
import { useState, useEffect } from "react";
import dayjs from "dayjs";

const Greeting = (props) => {

    const [greeting, setGreeting] = useState('')
    useEffect(() => {
        const getGreeting = () => {
          const currentHour = dayjs().hour();
    
          if (currentHour >= 6 && currentHour < 12) {
            return "Good morning,";
          } else if (currentHour >= 12 && currentHour < 18) {
            return "Good afternoon,";
          } else if (currentHour >= 18 && currentHour < 22) {
            return "Good evening,";
          }
        };
    
        setGreeting(getGreeting());
      }, [])

    return (
        <div className="linear-color relative w-full pb-2 rounded-b-3xl">
            <img src={Decoration} alt="" className="z-0" />
            <div className="z-10 absolute top-10 mx-5">
                <p>{greeting}</p>
                <p className="font-semibold text-xl">{props.username}</p>
            </div>
        </div>
    );
};

export default Greeting;
