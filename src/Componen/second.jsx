import React, {useEffect,useRef,useState} from "react";
import { gsap } from "gsap"



export default function Second({visible, Onclose, AddToList}){
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
    
    //data list
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newItem = {
            title: From.Title,
            date: new Date(From.Date).toLocaleString('en-us', { month: 'short', day: 'numeric' }),
            time: new Date(`2022-01-01T${From.Time}`).toLocaleString('en-us', { hour: 'numeric', minute: 'numeric', hour12: true }),
        };

        AddToList(newItem)
        Onclose()

        // reset
        Setform({
            Title: '',
            Date: '',
            Time: '',
        })
    };

    
    // animasi
    const up = useRef(null);
    useEffect(()=>{
        
    const animasi = up.current
        if (visible){
            gsap.fromTo(
                animasi,
                {y: 1000},
                {y: 0, duration: 1, ease:'power3.out' }
            );
        }
    },[visible, Onclose])

    if (!visible) return null;
   
    return(
        <div id="Container">
            <section className="fixed top-0 px-10 bg-black bg-opacity-30 h-screen w-full">
                <div ref={up} className="fixed bottom-0 mx-auto px-4 bg-[#F7F2FA] rounded-t-3xl pb-9">
                    <div className="flex py-4 flex-col items-center">
                        <button onClick={Onclose} className=" opacity-40 rounded-full w-8 h-1 bg-btn"></button>
                    </div>
                    <div>
                        {/* <button className="float-right text-2xl "><i class='bx bx-x'></i></button> */}
                        <div className=" mt-4 mb-[30px] flex flex-col items-start gap-1 w-[272px]">
                            <h1 className="font-bold text-2xl self-stretch">New List</h1>
                            <p className=" font-medium text-sm text-gray-400">let's do something interesting and fun</p>
                        </div>
                        <div className="flex flex-col gap-[30px]">
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-[30px] items-stretch">
                                    {/* title */}
                                    <div className="flex items-center gap-2.5">
                                        <h1 className=" flex-[1_0_0%] text-clear-/green text-xl font-semibold">Title</h1>
                                        <input className="outline-none focus:border-2 caret-black w-full  rounded-lg border bg-clear-/white border-green p-2 placeholder:text-grey" type="text" placeholder='Enter title' value={From.Title} name="Title" onChange={handleInputChange}/>
                                    </div>
                                    {/* date */}
                                    <div className="flex items-center gap-2">
                                        <h1 className="flex-[1_0_0%] text-clear-/green text-xl font-semibold">Date</h1>
                                        <input className=" outline-none focus:border-2 caret-black w-full  placeholder:text-grey rounded-lg border bg-clear-/white border-green p-2" type="date" value={From.Date} name="Date" onChange={handleInputChange} />
                                    </div>
                                    {/* time */}
                                    <div className="flex items-center gap-2">
                                        <h1 className="flex-[1_0_0%] text-clear-/green text-xl font-semibold">Time</h1>
                                        <input className=" outline-none focus:border-2 caret-black w-full  placeholder:text-grey rounded-lg border bg-clear-/white border-green p-2" type="time" value={From.Time} name="Time" onChange={handleInputChange} />
                                    </div>
                                </div> 
                                <button type="sumbit" className="font-semibold text-xl bg-yellow flex px-6 py-2.5 justify-center items-center rounded-lg">Create now</button>
                             </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    )
}

