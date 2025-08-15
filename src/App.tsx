
import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from './store/slices/productsSlice'

function App() {
  const dispatch = useDispatch<any>()
 
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
  <>
  
  </>
  )
}

export default App
