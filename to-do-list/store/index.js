import { createStore } from "redux"

const generalStore = (state = { collapse: false }, action) => {
    if (action.type === "toggleCollapse") {
        return { collapse: !state.collapse }
    }
    return state
}

const store = createStore(generalStore)

export default store