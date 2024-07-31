import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./page2.css";
import { TweenMax } from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger);

export const Page2 = forwardRef((props, ref) => {
  let pos;
  let p2TL;
  useEffect(() => {
    pos = document.querySelector(".photo").getBoundingClientRect();
    p2TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".page2",
        start: "500px 45%",
        end: "+=500",
        scrub: 3
      },
    });
  }, []);

  const splitText = (className) => {
    let text = document.querySelector(`${className}`);
    let splittedWord = text.innerText.split(" ");
    let words = "";
    splittedWord.map((word) => {
      words += `<div class="word pe-1.5 flex">` + word + "</div>";
    });
    text.innerHTML = words;
    let word = document.querySelectorAll(`${className} > .word`);
    word.forEach((Word) => {
      let splittedText = Word.innerText.split("");
      let letters = "";
      splittedText.map((letter) => {
        letters += `<div class="char">` + letter + "</div>";
      });
      Word.innerHTML = letters;
    });
  };

  useImperativeHandle(ref, () => ({
    p2Settings() {
      gsap.set(".p2-loading, .character-img", {
        x: pos.x,
        y: pos.y,
        width: pos.width,
        height: pos.height,
      });
      gsap.set(".p2-container", { autoAlpha: 0, display: "none" });
    },

    p2LoadAnimation() {
      p2TL
        .to(".p2-loading", { scale: 6.5, duration: 1.5 })
        .to(".navbar", { yPercent: -100, duration: 0.25 }, "<")
        .to(
          ".character-img",
          {
            width: "+=100px",
            height: "+=100px",
            yPercent: -20,
            borderRadius: 0,
            duration: 1.5,
          },
          "<"
        )
        .to(".p2-container", { autoAlpha: 1, display: "flex", duration: 2 })
        .to(".hws-text > .word > .char", {
          yPercent: 0,
          autoAlpha: 1,
          stagger: 0.01,
          ease: "back",
          duration: .25,
        });

      return p2TL;
    },

    textSettings() {
      splitText(".hws-text");
      gsap.set(".hws-text > .word > .char", { yPercent: 100, autoAlpha: 0 });
    },
  }));

  return (
    <>
      <div className="page2 w-screen h-screen left-0 top-0 ">
        <div className="p2-loading"></div>
        <img
          src="./images/page1Character.gif"
          className="character-img opacity-95"
        ></img>
        <div className="p2-container container h-full relative z-10 m-auto flex items-center text-cyan-100">
          <div className="text w-5/12 ms-52 relative pb-12 before:absolute before:w-full before:h-screen before:-left-40 before:border-l-cyan-600 before:blur-md before:overflow-hidden before:border-l-4 before:rounded-l-full grid place-items-center">
            <span className="hws text-5xl w-full block text-center">
              How We Started?
            </span>{" "}
            <br />
            <p className="hws-text text-start w-full h-full text-xl flex flex-wrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              reiciendis officia voluptates qui maiores repudiandae recusandae
              totam accusamus molestias magnam, unde praesentium deserunt
              dolorum dolore, consequatur harum aliquid fugit dolor! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Facilis reiciendis
              officia voluptates qui maiores repudiandae recusandae totam
              accusamus molestias magnam, unde praesentium deserunt dolorum
              dolore, consequatur harum aliquid fugit dolor! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Facilis reiciendis officia
              voluptates qui maiores repudiandae recusandae totam accusamus
              molestias magnam, unde praesentium deserunt dolorum dolore,
              consequatur harum aliquid fugit dolor! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Facilis reiciendis officia
              voluptates qui maiores repudiandae recusandae totam accusamus
              molestias magnam, unde praesentium deserunt dolorum dolore,
              consequatur harum aliquid fugit dolor! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Facilis reiciendis officia
              voluptates qui maiores repudiandae recusandae totam accusamus
              molestias magnam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
});
