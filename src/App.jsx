
function App() {
  return (
    <>
    <div style={{
      width:500,
      height:400,
      background:"white",
    }}>

      {/* First row */}
      <div style={{display:"flex",
      gap:5,
      }}>
        <div style={{
          width:200,
          height:100,
          background:"grey",
          border:"1px solid white",
        }}></div>
        <div style={{
          width:150,
          height:100,
          background:"green",
          border:"1px solid white"
        }}></div>
        <div style={{
          width:200,
          height:100,
          background:"grey",
          border:"1px solid white",
        }}></div>
      </div>
     {/* Second row */}
      <div style={{display:"flex",
       justifyContent:"space-between",
       marginTop:5,
      }}>
        <div style={{
          width:150,
          height:140,
          background:"orange",
          border:"1px solid white",
        }}></div>
        <div style={{
          width:130,
          height:130,
          background:"blue",
          border:"1px solid white",
          borderRadius:100,
          marginTop:6,
        }}></div>
        <div style={{
          width:150,
          height:140,
          background:"orange",
          border:"1px solid white",
        }}></div>
      </div>
        {/* thirth row */}
      <div style={{display:"flex",
        marginTop:5,
        gap:5,
      }}>
        <div style={{
          width:200,
          height:100,
          background:"grey",
          border:"1px solid white",
        }}></div>
        <div style={{
          width:150,
          height:100,
          background:"green",
          border:"1px solid white"
        }}></div>
        <div style={{
          width:200,
          height:100,
          background:"grey",
          border:"1px solid white",
        }}></div>
      </div>
    </div>
    </>
  )
}

export default App
