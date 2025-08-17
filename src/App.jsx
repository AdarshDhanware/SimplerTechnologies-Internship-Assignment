import React from 'react'
import Navbar from './components/Navbar.jsx'
import SignUpPage from './components/SignUpPage.jsx'
import UserCard from './components/UserCard.jsx'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-900'>
      <Navbar/>
      <SignUpPage/>
      <UserCard name="Michael Smith" email="michael.smith@example.com"/>
    </div>
  )
}

export default App