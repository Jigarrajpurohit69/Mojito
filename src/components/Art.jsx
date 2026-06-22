import { useMediaQuery } from "react-responsive"
import { featureLists, goodLists } from "../../constants"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

 
const Art = () => {

    const isMobile = useMediaQuery({maxWidth: 767});

    useGSAP(()=>{
        const start = isMobile ? 'top 20%' : 'top top';


        const maskTImeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#art',
                start,
                end: 'bottom center',
                scrub:1.5,
                pin: true
            }
        })

        maskTImeline
        .to('.will-fade',{
            opacity:0,
            stagger:0.5,
            ease: 'power1.inOut',
        })
        .to('.masked-img',{
            scale:1.3,
            maskPosition: 'center',
            maskSize:'400%',
            duration:3,
            ease:'power1.inOut'
        })
        .to('.masked-content',{
            opacity:1,
            duration:2,
            ease:'power1.inOut'
        })
    })

    return (
        <div id="art" >
            <div className="container mx-auto h-full pt-20">
                <h2 className="will-fade" >The ART</h2>

                <div className="content">
                    <ul className="space-y-4 will-fade">
                        {goodLists.map((Feature, index)=> (
                            <li key={index} className="flex items-center gap-2">
                                <img src="/public/images/check.png" alt="check" />
                                <p>{Feature}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="cocktail-img">
                        <img src="/public/images/under-img.jpg"
                        alt="cocktail"
                        className="abs-center masked-img object-contain "/>
                    </div>

                    <ul className="space-y-4 will-fade">
                        {featureLists.map((Feature, index)=> (
                            <li key={index} className="flex items-center justify-start gap-2">
                                <img src="/public/images/check.png" alt="check" />
                                <p className="md:w-fit w-60" > {Feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="masked-container">
                    <h2 className="will-fade">Sip-worthy Perfection</h2>
                    <div className="masked-content">
                        <h3>Made with Craft, Poured with Passion</h3>
                        <p>This isn't just a drink. it's a carefully crafted moment made just
                            for you 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Art
