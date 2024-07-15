import React, { useEffect, useState } from "react";
import Order from "./Order";
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.jpg'

export default function Post() {
    const [data, setData] = useState([])
    useEffect(() => {

        async function Data() {
            let res = await fetch("https://dashboard-880d8-default-rtdb.firebaseio.com/user.json");
            let data1 = await res.json();

            setData(data1.project)


        }
        Data();

    }, []);


    return (
        <>
            <div className="md:flex">
                <div className="p-4 col-span-2 w-[100%] md:w-[70%]">
                    <div className="rounded-[20px] border-[1px] ">
                        <div className="p-4">
                            <div>
                                <h1 className="font-bold text-xl">Project</h1>
                                <h1 className="font-bold text-gray "><i class="fa-solid fa-check text-blue-500"></i> 30 done this month</h1>
                            </div>
                            <i class="fa-solid fa-ellipsis-vertical float-right"></i>
                        </div>
                        <div className="grid grid-cols-4 text-gray mb-2 mt-5 p-4">
                            <h1>Companies</h1>
                            <h1>Member</h1>
                            <h1>Budget</h1>
                            <h1>Completion</h1>
                        </div>
                        <p className="border-[1px]"></p>

                        {data.map((item,i) => (

                            <div className="grid grid-cols-4 items-center text-gray mb-2 mt-2 p-4 ">
                                <div className="md:flex gap-5 items-center ">
                                    <img src={item.img} alt="" className="w-[20%] "/>
                                    <h1 className="font-bold">{item.companyName}</h1>
                                </div>
                               <div className="flex relative items-center w-[100%]">
                               <img src={item.post.img1} className="w-[20%] rounded-[70px] absolute left-[10px]"/>
                               <img src={item.post.img2} className="w-[20%] rounded-[70px] absolute left-[30px]"/>
                               <img src={item.post.img3} className="w-[20%] rounded-[70px] absolute left-[50px]"/>
                               <img src={item.post.img4} className="w-[20%] rounded-[70px] absolute left-[70px]"/>
                               </div>
                                <h1 className="font-bold">{item.Budget}</h1>
                              <div>
                              {item.width}
                                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div class=" h-2.5 rounded-full" style={{ width: `${item.width}`,backgroundColor:`${item.color}`}}> </div>
                                </div>
                              </div>

                            </div>
                        ))}
                    </div>

                </div>
                <div className="md:w-[30%]  w-[100%]">   <Order /></div>
            </div>

        </>
    )
}