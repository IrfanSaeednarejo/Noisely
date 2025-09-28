

import './App.css'
import Display from './components/Display.jsx'
import Player from './components/Player.jsx'
import Sidebar from './components/Sidebar.jsx'

function App() {
 
  return (
   <div className='h-screen bg-black'>
    <div className='h-[90%] flex'>
     <Sidebar />
     <Display/>
    </div>
    <Player/>
   </div>
  )
}

export default App
