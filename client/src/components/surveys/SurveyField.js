//Survey Field contains logic render a single surveyfield in a survey form
import React from 'react'

export default ({ input, label }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} />
        </div>
    )
}