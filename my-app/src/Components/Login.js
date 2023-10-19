
import{react ,useState,useEffect} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Logo from '../images/Logo.png'
import Woman from '../images/Woman.png'
import Man from '../images/Man.png'



const  Login=()=> {
    document.body.style.overflow='hidden';
    // const [email,setemail]=useState([]);
    // const [password,setpassword]=useState([]);
  
    const navigate =useNavigate();
     const ClickSignIn=()=>{
         navigate ("/todo")
    }
    // const handleSignIn =async ()=>{
    //   const userdata=[email,password];
    //   try{
    //   const response =await fetch("http://localhost:64245/api/TodoProj/GetUser",{
    //     method:'post',
    //     headers:{
    //       "Content-Type":"application/json",
    //     },
    //     body:JSON.stringify(userdata),


    //   },
    //   );
    //   if(response.ok){
    //     Navigate("/todo")
    //   } else{
    //     console.log("not ok")
    //   }
    // }catch(error){
    //   console.error("Error:", error);
    // }

    // }

  
     return (
        <section className="container-fluid">
    <div className="row">

      <div className="col-md-6 p-5" >
        <img src={Logo} alt="Logo" 
        className="image-fluid mt-5" style={{ height: '360px',width:'480px' }}/>
      </div>

      <div className=" row-md-4  d-flex justify-content-start">
        
         <img src={Woman} alt="woman" className="img-fluid p-0 mt-0" style={{width:'180px',height:'340px'}} />

         <img src={Man} alt="Man" className="img-fluid" style={{ width:"40%",height:"340px",paddingLeft:"15%"}} />
        </div>
    </div>

    <div className="container-fluid p-4 " style={{ width: '938px',height:"1080px",flex:"1",marginTop:"-50%",marginLeft:"50%", background: 'transparent linear-gradient(180deg, #8556A4 0%, #2D2B52 100%) 0% 0% no-repeat padding-box', border: '1px solid var(--unnamed-color-707070)' }}>
           <div className="p-8"
          style={{paddingTop:"220px",paddingLeft:"17%",height:"81px"}}>
            <h1
            style={{
              textAlign:"left",
              font:"title-font",
              fontSize:"80px",
              letterSpacing:"0px",
              color:"#FFFF",
              fontWeight:"250"
            }}
            
            >Time to Work!</h1>

          </div> 

          <div
          className="container"
          style={{
            width: "664px",
            padding: "90px",
            paddingLeft: "50px",
            textAlign: "left",
            paddingTop:"15%"
          }}
        >
          <h6
            className="text-light"
            style={{ fontSize: "15px", fontFamily: "monospace" }}
          >
            Email
          </h6>
          <input
            type="email"
            // value={email}
            // onChange={(e) => setemail(e.target.value)}
            className="form-control mb-3"
            style={{
              padding: "12px",
              width: "100%",
              borderRadius: "3px",
              height: "30px",
            }}
          />
          <h6
            className="text-light"
            style={{ fontSize: "15px", fontFamily: "monospace" }}
          >
            Password
          </h6>
          <input
            type="Password"
          //  value={password}
            // onChange={(e) => setpassword(e.target.value)}
            className="form-control mb-3"
            style={{
              padding: "8px",
              width: "100%",
              borderRadius: "3px",
              height: "30px",
            }}
          />
          <button
            className="btn mt-3"
            style={{
              paddingTop: "2px",
              width: "100%",
              height: "28px",
              background: "#B6A3C2",
              opacity: 1,
              borderRadius: "25px",
              color: "#403564",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              textTransform: "uppercase",
            }}
           onClick={ClickSignIn}
          >
            Sign In
          </button>
        </div>
      </div>
    </section>
        
      
      );
   
    
   
        
}
export default Login;
