import { useState } from 'react'
import { Home } from './pages/Home'
import { Portfolio } from './pages/Portfolio'
import {Resume} from './pages/resume'
import { Contact } from './pages/contact'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'


function App() {
  const [page, setPage] = useState("Home")

const onPageChange=()=> {
  if(page == "Home"){
    return <Home/>
  }else if(page == "Portfolio"){
    return <Portfolio/>
  }else if(page == "Resume"){
    return <Resume/>
  }else{
    return <Contact/>
  }

}




  return (
      <div>
<Navbar setPage={setPage}/>
{onPageChange()}
<Footer/>
      </div>
  )
}

export default App
