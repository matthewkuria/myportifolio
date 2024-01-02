import React from "react";

export default function About(){
    return(
        <section className=" grid md:grid-cols-3 gap-3 p-6 border border-blue-600 md:rounded-3xl rounded-ss-3xl">
          <div className="md:text-left">
          <h1 className="text-2xl font-bold text-blue-600   w-3/4 pb-5">My Bio</h1>
          <p className="text-xl font-sans md:w-3/4">I am a recent Computer Science Graduate,  currently working as a Front End intern using React and Tailwind CSS.</p>
          </div>
          <div className="md:text-left mx-4">
            <p>I am an experienced Website Developer with expertise in front-end web development.
                    I have gained hands-on experience  building responsive and scalable  projects .
                    I have several programming languages which extends my technical proficiency.
                    I have also mastered Graphics Design.
             </p>
          </div>
           <div className="md:text-left">
            <p>Learning is a continuous process,therefore,
                    I have honed my technical and soft skills through various bootcamps and training programs.
                    I have suplemented the knowledge I learnt from the university through completion of online
                    courses,further solidifying my understanding of Software and Web Development.
            </p>
           </div>
        </section>
    )
}