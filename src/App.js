import './App.css';
import Student from './components/Student';

function App() {
  
  return (
    <>
    <h1>This is my first react app.</h1>
      <Student name = "Mayank" place ="Gurugram" rollno = {21}/>
      <Student name = "Shivank" place ="Bangalore" rollno = {20}/>
      <Student name = "Mamta" place ="Chandigarh" rollno = {17}/>
    </>
  );
}


export default App;
