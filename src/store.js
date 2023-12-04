import { configureStore } from '@reduxjs/toolkit'
import CalculatorSlice from './Calculator/CalculatorSlice'
import TodoSlice from './Todos/TodosSlice'

export const store = configureStore({
  reducer:{
    calculator:CalculatorSlice,
    todos:TodoSlice
  } ,
  
})
