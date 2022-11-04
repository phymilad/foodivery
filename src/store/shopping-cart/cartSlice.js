import { createSlice } from "@reduxjs/toolkit"

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
      console.log(newItemIndex)
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
    decreaseItem(state, action) {
      const foundItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      const item = state.cartItems[foundItemIndex]
      if (item.quantity === 1) {
        state.cartItems.splice(foundItemIndex, 1)
      } else {
        item.quantity--
      }

      state.totalQuantity--
      state.totalAmount -= Number(action.payload.price)
    },
    removeItem(state, action) {
      console.log(action)
      console.log(state.cartItems)
      // const foundItemIndex = state.cartItems.findIndex(
      //   (item) => item.id === action.payload.id
      // )
      // const item = state.cartItems[foundItemIndex]

      // state.cartItems.filter((item) => item.id !== action.payload.id)
      // state.totalQuantity -= item.quantity
      // state.totalAmount -= Number(item.price * item.quantity)
    },
    showShoppingCart(state, action) {
      state.showShoppingCart = action.payload
    },
  },
})

export const { addItemToCart, decreaseItem, removeItem, showShoppingCart } =
  cartSlice.actions
export default cartSlice.reducer
