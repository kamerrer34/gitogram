import  { createStore } from "vuex";
import trends from "./modules/trends";
import user from "./modules/user";
import starred from "./modules/starred";
import repos from "./modules/repos"

export default createStore({
    modules: {
        trends,
        user,
        starred,
        repos,
    }
});