import { useCounterStore } from "./store/atoms/counter";


function App() {


  return (
    <>
      
        <Value />
        <Increase />
        <Decrease />
      
    </>
  )
}

function Value() {
  const  count  = useCounterStore((state) => state.count)
    return <div>
    {count}
  </div>
}
function Increase() {
  const  inc  = useCounterStore((state) => state.inc)
  
  return <div><button onClick={inc}>increase</button></div>
}
function Decrease() {
  const  dec  = useCounterStore((state) => state.dec)
  return <div><button onClick={dec}>decrease</button></div>
}

export default App
