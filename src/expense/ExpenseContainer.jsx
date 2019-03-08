import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import {getExpenses, clearExpenseState} from '../actions/expense';
import ExpenseViewer from './ExpenseViewer';

class ExpenseContainer extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.dispatch(getExpenses());
    }

    render(){
        return(
            <div>
                {this.props.expenses && <ExpenseViewer expenses={this.props.expenses}/>}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isProcessing: state.expense.isProcessing,
        isProcessed: state.expense.isProcessed,
        expenses: state.expense.expenses,
        user: state.auth.user
    };
}

export default withRouter(connect(mapStateToProps)(ExpenseContainer));