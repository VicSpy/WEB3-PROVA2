import React from 'react';
import EmployeeCard from './EmployeeCard/EmployeeCard.js';
import './Employee.css';

const Employee = ({ data }) => {
    return (
        <div className="employees-container">
            {data.map(employee => (
                <EmployeeCard key={employee.id} {...employee} />
            ))}
        </div>
    );
}

export default Employee;
