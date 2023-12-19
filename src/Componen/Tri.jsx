import React, { useEffect, useState, } from 'react';
import '../index.css';
import '../App.css';
import Second from './second';
import Modal from './Modal';
import Empty from './Empty';


import card from '../asset/card now.svg'
// import asset from '../asset/pp-user.svg'
import date from '../asset/date.svg'
import arrow from '../asset/bxs-up-arrow-svg.png'
import img from '../asset/device-draw-kit-vector-illustration-influencer-content-creator-illustrations-61.png'
import togle from '../asset/menu.svg'
import elips from '../asset/device-3.png'


export default function Tri(){

  //modal
  const [Showmodal, Setmodal] = useState(false)
  const Close = ()=> Setmodal(false)

  //data save
  useEffect(()=>{
    const storedList = JSON.parse(localStorage.getItem('todolist')) || [];
    Setlist(storedList)
  },[])

  //data update
  const addlist = (newItem) => {
    const updatedList = [...list, newItem];
    Setlist(updatedList);
    
    localStorage.setItem('todolist',JSON.stringify(updatedList))
  };

  //delete data
  const deleteItem = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);

    Setlist(updatedList);
    localStorage.setItem('todolist', JSON.stringify(updatedList));
  };
  
  

  const [list, Setlist] = useState([
      // {
      //    title : 'Playing footbal',
      //    date : 'Dec 25',
      //    time : '09.00 am'
      // },
  ]);
       
    

    return(
      <>
        <div className=" lg:px-[200px]">
        {/* link */}
        <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

        {/* Navbar */}
        <nav className="container mx-auto" x-data="{navOpen : true}">
          <div className="pt-3 px-4 lg:hidden">
            <a>
              <img  src={togle} alt="" /> 
            </a>
          </div>

          <section className=" fixed bg-clear-/white pt-2 pb-4 bottom-0 lg:float-left lg:top-0 lg:left-0 lg:w-[72px] lg:bg-green lg:flex lg:justify-between lg:py-8 lg:items-center lg:flex-col lg:h-full " x-data="{open : false}" x-show="navOpen">
            {/* avatar */}
            <div className="hidden lg:block">
              <div className="bg-white p-2 flex items-start rounded-xl ">
                <i className='bx bx-user-circle text-2xl'></i>
              </div>  
            </div>

            <ul className="flex justify-center px-5 mx-auto gap-8 lg:items-center lg:gap-12 lg:flex-col lg:content-center">
                <li className="link flex justify-center flex-col items-center gap-px lg:text-white text-clear-/green active:text-black">
                  <button>
                    <i className='bx bx-home text-2xl'></i>
                    <p className="lg:hidden" >Home</p>
                  </button>    
                </li>

                  <li className= "link flex justify-center flex-col items-center gap-px lg:text-white text-clear-/green active:text-black">
                    <button className="">
                      <i className='bx bx-calendar text-2xl' ></i>
                      <p className="lg:hidden">Date</p>
                    </button>
                  </li>

                <li className="link flex justify-center flex-col items-center gap-0.5 -mt-14 -ml-2 lg:mt-0">
                  <button onClick={()=> Setmodal(true)} className="p-2.5 bg-yellow rounded-xl flex items-center">
                    <i className='bx bx-plus text-2xl' ></i>
                  </button>
                    {/*  <p className="text-yellow self-stretch">New list</p> */}
                </li>
              
                <li className="link flex justify-center flex-col items-center gap-0.5 lg:text-white text-clear-/green active:text-black">
                  <button>
                    <i className='bx bxs-quote-right text-2xl'></i>
                    <p className="lg:hidden">Qts</p>
                  </button>
                </li>

                <li className="link flex justify-center flex-col items-center gap-0.5 lg:text-white text-clear-/green active:text-black">
                  <button>
                    <i className='bx bx-user-circle text-2xl'></i>
                    <p className="lg:hidden">Account</p>
                  </button>
                </li>
              </ul>
            {/* arrow */}
            <div className="hidden lg:block">
              <img src={arrow} />
            </div>
          </section>
        </nav>

        {/* order 1 */}
        <section className="container mt-8 mx-auto max-h-[181px]  hidden lg:block">
          <div className="flex items-start gap-[99px] justify-between">
            <div>
              <img src={date} />
            </div>
            <div>
              <img src={card} alt="" />
            </div>
            {/* <div className="bg-green px-6 grow py-9">
              <img src={asset} />
              <div className="mt-3 inline-flex flex-col items-start ">
                <h1 className=" text-clear-/yellow text-2xl font-semibold">Playing Footbal</h1>
                <span className="text-base font-medium text-gray-300">With friend</span>
              </div>
              <p className="text-2xl font-semibold text-white place-self-end right-0 bottom-0 float-right">Now</p>
            </div> */}
          </div>
        </section>

        <div className="flex flex-col">
          {/* qty */}
          <section className="container px-4 mx-auto lg:h-[181px] mt-8 lg:order-1">
              <div className=" flex gap-6 items-center p-4 lg:px-16 lg:gap-20 rounded-xl bg-green justify-between">
                  <p className="text-clear-/white leading-[128%] font-semibold text-sm lg:text-2xl ">“ Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est“</p>
                  <img className=" w-1/2 " src={img} alt="" />
              </div>
          </section>

          <section className="px-4 mt-10 container mx-auto lg:max-h-[1000px] lg:overflow-auto">
            <div className="mb-6">
            <h1 className="text-black text-2xl font-bold mb-4">To list</h1>

              {/* list */}
              <ul className="flex-col gap-6 flex">
                {list.length < 1 && <Empty />}
              
                  {list.map((li, index)=> {
                    return(
                      <li key={index} className="">
                      {/* <h1 className="text-black text-2xl font-semibold mb-4">Today</h1> */}
                      <div className="bg-white rounded-[18px] flex py-2.5 px-6 items-center">
                        <div className="bg-op/[47] p-3 rounded-[18px] flex items-center mr-2">
                          <i className='bx bx-football text-green'></i>
                        </div>
                        <div className="mr-2 flex flex-col gap-0.5 items-start flex-1">
                          <span className="text-black font-bold text-base">{li.title}</span>
                          <div className="flex gap-1">
                            <p className="text-xs text-grey">{li.date}</p>
                            <p className="text-xs text-grey">{li.time}</p>
                          </div>
                        </div>
                        <button onClick={()=> deleteItem(index)}><img src={elips}></img></button>
                      </div>
                    </li>
                  )
                  })} 
              </ul>
            </div>
            
            <div>
              <button onClick={()=> Setmodal(true)} className="flex py-2.5 px-6 items-center justify-center gap-2 rounded-[18px] bg-yellow w-full">
                <i className='bx bx-plus'></i>
                <span className="text-black text-base font-semibold">Create new list</span> 
              </button>
            </div>
          </section>
        </div>
          
        
      </div>
      <div className='hidden lg:block'>
        <Modal  opn={Showmodal} cls={Close} AddToList={addlist}/>
      </div> 

      <div className=" lg:hidden">
        <Second visible={Showmodal} Onclose={Close} AddToList={addlist}/> 
      </div>
    </>
    )
}