import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts=createAsyncThunk("products/fetchProducts",async ()=>{
    const result=await axios.get("https://dummyjson.com/products")
    console.log(result);
    return result.data.products
})

const productSlice=createSlice({
    name:'products',
    initialState:{
        allProducts:[]
    },
    reducers:{

    }
})

