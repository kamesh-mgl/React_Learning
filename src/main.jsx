import {createRoot} from "react-dom/client"
import WindowSize from "./useeffect/WindowSize";
import { Input } from "./useref/Input";
import Theme from "./usememo/Theme";
// import App from "./List/App";
// import App from "./colorpicker/App"
import App from "./ToDoList/App"

import Count from "./usestate/State";

const root = createRoot(document.getElementById('root'));

root.render(
    <>
    <App/>
    </>
)