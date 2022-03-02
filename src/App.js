import React, { useState, useEffect } from 'react'

const App = () => {
  const [pagename, setPagename] = useState('Crepeto')

  const titleTime = setTimeout(() => {
    setPagename(`Management system`)
  }, 2000)
  clearTimeout(titleTime)

  return (
    <>
      <div className="center">
        <h1 className="text-justify">{pagename}</h1>
      </div>
    </>
  )
}

export default App
