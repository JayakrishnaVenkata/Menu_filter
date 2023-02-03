import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import Food from "./Food";
import './index.css';
import menu from "./naive.js";

const Greeting = () =>{
    const [filteredList, setFilteredList] = useState(menu);
    const AllData = () =>{
        setFilteredList(menu);
    }
    const Breakfast = () =>{
        setFilteredList(menu.filter(
            (car) => car.category === "breakfast"
          ));
    }
    const Lunch = () =>{
        setFilteredList(menu.filter(
            (categor) => categor.category  === "lunch"
        ));
    }
    const Shakess = () =>{
        setFilteredList(menu.filter(
            (categor) => categor.category  === "shakes")
        );
        // setFilteredList(filteredList
        // ))
    }
    return (
        <>
        <section className="menu">
            <div className="title">
                <h2>our menu</h2>
                <div className="underline"></div>
            </div>
            <div className="btn-container">
                    <button type="button" className="filter-btn" onClick={AllData} data-id="all">all</button>
                    <button type="button" className="filter-btn" onClick={Breakfast} data-id="breakfast">
                    breakfast
                    </button>
                    <button type="button" className="filter-btn" onClick={Lunch} data-id="lunch">lunch</button>
                    <button type="button" className="filter-btn" onClick={Shakess} data-id="shakes">
                    shakes
                    </button>
                </div>
            <div className="section-center">
                    {filteredList.map((menu)=>{
                        return <Food {...menu} key={menu.id} />;
                    })}
            </div>
            </section>
        </>    
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting/>);
