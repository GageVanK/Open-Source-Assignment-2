import { useEffect, useState } from "react";

export default function Teachers(){
    const [advisors, setAdvisors] = useState([])

    useEffect (() => {
        const loadAdvisors = async () => {
            try{
                const res = await fetch('/.netlify/functions/getAdvisors')
                const advisor = await res.json()
                setAdvisors(advisor)
            } catch(err){
                console.error(err)
            }
          
        }
        loadAdvisors();
    }, [])

    return(
        <div>
            <h1>Advisors</h1>

            <ul>
                {advisors.map((First) => (
                    <li>
                    {First.fields.First}
                    </li>

                ))}
            </ul>
        </div>
    );
}