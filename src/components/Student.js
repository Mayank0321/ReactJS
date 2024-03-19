import React from 'react'

function Student(props){
    const studentJSX = (
      <>
        <p>My name is <i>{props.name}</i></p>
        <p>I am from <b>{props.place}</b></p>
        <p>My Roll Number is <b>{props.rollno}</b></p>
      </>
    );
    return studentJSX;
  }

export default Student