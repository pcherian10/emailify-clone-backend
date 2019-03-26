//SurveyForm shows a form rendered by SurveyNew 
import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom'
import SurveyField from './SurveyField'
import _ from 'lodash';
import validateEmails from '../../utils/validateEmails'

const FIELDS = [
    {label: 'Survey Title', name:'title', noValueError: 'Provide a Survey Title' },
    {label: 'Subject Line', name:'subject', noValueError: 'Provide a Survey Subject Line'},
    {label: 'Email Body', name:'body', noValueError: 'Provide a Survey Email Body/Question Line'},
    {label: 'Recipient List', name: 'emails', noValueError: 'Please provide a proper list of emails'}
];

class SurveyForm extends Component {
    
    renderFields() {
        return _.map(FIELDS, ({label, name}) => {
            return (
                <Field component={SurveyField} 
                key={name}
                type="text" 
                label={label} 
                name={name} />
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderFields()}
                <form onSubmit = {this.props.handleSubmit(this.props.onSurveySubmit)}>
                <Link to="/surveys" className="red btn-flat white-text">
                    Cancel
                </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    errors.emails = validateEmails(values.emails || '');

    _.each(FIELDS, ({ name, noValueError }) => {
        if (!values[name]) {
            errors[name] = noValueError
        }

    })

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);
//reduxform only takes one object as opposed to connect