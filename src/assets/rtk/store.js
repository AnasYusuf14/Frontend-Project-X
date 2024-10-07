import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './features/postSlice'
import modeReducer from './features/mode'
import dirReducer from './features/dir'
export const store = configureStore({
    reducer: {
        posts: postsReducer,
        mode: modeReducer,
        dir: dirReducer
    },
})