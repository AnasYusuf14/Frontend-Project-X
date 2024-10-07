import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    posts: [],
}
export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts = [...state.posts, action.payload]
            console.log(state.posts)
        },
        removePost: (state, action) => {
            state.posts = [...state.posts, action.payload]
            console.log(state.posts)
        }
    },
})
export const { addPost } = postSlice.actions

export default postSlice.reducer