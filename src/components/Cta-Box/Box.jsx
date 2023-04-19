import React from "react";
import './style.css'

export const Box = () => {
    return (
        <div className="Cta-Box">
            <div className="Cta-Box-1">
                <div className="img-1">
                   
                </div>
                <div className="header-1">
                    <a href="">
                        <h1>Invest</h1>
                    </a>
                </div>
                <div className="description-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </div>
                <div className="button-1">
                <button type="">Invest Now</button>

                </div>

            </div>
            <div className="Cta-Box-2">
                <div className="img-2">

                </div>
                <div className="header-2">
                <a href="">
                        <h1>Wanted</h1>
                    </a>
                </div>
                <div className="description-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </div>
                <div className="button-2">
                    <button type="">Wanted</button>
                </div>


            </div>
        </div>
    )
}