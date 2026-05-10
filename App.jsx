export default function RackywebGlobalMedia() {
  return (
    <div style={{
      background:"#050816",
      color:"white",
      minHeight:"100vh",
      fontFamily:"sans-serif",
      padding:"40px"
    }}>
      <h1 style={{
        fontSize:"64px",
        fontWeight:"900",
        background:"linear-gradient(to right,#00f0ff,#8b5cf6)",
        WebkitBackgroundClip:"text",
        WebkitTextFillColor:"transparent"
      }}>
        Rackyweb Global Media
      </h1>

      <p style={{
        fontSize:"22px",
        maxWidth:"800px",
        lineHeight:"1.8",
        color:"#d1d5db"
      }}>
        Building futuristic digital experiences for the future.
      </p>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"20px",
        marginTop:"50px"
      }}>
        {["Web Development","Media Production","Branding","AI Solutions"].map((item,index)=>(
          <div key={index} style={{
            background:"rgba(255,255,255,0.05)",
            border:"1px solid rgba(255,255,255,0.1)",
            borderRadius:"24px",
            padding:"30px"
          }}>
            <h2>{item}</h2>
            <p style={{color:"#9ca3af"}}>
              Premium futuristic digital service system.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
