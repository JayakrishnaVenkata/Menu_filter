import React from "react";
import "./index.css";

const Food = (props) =>{
    return (
        <>
            
                
                    <article className="menu-item">
                    <img src={props.img} alt="menu item" className="photo" />
                    <div className="item-info">
                        <header>
                        <h4>{props.title}</h4>
                        <h4 className="price">{props.price}</h4>
                        </header>
                        <p className="item-text">
                        {props.desc}
                        </p>
                    </div>
                    </article>
        </>
    );
}

export default Food;