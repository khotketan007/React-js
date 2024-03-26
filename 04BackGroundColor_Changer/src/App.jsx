import { useState } from "react"

function App() {
  const [color, setColor] = useState('')

  return (
    <>
      <div className="w-full h-screen duration-1000" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2  ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg px-5 py-5 rounded-3xl m-10 text-2xl bg-slate-300 border-2 border-black border-dashed">
            <button onClick={() => setColor("red")} className="outline-none px-4 py-0.5 rounded-full text-black shadow-2xl " style={{backgroundColor : "red"}}>Red</button>
            <button onClick={() => setColor("blue")} className="outline-none px-4 py-0.5 rounded-full text-black shadow-2xl" style={{backgroundColor : "blue"}}>Blue</button>
            <button onClick={() => setColor("green")} className="outline-none px-4 py-0.5 rounded-full text-black shadow-2xl" style={{backgroundColor : "Green"}}>Green</button>
            <button onClick={() => setColor("white")} className="outline-none px-4 py-0.5 rounded-full text-black shadow-2xl" style={{backgroundColor : "white"}}>White</button>
            <button onClick={() => setColor("yellow")}  className="outline-none px-4 py-0.5 rounded-full text-black shadow-2xl" style={{backgroundColor : "yellow"}}>Yellow</button>
            <button onClick={() => setColor("pink")}  className="outline-none px-4 py-0.5 rounded-full text-black shadow-2xl" style={{backgroundColor : "pink"}}>Pink</button>
            <button onClick={() => setColor("orange")}  className="outline-none px-4 py-0.5 rounded-full text-black shadow-2xl" style={{backgroundColor : "orange"}}>Orange</button>
            <button onClick={() => setColor("black")}  className="outline-none px-4 py-0.5 rounded-full text-white shadow-2xl" style={{backgroundColor : "black"}}>Black</button>
            <button onClick={() => setColor("aqua")}  className="outline-none px-4 py-0.5 rounded-full text-black shadow-2xl" style={{backgroundColor : "aqua "}}>Aqua </button>
            <button onClick={() => setColor("grey ")}  className="outline-none px-4 py-0.5 rounded-full text-black shadow-2xl" style={{backgroundColor : "grey"}}>Grey</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
