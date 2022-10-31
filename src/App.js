import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import '../node_modules/react-toastify/dist/ReactToastify.css'
import Navbar from './Components/Navbar/Navbar';
import EmployeeList from './Components/EmloyeeList/EmloyeeList';
import CreateEmployee from './Components/CreateEmployee/CreateEmployee';
import EditEmployee from './Components/EditEmployee/EditEmployee';
import ViewEmployee from './Components/ViewEmployee/ViewEmployee';

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/employee' element={<EmployeeList/>}></Route>
        <Route path='/employee/create' element={<CreateEmployee/>}></Route>
        <Route path='/employee/edit/:employeeId' element={<EditEmployee/>}></Route>
        <Route path='/employee/view/:employeeId' element={<ViewEmployee/>}></Route>
      </Routes>
    </>
  );
}

export default App;
