export default function Empty(){
    return(
        <>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <div className=" bg-slate-100 py-[22px] rounded-2xl">
            <div className="flex flex-col gap-4 justify-center items-center">
                <div className=" rounded-xl flex items-center p-3.5 bg-grey">
                    <i className='bx bx-plus text-lg' ></i>
                </div> 
                <p className="text-grey font-semibold text-2xl">Create List</p>
            </div>
        </div>
        </>
    )
}