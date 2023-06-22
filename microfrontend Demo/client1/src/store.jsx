import React from 'react'
import { configureStore,createSlice } from '@reduxjs/toolkit'
import { Provider,useDispatch,useSelector } from 'react-redux' 

const initialState = {
  color: "black",
}

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    red: (state) => {
      
      state.color = "red"
    },
    blue: (state) => {
      state.color = "blue"
    },
  },
})

const { red,blue } = colorSlice.actions

export const store = configureStore({
  reducer: {color: colorSlice.reducer},
})

export function useColor(state ){
  const color = useSelector((state)=>state.color.color)
  const dispatch = useDispatch()
  return {
          color,
          red: ()=>dispatch(red()),
          blue: ()=>dispatch(blue()),
  }
}

export function ColorProvider({children}) {
    return <Provider store={store}>{children}</Provider>;
} 

