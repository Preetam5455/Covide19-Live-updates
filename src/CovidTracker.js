import React from "react"

const CovidTracker = () =>{
    let name="pritam";
    const currDate=new Date().toLocaleDateString();
    const currTime= new Date().toLocaleTimeString();

    return(
        <>
        <h1>Hello, My name is {name}</h1>

        <p>The current Date is {currDate} </p>
        <p>The current Time is {currTime} </p>

        </>
    )
}
export default CovidTracker;