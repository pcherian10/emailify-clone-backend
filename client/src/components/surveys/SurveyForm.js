//SurveyForm shows a form rendered by SurveyNew 
import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField'
import _ from 'lodash';

const FIELDS = [
    {label: 'Survey Title', name:'title'},
    {label: 'Subject Line', name:'subject'},
    {label: 'Email Body', name:'body'},
    {label: 'Recipient List', name: 'emails'}
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
                <form onSubmit = {this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);
//reduxform only takes one object as opposed to connect