import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

export function Page3() {
    let products = [
        { name: ''},
        { name: ''},
        { name: ''},
        { name: ''},
        { name: ''},
        { name: ''},
    ]

    useEffect(() => {
        let productsTL = gsap.timeline({scrollTrigger: {
            trigger: '.filler3',
            start: "top 60%",
            end: "+=300",
            scrub: 2,
            pin: true,
        }})
        gsap.set('.page3', { autoAlpha: 0, display: 'none', yPercent: 15})
        gsap.set('.page3 > div > span', { autoAlpha: 0, yPercent: -15})
        gsap.set('.page3 > div > div > div', { autoAlpha: 0, yPercent: -15})
        productsTL
        .to('.page3', { autoAlpha: 1, display: 'block', yPercent: 0})
        .to('.page3 > div > span', { autoAlpha: 1, yPercent: 0})
        .to('.page3 > div > div > div', { autoAlpha: 1, yPercent: 0, stagger: .05})
    }, [])


  return (
    <>
      <div className="page3 h-screen w-screen fixed z-20 bg-sky-950">
        <div className="p3-container container h-full mx-auto pb-20">
            <span className="products text-sky-50 text-5xl block w-full text-center my-20">Our Products</span>
            <div className="products-container w-11/12 h-4/6 grid grid-cols-3 grid-rows-2 gap-16 mx-auto">
                {
                    products.map((product, index) => (
                        <div className="product w-full h-full bg-cyan-900 rounded-3xl p-4 text-sky-50">We don't have any project rn :(</div>
                    ))
                }
            </div>
        </div>
      </div>
    </>
  );
}
