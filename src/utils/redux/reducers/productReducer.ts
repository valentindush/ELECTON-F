import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Product } from '../../../types'
import {testProducts} from '../../../data/products'

interface productsState{
    value: Product[]
}

const initialState: productsState = {
    value: testProducts
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<Product[]>){
            state.value = action.payload
        },
        addProduct(state, action: PayloadAction<Product>){
            state.value = [...state.value,action.payload]
        },
        resetProducts(state){
            state.value = []
        }
    }
})

export const {setProducts, addProduct, resetProducts} = productsSlice.actions
export default productsSlice.reducer