import List from "./List";

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
        </header>
    )
}

export default SideBarLeft; 