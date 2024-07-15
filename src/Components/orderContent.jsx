import React from "react";
import './order.css'

export default function OrderContent({item}){
    let class1=`${item.icon } ${item.class1} text-xl`;
    return (
        <>
        <div>
            <div className="p-2 ps-4 md:flex items-center">
                <i className={class1}></i>
                <div className="ms-5" >
                    <h1 className="  font-bold text-sm">{item.title}</h1>
                    <h1 className="font-bold text-gray">{item.date}</h1>
                </div>
            </div>
        </div>
        </>
    )

}