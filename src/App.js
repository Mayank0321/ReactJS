import './App.css';

function App() {
  const student = {
    name : "Mayank",
    place : "Gurugram"
  }
  return (
    <>
      <h1>This is my first react app.</h1>
      <p>My name is <i>{student.name}</i></p>
      <p>I am from <b>{student.place}</b></p>
    </>
  );
}

export default App;
