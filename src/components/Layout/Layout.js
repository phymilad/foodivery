import React from "react"
import Routers from "../../routes/Routers"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

export default function Layout() {
  return (
    <div>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  )
}
