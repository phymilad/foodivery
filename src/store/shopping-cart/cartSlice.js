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
        state.cartItems.push({ ...action.payload, quantity: 1 })
      } else {
        state.cartItems[newItemIndex] = {
          ...state.cartItems[newItemIndex],
          quantity: state.cartItems[newItemIndex].quantity + 1,
        }
      }
      state.totalQuantity++
      state.totalAmount += Number(action.payload.price)
    },
    showShoppingCart(state, action) {
      state.showShoppingCart = action.payload
    },
  },
})

export const cartActions = cartSlice.actions
export default cartSlice
