import { JSX } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from '../components/HomeCustom/Home'

export const AppRouter = () : JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  )
}