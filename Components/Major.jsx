import { useEffect, useState } from 'react'
import StatusBar from './StatusBar'
import { useLoaderData, useLocation } from 'react-router-dom';
import { auth } from '../Firebase/Firebase';
import { pinwheel } from 'ldrs'
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { getSemesterApi } from '../Store/Getters';
import { getState } from '../Store/Getters';
import Studentcard from './StudentCard';
function Major() {
    pinwheel.register()
    const location = useLocation();
    const data = useLoaderData();



    const NAME = useRecoilValue(getState);
    const semesterApi = useRecoilValue(getSemesterApi);
    let count;
    const [student, setStudent] = useState([]);
    console.log(NAME);
    useEffect(() => {
        async function GET() {
            try {

                if (semesterApi && NAME) {

                    const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/students/major/${semesterApi}/${NAME}`);


                    setStudent(response.data);
                }
            } catch (e) {
                console.log(e);
            }
        }
        GET();

    }, [semesterApi, NAME])


    if (student.length == 0) {
        return (<>
            <StatusBar />
            <div style={{ position: "relative", top: "0", left: "0", display: "flex", justifyContent: "center", alignItems: "center", height: "60vh", width: "100%" }}>


{/* 
                <l-pinwheel
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
            <div style={{ position: "relative", display: "flex", flexWrap: "wrap" }}>
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

                {console.log(student)}
            </div>
            <div className="bottom_cta">
                <div className="buttons-set">

                </div>
            </div>

        </div>
    )

}

export default Major

