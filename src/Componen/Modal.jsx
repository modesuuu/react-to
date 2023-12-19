import React, { useEffect, useRef, useState } from "react"
import {gsap} from "gsap"


export default function Modal({opn, cls, AddToList}){
    
    //data list
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newItem = {
        title: From.Title,
        date: new Date(From.Date).toLocaleString('en-us', { month: 'short', day: 'numeric' }),
        time: new Date(`2022-01-01T${From.Time}`).toLocaleString('en-us', { hour: 'numeric', minute: 'numeric', hour12: true }),
        };

        cls()
        AddToList(newItem)
    }

    // input
    const [From, Setform] = useState({
        Title : '',
        Date : '',
        Time : ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        let Limit = value;
        if (name === 'Title' && value.length === 20){
            return;
        }
        Setform({
          ...From,
         [name]:value
        });
        console.log(From);
    };


    // aniamsi
    const animate = useRef(null);
    useEffect(()=>{
        
    const out = animate.current
        if (opn){
            gsap.fromTo(
                out,
                {x: -1000},
                {x: 0, duration: 1, ease:'power3.out' }
            );
        }
    },[opn, cls])

    if(!opn) return null
    return(
        <>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

        <section className="bg-black bg-opacity-30 h-screen w-full fixed top-0 ">
            <div ref={animate} className="bg-white fixed px-12 pt-8 w-[477px] h-full rounded-r-2xl">
                <div className="flex flex-col gap-8 mt-0.5 ">
                    {/* heading */}
                    <div>
                        <h1 className="text-bl font-bold text-[40px]">New List</h1>
                        <p className="text-grey font-medium">let's do something interesting and fun</p>
                    </div>
                    {/* input */}
                    <form className="flex flex-col  gap-6" onSubmit={handleSubmit}>
                        {/* title */}
                        <div className="flex flex-col justify-center items-start gap-0.5">
                            <h1 className="text-2xl font-semibold">Title</h1>
                            <input placeholder="Enter title" className="self-stretch outline-none border-green border bg-transparent rounded-lg p-2 " type="text" value={From.Title} name="Title" onChange={handleInputChange}/>
                        </div>

                        {/* Date */}
                        <div className="flex flex-col justify-center items-start gap-0.5">
                            <h1 className="text-2xl font-semibold">Date</h1>
                            <input className="self-stretch outline-none border-green border bg-transparent rounded-lg p-2 " type="date" value={From.Date} name="Date" onChange={handleInputChange}/>
                        </div>

                        {/* time */}
                        <div className="flex flex-col justify-center items-start gap-0.5">
                            <h1 className="text-2xl font-semibold">Time</h1>
                            <input className="self-stretch outline-none border-green border bg-transparent rounded-lg p-2 " type="time" value={From.Time} name="Time" onChange={handleInputChange}/>
                        </div>

                        {/* button */}
                        <div className="flex items-start gap-2 self-stretch">
                            <button type="sumbit" className="text-bl font-semibold text-base py-2.5 px-6 flex justify-center rounded-lg items-center bg-yellow">Create now</button>
                            <button onClick={cls} className="text-bl font-semibold text-base bg-[#DC362E] py-2.5 rounded-lg px-6 flex justify-center items-center gap-1"><i className='bx bx-x'></i> Cancel </button>
                        </div>
                    </form>
                </div>
            
            </div>
        </section>
        </>
    )
}