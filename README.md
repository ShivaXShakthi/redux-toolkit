project creation 
------------------
npm create vite@latest
    select , react , javascript

cd redux
npm install
npm run dev

removing unneccesary css
------------------------
delete App.css
remove content from App.jsx and index.css

add the below content to index.css [after tailwind replace it is taken care by tailwind]
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body{
  height: 100%;
  width: 100%;
}

Tailwind setup
--------------
refer - https://v3.tailwindcss.com/docs/installation/using-postcss

npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

tailwind.config.js 
content: ["./src/**/*.{html,js,jsx}"],

index.css 
@tailwind base;
@tailwind components;
@tailwind utilities;

use the tailwind extension 
	tailwind css intellisense

go to setting 
	add plaintext: css


REDUS NOTES
===========
install pkg 
===========
    npm install @reduxjs/toolkit react-redux

create redux store in src/app/store.js
======================================
    import { configureStore } from '@reduxjs/toolkit'

    export const store = configureStore({
        reducer : {},
    })

Provide the redux store to react : making it available to all react components
==============================================================================
  import { store } from './app/store'
  import { Provider } from 'react-redux'

  const container = document.getElementById('root')

  const root = createRoot(container)

  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  )

createSlice : src/features/counter/counterSlice.js
==================================================
createSlice API is from Redux Toolkit.
creating slice requires
    name - to identify the slice.
    initial state.
    one or more reducer fns - to define how state can be updated.


import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // it will  not mutate, create new immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer


add createSlice reducer to redux store
======================================
    import { configureStore } from '@reduxjs/toolkit'
    import counterReducer from '../features/counter/counterSlice'

    export const store = configureStore({
        reducer : {
            counter : counterReducer,
        },
    })


use redux state and actions in react components
    we use react hooks
    useSelector - to read data from store
    useDispatch - dispatch actions

src/features/counter/Counter.js
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}


async calls in redux
====================
redux will not allow to call the async function inside the createSlice we create.

Then how can we call async functions?
redux tells that , if we want to call the async functions, you need to wrap the function within other function.
i.e create higher order function
function () { 
    return function () {

    }
}

or

() => () => {} 

inside the function redux will give 2 things 
    1) dispatch - to dispatch the actions
    2) getState - gives the current state


import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const incrementAsync = (amount) => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export const selectCount = (state) => state.counter.value

export default counterSlice.reducer


folder structure
components  
    user.jsx
    product.jsx
    home.jsx
store
    store.jsx
    reducers
        userreducer.jsx
        productreducer.jsx
    actions
        productactions.jsx

notes :
reducer and action manage
useSelector
dispatch
multiple reducers
async call in reducers
react dev tool extension

