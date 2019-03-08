import React from 'react';
import Table from '../reusable/table/Table';
class ExpenseViewer extends React.Component {
    constructor(props) {
        super(props);
    }

    getTableHeader(paymentApplications) {

        return ["", "Date", "Description", "Amount"];
    }

    getData(expenses) {
        let data = [];
        expenses.map((item, index) => {
            let row =
                [index + 1, item.date, item.description, item.amount];
            data.push(row)
        })
        return data;
    };


    render() {
        return (
            <div>
                <Table
                    tableHead={this.getTableHeader(this.props.expenses)}
                    tableData={this.getData(this.props.expenses)
                    }
                    plain compactRow compactCell textCenter cellBordered
                    grayRow pagination alignment
                />
            </div>
        )
    }
}

export default ExpenseViewer;