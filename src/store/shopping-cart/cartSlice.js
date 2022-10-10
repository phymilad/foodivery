import { createSlice, current } from "@reduxjs/toolkit"

const initialCartState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
  showShoppingCart: false,
}

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      if (newItemIndex === -1) {
        state.cartItems.push(action.payload)
      }
      state.totalQuantity++
      state.totalAmount += Number(action.payload.price)
    },
    showShoppingCart(state) {
      state.showShoppingCart = !state.showShoppingCart
    },
  },
})

export const cartActions = cartSlice.actions
export default cartSlice
