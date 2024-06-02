const SideBarMax = 200;
const SideBarMin = 100;
const ProjectSize = 350;



/* Get and Set Methods for  CSS variables*/

function getCssVar(VarName) {
    var val = getComputedStyle(document.querySelector(":root")).getPropertyValue(VarName);
    if(val.indexOf("px") != - 1) {
        return val.substring(0, val.indexOf("px"));
    }

    else {
        return val;
    }
}

function setCssVar(VarName, newAssignment) {
    document.querySelector(":root").style.setProperty(VarName, (newAssignment + "px"));
}

document.getElementById("button").addEventListener("click", SideBar);

/* Side Bar Method compresses and extends SideBar to lengths of Constants SideBarMax and SideBarMin */

function SideBar() {
    if(getCssVar("--SideBarWidth") == SideBarMax) {
        for(i = SideBarMin; i < getCssVar("--SideBarWidth"); ++i) {
            setCssVar("--SideBarWidth", i);
        }
    }
    else if(getCssVar("--SideBarWidth") == SideBarMin) {
        for(i = SideBarMax; i > getCssVar("--SideBarWidth"); --i) {
            setCssVar("--SideBarWidth", i);
        }
    }
}

/* Toggle display method for elements by ID*/



/* isDisplayed function */

function changeNumOfCol() {
    const {width, height} = document.getElementById("pc").getBoundingClientRect();

    console.log(height + "  " + width);

    const { innerHeight, innerWidth } = window;
    const projectArea = innerWidth - getCssVar("--SideBarWidth");
    const areaPerProject = projectArea / getCssVar("--numOfCol");

    console.log(projectArea + "  " + areaPerProject);
    

}



