import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase/Firebase';
import { useRecoilValue , useSetRecoilState} from 'recoil';
import { getState, getSemStatus } from '../Store/Getters';
import { isSemFive } from '../Store/Atoms';
function StatusBar() {
  // console.log("CuurentUser", auth.currentUser);
  const name=useRecoilValue(getState);
  const checkSemFive=useRecoilValue(getSemStatus);

  const setSemFive=useSetRecoilState(isSemFive);


const [semester, setSemester]=useState("8");
const navigate=useNavigate();

function changeStatus(){
 
   
  if(semester=="5"){
   setSemFive({
     isFive: true,
     semesterApi: semester
   });
   localStorage.setItem('isFive', 'true');

   navigate(`/inside?sem=${semester}`);
  }else{
   setSemFive({
     isFive: false,
     semesterApi: semester
   });
   localStorage.setItem('isFive', 'false');
 
   navigate(`/inhouse?sem=${semester}`);
  }
      
 }
    return (
       
        <div className="year-dropdown" style={{paddindLeft: "50px"}}>
          <div className="container container--small">
            <div className="title-box title-box--center">
              <h1 className="heading">Student Performance Records</h1>
              <div className="title-box__text content_box">
              Access detailed performance reports of our students. 
              </div>
              <div  className="button button--empty button--accent-outline"  style={{marginBottom: "-15px"}}>
          <span className="button__text" style={{ color: "grey",  fontSize: "20px" }}><span style={{color: "black"}}>Welcome: </span>{name}</span>
           <span className="icon"> 
            
          </span>
        </div>
            </div>
          </div> 
        <label htmlFor="yearSelect" style={{fontWeight: "900", paddingLeft: "50px"}}>Select Year:&nbsp;</label>
        <select id="yearSelect">
          <option value="">All Years</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          {/* Add more years as needed */}
    
        </select>
        <label htmlFor="yearSelect" style={{fontWeight: "900", paddingLeft: "20px"}}>Semester:&nbsp;</label>
        <select   id="yearSelect" onChange={(e)=>{
        
          setSemester(e.target.value);
        }}
       >
    
          <option >8</option>
          <option selected={semester==7}>7</option>
          <option selected={checkSemFive}>5</option>
          {/* Add more years as needed */}
    
        </select>
       
        <a  className="button button--empty button--accent-outline"onClick={changeStatus}   style={{marginBottom: "-15px"}}>
          <span className="button__text" style={{ color: "#900" }}>Filter</span>
          
        </a>
       {checkSemFive?(<> <Link to={`/outside?sem=${semester}`}className="button button--empty button--accent-outline" style={{marginBottom: "-15px"}}>
          <span className="button__text" style={{ color: "#900" }}>Outside</span>
          <span className="icon">
            
          </span>
        </Link>
        <Link to="/inside" className="button button--empty button--accent-outline" style={{marginBottom: "-15px"}}>
          <span className="button__text" style={{ color: "#900" }}>Inside</span>
          <span className="icon">
            
          </span>
        </Link></>): (<> <Link to="/minorinternships" className="button button--empty button--accent-outline" style={{marginBottom: "-15px"}}>
          <span className="button__text" style={{ color: "#900" }}>Minor</span>
          <span className="icon">
            
          </span>
        </Link>
        <Link to="/majorinternships" className="button button--empty button--accent-outline" style={{marginBottom: "-15px"}}>
          <span className="button__text" style={{ color: "#900" }}>Major</span>
          <span className="icon">
            
          </span>
        </Link><Link to="/inhouse"  className="button button--empty button--accent-outline" style={{marginBottom: "-15px"}}>
          <span className="button__text" style={{ color: "#900" }}>Inhouse</span>
          <span className="icon">
            
          </span>
        </Link></>)}
        
    
    
        {/* Staring from here */}
       </div>
      )
}

export default StatusBar