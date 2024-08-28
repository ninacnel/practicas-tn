import PropTypes from 'prop-types';

const ChangeDollar = ({ onDollarChange, dollar }) => {

    const ChangeDollarHandler = (event) => {
        onDollarChange(event.target.value);
    }

    return (
        <div>
            <label id='dolar'>Nuevo precio del dolar: </label>
            <input name='dolar' type='number' onChange={ChangeDollarHandler} value={dollar}/>
        </div>
    );
}

ChangeDollar.propTypes = {
    onDollarChange: PropTypes.func.isRequired,
    dollar: PropTypes.number.isRequired,
};

export default ChangeDollar;