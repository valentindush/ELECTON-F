import { combineReducers } from '@reduxjs/toolkit'
import productReducer from './productReducer'

const rootReducer = combineReducers({
    productReducer
})

export default rootReducer