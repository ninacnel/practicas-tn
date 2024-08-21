import React from 'react';

const FamilyMember = ({ name, age }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
};

export default FamilyMember;