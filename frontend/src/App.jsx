import React from 'react'
import {Route, Routes} from 'react-router-dom' ;

const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>

    </div>
  )
}

export default App