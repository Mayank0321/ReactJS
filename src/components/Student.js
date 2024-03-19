import React from 'react'
import styles from './../App.module.css'
function Student(props){
    
    return (
      <>
        <p id={styles.para}>My name is <i>{props.name}</i></p>
        <p>I am from <b>{props.place}</b></p>
        <p>My Roll Number is <b>{props.rollno}</b></p>
      </>
    );
  }

export default Student