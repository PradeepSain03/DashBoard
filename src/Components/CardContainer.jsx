import { useEffect, useState } from 'react'
import Card from './Card'
export default function CardContainer() {

    const [data, setData] = useState([])
    useEffect(() => {

        async function Data() {
            let res = await fetch("https://dashboard-880d8-default-rtdb.firebaseio.com/user.json");
            let data1 = await res.json();

            setData(data1.card)


        }
        Data();

    }, []);

    return (<>
        <div class="container">
            <div class="grid md:grid-cols-4 grid-cols-2 ms-2 me-2 gap-5 md:ms-5 md:me-5 mt-10">
                {data.map(item => (
                    <Card item={item}/>
                ))}


            </div>
        </div>

    </>)

}