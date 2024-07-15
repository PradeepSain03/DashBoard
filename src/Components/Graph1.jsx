import React, { useState, useEffect } from 'react'
import Chart from "react-apexcharts";

import { BarChart, Bar, XAxis, YAxis, LineChart, CartesianGrid, Line } from 'recharts';


const Graph1 = () => {
    const [data, setData] = useState([])
    const [data12, setData1] = useState([])
    useEffect(() => {

        async function Data() {
            let res = await fetch("https://dashboard-880d8-default-rtdb.firebaseio.com/graph.json");
            let data1 = await res.json();

            setData(data1.data)
            setData1(data1.dataGraph)

        }
        Data();

    }, []);


    return (

        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 p-2 max-w-[100%]'>



            <div className='border-[1px] rounded-[20px] p-2'>

                <div className='bg-[#3399ee] rounded-[20px] pt-3 pe-10 pb-5 ps-0 ' >
                    <BarChart width={350} height={300} data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }} padding={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="uv" barSize={10} fill="#ffffff"
                        />

                    </BarChart>

                </div>
                <div className='ps-5 pt-2'>
                    <h1 className='font-bold  text-xl'>Website view</h1>
                    <p className='text-gray-500'>Last Campagin Performance</p>
                </div>
                <p className='border-[1px] mt-2'></p>
                <p className='ps-5 pt-2 text-gray-500'><i class="fa-regular fa-clock"></i> Campgin Sent 2 Days Ago</p>
            </div>

            <div className='border-[1px] rounded-[20px] p-2'>

                <div className='bg-[#df296a] rounded-[20px] pt-3 pe-10 pb-5 ps-0 ' >
                    <LineChart width={350} height={300} data={data12}
                        margin={{ top: 15, right: 30, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="5 3" />
                        <XAxis dataKey="name" />
                        <YAxis />

                        <Line type="monotone" dataKey="uv" stroke="#ffffff" strokeWidth={"3px"} width={50} />
                    </LineChart>

                </div>
                <div className='ps-5 pt-2'>
                    <h1 className='font-bold  text-xl'>Daily Sales</h1>
                    <p className='text-gray-500'>15% increase in Today sale</p>
                </div>
                <p className='border-[1px] mt-2'></p>
                <p className='ps-5 pt-2 text-gray-500'><i class="fa-regular fa-clock"></i> updated 4min Ago</p>
            </div>
            <div className='border-[1px] rounded-[20px] p-2'>

                <div className='bg-[#51ab55] rounded-[20px] pt-3 pe-10 pb-5 ps-0'>
                    <LineChart width={350} height={300} data={data12}
                        margin={{ top: 15, right: 30, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="1 1" />
                        <XAxis dataKey="name" />
                        <YAxis />

                        <Line type="monotone" dataKey="uv" stroke="#ffffff" strokeWidth={"3px"} width={50} />
                    </LineChart>


                </div>
                <div className='ps-5 pt-2'>
                    <h1 className='font-bold  text-xl'>Completed Task</h1>
                    <p className='text-gray-500'>Last Campagin Performance</p>
                </div>
                <p className='border-[1px] mt-2'></p>
                <p className='ps-5 pt-2 text-gray-500'><i class="fa-regular fa-clock"></i> Just updated</p>
            </div>
        </div>
    )
}
export default Graph1;

