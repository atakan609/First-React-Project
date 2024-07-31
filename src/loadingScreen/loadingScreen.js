import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { forwardRef, useImperativeHandle } from "react";

gsap.registerPlugin(TextPlugin);

export const LoadingScreen = forwardRef((props, ref) => {
  
  const splitText = (className) => {
    let text = document.querySelector(`${className}`);
    let splittedText = text.innerText.split("");
    let letters = "";
      splittedText.forEach((letter) => {
        letters += `<div class="char px-1">` + letter + "</div>";
      });
      text.innerHTML = letters;
  };

  const textAnimation = (text, animationDuration, randomizeDuration) => {
    let animDuration = () => {
      return animationDuration / 5;
    };

    let timerDuration = () => {
      return animationDuration * 1000;
    };

    let rndDuration = () => {
      return randomizeDuration * 1000;
    };

    let timer = setInterval(() => {
      let iconLetters = document.querySelectorAll(`${text} > .char`);

      iconLetters.forEach((item) => {
        if (!item.classList.contains("changed"))
          gsap.to(item, {
            duration: 0,
            text: "random(['q', 'w', 'f', 'g', 'h', 'i', 'j', 'k', 'n', 'o', 'p', 'r', 't', 'u', 'v', 'y', 'z', 'x', 'b', 'c', 'd',])",
          });
      });
    }, 70);

    let mainTextTL = gsap.timeline();

    let chars = document.querySelectorAll(`${text} > .char`);

    setTimeout(() => {
      mainTextTL
        .to(chars[0], {
          text: "s",
          duration: animDuration(),
          onComplete: () => chars[0].classList.add("changed"),
        })
        .to(chars[1], {
          text: "e",
          duration: animDuration(),
          onComplete: () => chars[1].classList.add("changed"),
        })
        .to(chars[2], {
          text: "l",
          duration: animDuration(),
          onComplete: () => chars[2].classList.add("changed"),
        })
        .to(chars[3], {
          text: "a",
          duration: animDuration(),
          onComplete: () => chars[3].classList.add("changed"),
        })
        .to(chars[4], {
          text: "m",
          duration: animDuration(),
          onComplete: () => chars[4].classList.add("changed"),
        });
      setTimeout(() => clearInterval(timer), timerDuration());
    }, rndDuration());
  };

  let tlCloseLoadScreen = gsap.timeline({ defaults: { ease: "sine.out" } });
  const loadScreenAnimation = () => {
    tlCloseLoadScreen
      .to(".loading-screen-wrapper .loading-screen:last-child", {
        scale: 0,
        display: "none",
        duration: 1.25,
        fontSize: "0",
      })
      .to(
        ".loading-screen-wrapper > .loading-screen:first-child",
        {
          scale: 0,
          display: "none",
          duration: 0.5,
          fontSize: "0",
        },
        "<.75"
      )
      .to(".loading-screen-wrapper, .loading-screen-wrapper > *", {
        display:'none'
      })
    return tlCloseLoadScreen;
  };

  let tlMaster = gsap.timeline({ paused: true });

  useImperativeHandle(ref, () => ({
    loadScreenSettings(text) {
      gsap.set(".loading-screen-wrapper .loading-screen:last-child", {
        width: "100vw",
        height: "100vw",
        scale: 1.3,
        borderRadius: "100vw",
      });
      gsap.set(".loading-screen-wrapper > .loading-screen:first-child", {
        width: "100vw",
        height: "100vw",
        scale: 1.6,
        borderRadius: "100vw",
      });
      splitText(`${text}`);
      gsap.set(`${text} > .char`, { yPercent: -100, autoAlpha: 0 });
      gsap.to(`${text} > .char`, { yPercent: 0, autoAlpha: 1, stagger: 0.1 });
    },

    windowLoadAnimation() {
      tlMaster
        .add(textAnimation(".selam", 1.75, 2)) // 1.75 2
        .add(loadScreenAnimation(), "<4") // 4.5
      return tlMaster;
    },
  }));

  return (
    <div className="loading-screen-wrapper flex fixed w-screen h-screen z-50 justify-center items-center">
      <div className="selam-wrapper loading-screen bg-blue-300 bg-opacity-95 before:inset-0 before:bg-blue-300 before:absolute before:rounded-full before:blur-xl">
        <div className="selam loading-screen flex items-center justify-center bg-blue-400 font-mono text-4xl tracking-wider blur-none before:inset-0 before:bg-blue-400 before:absolute before:rounded-full before:blur-2xl">
          selam
        </div>
      </div>
    </div>
  );
});