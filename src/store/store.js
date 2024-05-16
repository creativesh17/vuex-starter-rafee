import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
    // state () {
    //     return {
    //         count: 0
    //     }
    // },
    state: {
        count: 0,
        books: [
            {name: "Harry Potter", price: 100},
            {name: "Lord of The Rings", price: 150},
            {name: "Night Circus", price: 90},
            {name: "Lost World", price: 200},
        ]
    },
    mutations: {
            increment (state) {
            state.count++
        }
    }
})

// const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
// app.use(store)
