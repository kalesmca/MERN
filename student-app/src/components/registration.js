import React,{useEffect} from "react";
import { getStudents } from "../API/studentApi";

const Registration = () => {
    useEffect(()=>{
        getStudents().then((data) => {
            console.log(data);
        }
        ).catch((error) => {
            console.error("Error fetching students:", error);
        });
    })
    return (
        <div> Registration</div>
    )
}
export default Registration;