import React, { useState } from 'react';

const initialState = {
    name: ''
}

const FormSat = (props) => {
    const [fields, setFields] = useState(initialState);

    const handleFieldsChange = e => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    })

    const handleSubmit = event => {
        event.preventDefault();
        props.addSatellite(fields);
        setFields(initialState);

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input id="name" type="text" name="name"value={fields.name} onChange={handleFieldsChange} />
            </div>
            <br/>
            <input type="submit"/>
        </form>
    );
}

export default FormSat;