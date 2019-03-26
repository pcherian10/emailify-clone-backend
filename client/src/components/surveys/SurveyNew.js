// SurveyForm shows a form for a user to add input
import React, {Component} from 'react';
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview';


class SurveyNew extends Component {
    
    state = { showReview: false } // this is the same as constructor.
    
    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview 
                onCancel={() => this.setState({ showFormReview: false})}
            />
        } 
        return <SurveyForm onSurveySubmit={() => this.setState({showFormReview: true})} />
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default SurveyNew