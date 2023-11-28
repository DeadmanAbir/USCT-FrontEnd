import { useEffect, useState } from 'react'
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { getState, getSemesterApi } from '../Store/Getters';
import { pinwheel } from 'ldrs'
import StatusBar from './StatusBar';
import Studentcard from './StudentCard';
function Outside() {
  pinwheel.register();
  const name = useRecoilValue(getState);
  const semesterApi = useRecoilValue(getSemesterApi);
  const [student, setStudent] = useState([]);
  let count = 0;

  useEffect(() => {
    async function GET() {
      try {

        if (semesterApi) {
          //    console.log(isConnected);
          const response = await axios.get(`https://usct-backend.onrender.com/students/outside/5/${name}`);


          setStudent(response.data);
        }
      } catch (e) {
        console.log(e);
      }
    }
    GET();

  }, [semesterApi, name])



  if (student.length == 0) {
    return (
      <>
        <StatusBar />
        <div style={{ position: "relative", top: "0", left: "0", display: "flex", justifyContent: "center", alignItems: "center", height: "60vh", width: "100%" }}>
          {/* <l-pinwheel
            size="50"
            stroke="3.5"
            speed="1"
            color="#900"
          ></l-pinwheel> */}
                <h1 style={{fontSize: "50px", color: "#900"}}>No data to show</h1>

        </div>
      </>
    )
  }
  return (
    <div className="posts-05">

      <StatusBar />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0px" }}>
        {student.map((about) => (
          <Studentcard
            key={count++}
            id={about._id}
            enrollment={about.enrollment}
            studentName={about.name}
            year={about.year}
            company={about.company}
            semester={about.semester}
          />
        ))}
      </div>



      <div className="bottom_cta">
        <div className="buttons-set">

        </div>
      </div>

    </div>
  )
}

export default Outside