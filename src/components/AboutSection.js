import Img from "./Img";
import Arrow from "./svg/arrow.svg"
import CSS from "./svg/css.svg"
import HTML from "./svg/html.svg"
import JS from "./svg/js.svg"
import REACT from "./svg/react.svg"
import Know from "./svg/knowledge.svg"


function About (){
    return (
        <>
        <div>
            <div>
                <p>Hi everyone, I’m Senna from São Paulo, Brazil. Computer engineering student searching for my first experience in front-end.</p>
                <p>Here it’s some of my knowledge!</p>
                <div>
                    <Img source={CSS} type="CSS icon"/>
                    <Img source={HTML} type="HTML icon"/>
                    <Img source={JS} type="JS icon"/>
                    <Img source={REACT} type="REACT icon"/>
                </div>
            </div>
            <Img source={Know} type="Knowledge picture" title="Knowledge picture"/>
        </div>
        <Img source={Arrow} type="Arrow"/>
        </>
    )
}

export default About;