
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/productsSlice'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import Layout from './components/feature/Layout/Layout'

function App() {
  const dispatch = useDispatch<any>()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
