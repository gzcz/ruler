
import { RulerProps, RulerInterface } from "../packages/react-ruler/src/react-ruler/types";

export const PROPERTIES: Array<keyof RulerProps> = [
    "type", "width", "height",
    "unit", "zoom", "style", "backgroundColor", "lineColor",
    "textColor", "direction",
    "textFormat", "scrollPos",
];
export const METHODS: Array<keyof RulerInterface> = [
    "scroll", "resize",
];
