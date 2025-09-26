import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddStudent from "./components/AddStudent"
import studentsData from "./assets/students.json";

  function App() {
  const [students, setStudents] = useState(studentsData);
  
 
  const handleAddStudent=(newStudent)=>{
      setStudents((prev)=>{
      return(
        [...prev,newStudent]
      )
    })
  }


  return (
    <div className="App pt-20">

      <Navbar />
      {/* TABLE/LIST HEADER */}
      <TableHeader />

      <AddStudent handleAddStudent={handleAddStudent} />
       {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
            {/* STUDENT LIST */}

     
    </div>
  );
}

export default App;
