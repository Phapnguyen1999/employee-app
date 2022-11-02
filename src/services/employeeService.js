import axios from "axios";
import { EMPLOYEE_API_URL } from "./commonService";


class EmployeeService{
    static getEmployees(){
        return axios.get(EMPLOYEE_API_URL);
    }
    static removeEmployee(employeeId){
        return axios.delete(`${EMPLOYEE_API_URL}/${employeeId}`);
    }
    static createEmployee(employee){
        return axios.post(EMPLOYEE_API_URL, employee);
    }
}

export default EmployeeService;