import "./Card.css"

interface EmployeeCardProps {
  employee: {
    name: {
      first: string;
      last: string;
    };
    email: string;
    picture: {
      medium: string;
    };
  };
}

function EmployeeCard({ employee }: EmployeeCardProps){
  return (
    <div className="employee-card">
      <img src={employee.picture.medium} alt={`${employee.name.first} ${employee.name.last}`} />
      <h2>{employee.name.first} {employee.name.last}</h2>
      <p>{employee.email}</p>
    </div>
  );
};

export default EmployeeCard;
