import { featureLists, goodLists } from "../../constants"

 
const Art = () => {
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
            </div>
        </div>
    )
}

export default Art
