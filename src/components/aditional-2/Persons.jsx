import React from 'react'
import Person from './Person';

const Persons = ({names}) => {
    const filteredNames = names.filter((n)=> n.startsWith('P'));
  return (
    <div>
        <h4>Names</h4>
        {filteredNames.map((n)=>(
            <Person name={n}/>
        ))}
    </div>
  )
}

export default Persons