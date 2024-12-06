import{ useEffect, useState } from 'react';
import './App.css';
import EmployeeCard from './EmployeeCard';

interface Employee {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    medium: string;
  };
}

const App = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(data => setEmployees(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      {employees.map((employee, index) => (
        <EmployeeCard key={index} employee={employee} />
      ))}
    </div>
  );
}

export default App;

