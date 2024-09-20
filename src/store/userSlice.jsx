import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username : "",
    email : "",
    "fav-cart": [],
}

const userSlice = createSlice({
    initialState: initialState,
    name: "user",
    reducers: {
        addItem(state, action) {

            console.log(state, "state from add item")
            console.log(action, "action from add item")

            state["fav-cart"].push(action.payload);
        },
        removeItem(state, action){
            state["fav-cart"].filter((ele) => ele != action.payload)
            console.log("addItemStore", state["fav-cart"])
        },
        setUser(state, action){
            console.log(action, "in setuser")
            state.username = action.payload.username
            state.email = action.payload.email;
            state["fav-cart"] = action.payload["fav-cart"]
        }
    }
})

export const { addItem, removeItem, setUser} = userSlice.actions
export default userSlice