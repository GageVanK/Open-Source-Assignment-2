import { useEffect, useState } from "react";

export default function Students(){
    const [students, setStudents] = useState([]);

    useEffect (() => {
        const loadStudents = async () => {
            try{

                const res = await fetch('/.netlify/functions/getStudents')
                const student = await res.json()
                setStudents(student)
            } catch (err){
                console.error(err)
            }
            
        }
        loadStudents();
    }, [])
    return(
        <div>
            <h1>Students</h1>

            <ul>
                {students.map((First) => (
                <li>
                {First.fields.First} {First.fields.Last} - {First.fields.Class_Standing} Admitted {First.fields.Admit_Term} Pursuing a {First.fields.Degree} in {First.fields.Major}. Contact: {First.fields.Cell_Number}
                </li>
                ))}
            </ul>
        </div>
        
    );
}