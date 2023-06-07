import Pageloader from './components/pageloader/loader'
import { React, useEffect, useState } from 'react'
import Main from './components/main/hero'
function App() {
  const [loading, setLoading] = useState(true)
  return (
    <>
      {loading ?
        <Pageloader
          setLoading={setLoading}
        /> :
        <Main />}
    </>
  )
}

export default App
