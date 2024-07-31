import gsap from "gsap";
import React, { useEffect } from "react";

export function Page4() {
  let credits = [
    {
      name: "Atakan",
      age: 17,
      sex: "male",
      job: "developer",
      url: "./images/pp2.jpg",
      description:
        "lorem Ipsum at lore sit amet, consectetur adipiscing elit sed diam nonumy euismod sem velit sed diam nonumy euismod etiam. Cum sociis natoque penat",
    },
    {
      name: "John",
      age: 21,
      sex: "male",
      job: "developer",
      url: "./images/pp3.jpg",
      description:
        "lorem Ipsum at lore sit amet, consectetur adipiscing elit sed diam nonumy euismod sem velit sed diam nonumy euismod etiam. Cum sociis natoque penat",
    },
    {
      name: "Sally",
      age: 24,
      sex: "female",
      job: "designer",
      url: "./images/pp1.jpg",
      description:
        "lorem Ipsum at lore sit amet, consectetur adipiscing elit sed diam nonumy euismod sem velit sed diam nonumy euismod etiam. Cum sociis natoque penat",
    },
    {
      name: "Sam",
      age: 22,
      sex: "male",
      job: "designer",
      url: "./images/pp4.jpg",
      description:
        "lorem Ipsum at lore sit amet, consectetur adipiscing elit sed diam nonumy euismod sem velit sed diam nonumy euismod etiam. Cum sociis natoque penat",
    },
    {
      name: "Hermet",
      age: 23,
      sex: "female",
      job: "Artist",
      url: "./images/pp5.jpg",
      description:
        "lorem Ipsum at lore sit amet, consectetur adipiscing elit sed diam nonumy euismod sem velit sed diam nonumy euismod etiam. Cum sociis natoque penat",
    },
    {
      name: "Samuel",
      age: 27,
      sex: "male",
      job: "Artist",
      url: "./images/pp6.jpg",
      description:
        "lorem Ipsum at lore sit amet, consectetur adipiscing elit sed diam nonumy euismod sem velit sed diam nonumy euismod etiam. Cum sociis natoque penat",
    },
  ];

  let tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
  useEffect(() => {
    tl.to(".arrow", { yPercent: -50, ease: "easy.in" })
      .to(".arrow", {
        yPercent: 0,
        ease: "easy.out",
      })
      .to(".arrow", { yPercent: -50, ease: "easy.in" })
      .to(".arrow", {
        yPercent: 0,
        ease: "easy.out",
      });
  }, []);

  return (
    <>
      <div className="page4 w-screen h-screen relative z-20 bg-slate-950">
        <div className="p4-container container mx-auto h-full pt-16">
          <span className="text-6xl text-cyan-100 block w-full text-center">
            Who We Are
          </span>
          <div className="card-container mx-auto h-fit mt-20 grid grid-flow-col grid-cols-2 grid-rows-3 gap-10  ">
            {credits.map((person, index) => {
              if (index % 2 === 0)
                return (
                  <div className="card-wrapper h-fit rounded-full bg-sky-300 flex items-center p-3 gap-4">
                    <div className="avatar aspect-square overflow-hidden border-sky-600 border-8 w-32 rounded-full m-2 ">
                      <img src={person.url} className="w-full h-full"></img>
                    </div>
                    <div className="info text-lg font-semibold w-max flex flex-col flex-1 text-gray-950">
                      <span className="name">Name : {person.name} </span>
                      <span className="age">Age : {person.age} </span>
                      <span className="sex">Sex : {person.sex} </span>
                      <span className="job">Job : {person.job} </span>
                    </div>
                    <div className="self-disclosure text-lg font-semibold w-7/12">
                      Self-disclosure : {person.description}
                    </div>
                  </div>
                );
              else
                return (
                  <div className="card-wrapper h-fit rounded-full bg-sky-300 flex items-center p-3 gap-4">
                    <div className="info text-lg font-semibold w-max flex flex-col flex-1 text-gray-950 relative left-14">
                      <span className="name">Name : {person.name} </span>
                      <span className="age">Age : {person.age} </span>
                      <span className="sex">Sex : {person.sex} </span>
                      <span className="job">Job : {person.job} </span>
                    </div>
                    <div className="self-disclosure text-lg font-semibold w-7/12 relative left-14">
                      Self-disclosure : {person.description}
                    </div>
                    <div className="avatar aspect-square overflow-hidden border-sky-600 border-8 w-32 rounded-full m-2 ">
                      <img src={person.url} className="w-full h-full"></img>
                    </div>
                  </div>
                );
            })}
          </div>{" "}
          <div className="text-cyan-50 text-xl font-semibold flex flex-col items-center mt-16 gap-5">
            <span>Contact us</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="arrow w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
