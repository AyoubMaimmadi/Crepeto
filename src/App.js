import React, { useState, useEffect } from 'react'
import { BiRestaurant } from 'react-icons/bi'

const App = () => {
  const [pagename, setPagename] = useState('Crepeto')

  return (
    <>
      <div className="center">
        <BiRestaurant className="icon-review" />
        <h1 className="text-justify">{pagename}</h1>
      </div>
    </>
  )
}

export default App
