import FamilyMember from "./FamilyMember";

const Family = ({ persons }) => {
    // Ordenar el arreglo de mayor a menor según la edad
    const sortedPersons = persons.sort((a, b) => b.age - a.age);
  
    // Mapear el arreglo ordenado para devolver componentes FamilyMember
    return (
      <div>
        {sortedPersons.map((person, index) => (
          <FamilyMember key={index} name={person.name} age={person.age} />
        ))}
      </div>
    );
  };
  
  export default Family;