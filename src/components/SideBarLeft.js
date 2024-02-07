import List from "./List";
import Img from "./Img";
import Instagram from "./svg/svgInstagram.svg";
import LinkedIn from "./svg/svgLinkedin.svg";
import Github from "./svg/svgGithub.svg"

function SideBarLeft(){
    return(
        <header>
            <div>
                <a>SNK</a>
            </div>
            <ul>
                <List item="HOME"/>
                <List item="ABOUT"/>
                <List item="WORK"/>
                <List item="CONTACT"/>
            </ul>
            <div>
                <Img source={Instagram} type="Instagram" title="Instagram"/>
                <Img source={Github} type="Github" title="Github"/>
                <Img source={LinkedIn} type="LinkedIn" title="LinkedIn"/>
            </div>
        </header>
    )
}

export default SideBarLeft; 