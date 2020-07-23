import Ruler from "../../src/Ruler";
import Dragger from "@daybrush/drag";
import "./index.css";

const ruler1 = new Ruler(document.querySelector(".ruler.horizontal"), {
    type: "horizontal",
    unit: '100',
    zoom: '0.5'
});
const ruler2 = new Ruler(document.querySelector(".ruler.vertical"), {
    type: "vertical",
    direction: "start",
    unit: '100',
    zoom: '0.5'
});

window.addEventListener("resize", () => {
    ruler1.resize();
    ruler2.resize();
});
let scrollX = 0;
let scrollY = 0;

new Dragger(document.body, {
    drag: e => {
        scrollX -= e.deltaX;
        scrollY -= e.deltaY;

        ruler1.scroll(scrollX);
        ruler2.scroll(scrollY);
    },
});
