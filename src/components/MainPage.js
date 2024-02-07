import Button from "./Button";
import Title from "./Title";
import Img from "./Img";
import Computer from "./svg/programmingComputer.svg"
import Arrow from "./svg/arrow.svg"
import About from "./AboutSection";

function MainPage(){
    return(
        <>
        <main>
            <Button/>
            <div>
            <Title/>
            <Img source={Computer} type="programming computer" title="programming computer"/>
            </div>
            <Img source={Arrow} type="arrow"/>
        </main>
        <About/>
        </>
    )
}

export default MainPage;