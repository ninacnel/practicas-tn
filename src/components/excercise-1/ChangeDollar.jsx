const ChangeDollar = ({ setDollarHandler, dollar }) => {

    const ChangeDollarHanlder = (event) => {
        setDollarHandler(event.target.value);
    }

    return (
        <div>
            <label id='dolar'>Nuevo precio del dolar: </label>
            <input name='dolar' type='number' onChange={ChangeDollarHanlder} value={dollar}/>
        </div>
    )
}

export default ChangeDollar