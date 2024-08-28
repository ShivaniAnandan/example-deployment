import express from 'express'
import { createEmployee, getEmployeeDetail, getEmployeeDetailById, deleteEmployeeById, updateEmployeeById } from '../Controller/employeeController.js'

const router = express.Router()

router.post('/create-emp', createEmployee)
router.get('/get-empdetails', getEmployeeDetail)
// router.get('/get-empdetails/:id', getEmployeeDetailById)
router.put('/edit-emp/:email', updateEmployeeById)
// Routes: employeeRoutes.js
router.get('/get-empdetails/:email', getEmployeeDetailById);
router.delete('/employee/:id', deleteEmployeeById);


export default router;