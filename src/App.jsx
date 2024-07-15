import { useEffect, useState } from 'react'
import CardContainer from './Components/CardContainer';
import Post from './Components/Post';
import Header from './Components/Header';
import Graph1 from './Components/Graph1';

import AsideBar from './Components/AsideBar';

function App() {

  const [data, setData] = useState([])
  useEffect(() => {

    async function Data() {
      let res = await fetch("https://dashboard-880d8-default-rtdb.firebaseio.com/user.json");
      let data1 = await res.json();

      setData(data1.aside)


    }
    Data();

  }, []);

  console.log(data)
  let dashboard = data.length !== 0 ? data[0].dashboard : "";
  let profile = data.length !== 0 ? data[1].profile : "";
  let task = data.length !== 0 ? data[2].task : "";
  let notify = data.length !== 0 ? data[3].notification : "";
  let signin = data.length !== 0 ? data[4].signin : "";
  let signup = data.length !== 0 ? data[5].signUp : "";

  return (
    <>
      <div className=' md:flex'>
        <div >
          <AsideBar dashboard={dashboard} profile={profile} task={task} notify={notify} signin={signin} signup={signup} />
        </div>
        <div >
          <Header />
          <CardContainer />
          <Graph1 />
          <Post />
        </div>

      </div>

    </>
  )
}

export default App
