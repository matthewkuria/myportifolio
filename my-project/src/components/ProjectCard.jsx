import React from "react";
export default function ProjectCard(props){
    return(
        <div className="card md:flex p-5 border  border-blue-600 mt-12"> 

            <div className="IMAGE  ">
            <img src={`${props.img}`} alt="" className="w-full h-full hover:p-1"/>
            </div>  

           <div className="md:flex-col">     
                <div className="DESC text-left  p-3 mx-5">
                    <h1 className="my-6 text-xl text-blue-600 font-bold"><span>{props.id}.</span>{props.title}</h1>
                    <p className="font-serif">{props.desc}</p>
                </div>            
                <div className="flex mt-5 justify-center ">
                    <button className=" bg-green-500 border-2 animate-bounce hover:animate-none border-green-500 hover:bg-white mx-4 px-3 py-2 rounded hover:text-green-500"><a href={props.liveLink}>Live Project</a></button>
                    <button className=" bg-blue-500 border-2  border-blue-500  hover:bg-white mx-4 px-3 py-2 rounded hover:text-blue-500"><a href={props.githubLink}>Review Code</a></button>
               </div>
            </div>
        </div>
    )
}
