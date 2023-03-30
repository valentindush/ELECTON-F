import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignIn from "./pages/auth/signIn"
import SignUp from "./pages/auth/signUp"
import Home from "./pages/home/home"
import Product from "./pages/product/product"
import Products from "./pages/products/products"
function App() {


  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products /> } />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
        </Routes>
      </Router>
  )
}

export default App
