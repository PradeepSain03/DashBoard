export default function Header(){
    return(
        <>
        <div className="mb-5 p-2 items-center">
            <div className="">
                
                    <span>DashBoard/ <span className="font-bold"> Home</span></span>
                
                
                <div className="float-right flex items-center mb-5">
                <input className=" me-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John"  />
      
                    <i class="fa-solid fa-user me-2"></i>
                    <span className="text-gray-500 font-bold me-2">Sign IN</span>
                    <i class="fa-solid fa-gear me-2"></i>
                    <i class="fa-solid fa-bell me-2"></i>
                    </div><br />
                    <span className="font-bold">Home</span>
                </div>
            </div>
       
        </>
    )
}