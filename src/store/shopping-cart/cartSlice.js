import { createSlice } from "@reduxjs/toolkit"

const initialCartState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialCartState,
  reducers: {},
})

export default cartSlice
