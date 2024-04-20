/* eslint-disable react/prop-types */

export default function ProjectCard(props){
    return(
        <div className={`${props.darkMode? "dark": ""}card md:flex p-5 shadow-md hover:shadow-lg mt-12`}> 

            <div className="IMAGE shadow ">
            <img src={`${props.img}`} alt="" className="w-full h-full hover:p-1"/>
            </div>  

           <div className="md:flex-col">     
                <div className="DESC text-left  p-3 mx-5">
                    <h3 className="my-6 text-xl text-blue-600 font-bold"><span></span>{props.title}</h3>
                    <p className="font-mono">{props.desc}</p>
                </div>            
                <div className="flex mt-5 justify-center ">
                    <button className=" bg-white border-2  hover:animate-none border-green-500 hover:bg-green-500 mx-4 px-3 py-2 rounded text-green-500 hover:text-white"><a href={props.liveLink}>Live Project</a></button>
                    <button className=" bg-blue-500 border-2  border-blue-500  hover:bg-white mx-4 px-3 py-2 rounded hover:text-blue-500 text-white"><a href={props.githubLink}>Review Code</a></button>
               </div>
            </div>
        </div>
    )
}
