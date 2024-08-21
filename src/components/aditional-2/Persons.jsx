import PropTypes from 'prop-types';
import Person from './Person';

const Persons = ({names}) => {
    const filteredNames = names.filter((n)=> n.startsWith('P'));
  return (
    <div>
        <h4>Names</h4>
        {filteredNames.map((n, i)=>(
            <Person key={i} name={n}/>
        ))}
    </div>
  )
}

Persons.propTypes = {
    names: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Persons