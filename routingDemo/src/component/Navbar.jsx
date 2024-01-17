import { useNavigate } from "react-router-dom"

export function Navbar(){
    const navigate = useNavigate()
    return(
        <div style={{background:"black", color:"white"}}>
        <ul className="navbar" style={{
          display:"flex", gap:"20px", listStyle:"none", padding:"20px"
        }}>
      
          <li><button onClick={()=>{
            navigate("/dashboard")
          }}>Dashboard</button></li>
     
          <li><button onClick={()=>{
            navigate("/")
          }}>Landing</button></li>
          <li>Contact</li>
          <li>Service</li>
        
        </ul>
        </div>
    )
}