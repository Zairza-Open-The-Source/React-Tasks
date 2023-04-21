import React from 'react';
import './DataDisplay.css';

export default function DataDisplay() {
    const data = localStorage.getItem("userData");

    const ldata = JSON.parse(data);

    // const {name,email} = props;
    // console.log(name,email);

    
    console.log(ldata.name);

    return (
        <>
          <div className="aboutpage">
            <div className="elea">
              <span className='aspan'>Name</span>: {ldata.name? ldata.name:""}
            </div>
            <div className="elea">
              <span className='aspan'>Email</span>: {ldata.email?ldata.email:""}
            </div>
          </div>
        </>
      )
}
