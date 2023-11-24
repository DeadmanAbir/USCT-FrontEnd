import { useState, useEffect } from 'react'
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { getState, getSemesterApi } from '../Store/Getters';
import StatusBar from './StatusBar';
import { pinwheel } from 'ldrs'

function Inside() {
    pinwheel.register();
    let count = 0;
    const name = useRecoilValue(getState);
    const [student, setStudent] = useState([]);
    const semesterApi=useRecoilValue(getSemesterApi);

    useEffect(() => {
        async function GET() {
            try {
                console.log(semesterApi);
                if ( semesterApi) {
                    //    console.log(name==="Aradhna Srivastava")
                    const response = await axios.get(`https://usct-backend.onrender.com/students/inside/5/${name}`);


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



                    <l-pinwheel
                        size="50"
                        stroke="3.5"
                        speed="1"
                        color="#900"
                    ></l-pinwheel>

                </div>
            </>
        )
    }
    return (
        <div>Inside</div>
    )
}

export default Inside