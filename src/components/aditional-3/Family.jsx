import PropTypes from 'prop-types';

import FamilyMember from "./FamilyMember";

const Family = ({ persons }) => {
    const sortedPersons = persons.sort((a, b) => b.age - a.age);

    return (
        <div>
            {sortedPersons.map((person, index) => (
                <FamilyMember key={index} name={person.name} age={person.age} />
            ))}
        </div>
    );
};

Family.propTypes = {
    persons: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Family;