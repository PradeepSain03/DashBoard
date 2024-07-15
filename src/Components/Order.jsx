import React, { useEffect, useState } from "react";
import OrderContent from "./orderContent";

export default function Order(){
    
  const [data, setData] = useState([])
  useEffect(() => {

      async function Data() {
          let res = await fetch("https://dashboard-880d8-default-rtdb.firebaseio.com/user.json");
          let data1 = await res.json();

          setData(data1.order)


      }
      Data();

  }, []);

    return(
        <>
        <div className="p-4">
            <div className="rounded-[20px] border-[1px] ">
                <div className="p-4 mb-7">
                    <h1 className="font-bold text-xl">Order Overview</h1>
                    <h1 className="text-lg text-gray"><i class="fa-solid fa-arrow-up text-green-500 me-2"></i>24% This Month</h1>
                </div>
                <div>
                    {data.map((item)=>(
                      <OrderContent item={item}/>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}