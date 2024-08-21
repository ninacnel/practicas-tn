import PropTypes from 'prop-types';

const FamilyMember = ({ name, age }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Age: {age}</p>
        </div>
    );
};

FamilyMember.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};

export default FamilyMember;