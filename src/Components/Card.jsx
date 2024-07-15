import React from "react";
import '../Components/card.css'

export default function Card({item}) {

    let class2 = `p-4 ms-5 rounded-[10px] text-2xl text-white absolute top-[-30px] ${item.icon} ${item.class} `
    let class3=`text-green-500 font-bold `
    return (<>
        <div className="max-w-sm mb-4 mt-4 bg-white border border-gray-200 rounded-lg relative shadow dark:bg-gray-800 dark:border-gray-700">
            <i className={class2}></i>
            <div className="p-3">  <h1 className="float-right font-bold text-gray-500">{item.title}</h1><br />
                <h1 className="float-right font-bold">{item.money}</h1><br />
            </div>
            <p className="border-[1px]"></p>
            <h1 className="p-3 text-gray-500"><span className={class3}>{item.growth} </span>{item.qoute}</h1>
        </div>


    </>)
}