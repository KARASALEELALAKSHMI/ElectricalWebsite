import React from 'react'
import Header from './components/Header'
import Services from './components/Services'
import Features from './components/Features'
import Component from './components/Component'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CartPage from './components/Cart'

const App = () => {
  return (
    <div>
      <Header/>
      <Features/>
      <Services/>
      <Component/>
      <Projects/>
      <Contact/>
      <CartPage/>
      
    </div>
  )
}

export default App
