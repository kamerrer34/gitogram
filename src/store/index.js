import  { createStore } from "vuex";
import trends from "./modules/trends";

export default createStore({
    modules: {
        trends
    }
});