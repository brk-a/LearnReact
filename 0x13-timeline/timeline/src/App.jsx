import { Chrono } from 'react-chrono'
import './App.css'
import items from './dump/items'

function App() {

  return (
    <>
      <div style={{width: "500px", height: "950px"}}>
        <Chrono items={items} mode="VERTICAL_ALTERNATING"/>
      </div>
      {/* <div style={{width: "950px", height: "500px"}}>
        <Chrono items={items}/>
      </div> */}
    </>
  )
}

export default App
