import {Router, Request} from 'express'
import {GetMatches} from '../../database'

export const matchRouter = Router()

/* interface UpdateEmployeeRequest extends Request {
    id: number;
    name: string;
}
*/

matchRouter.get('/getMatches', (req, res) => {
    res.status(200).json(GetMatches());
});

/* matchRouter.get('/getEmployee/:id', (req, res) => {
    const employee = employees.find(e => e.id === parseInt(req.params.id));
    if (!employee) res.status(404).json({ message: 'Employee not found' });
    res.status(200).json(employee);
});

matchRouter.patch('/updateEmployee', (req: UpdateEmployeeRequest, res) => {
   const employee = employees.find(e => e.id === req.body.id);
    if (!employee) res.status(404).json({ message: 'Employee not found' });

    // if employee is found, update the employee name
    employee.name = req.body.name;
    res.status(200).json(employee);
});
*/
