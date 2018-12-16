import React, {Component} from 'react';
import  moment  from 'moment';
import Select, { components } from 'react-select';
import { Link } from 'react-router-dom';
import { SingleDatePicker } from 'react-dates';
class TransactionForm extends Component {

    constructor (props) {
        super(props);
        this.state = {
          
            description: props.transaction ? props.transaction.description : '',
            amount: props.transaction ? props.transaction.amount : '',
            transactionDate: this.props.transaction ? moment(props.transaction.transactionDate) : moment(),
            calendarFocused: false,
            transactionNumber: this.props.transaction ? this.props.transaction.transactionNumber : '',
            notes: this.props.transaction ? this.props.transaction.notes : '',
            tags: [
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' }
              ],
            classifications: [
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' }
            ],
            payors: [
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' }
            ],
            classification: props.transaction ? this.props.transaction.classification : '',
            tag: this.props.transaction ? this.props.transaction.tag : '',
            payor: this.props.transaction ? this.props.transaction.payor : '',
            dateFormat: 'YYYY-MM-DD',
            errorDescription: '',
            errorAmount: '',
            errortransactionNumber: '',
            createdAt: this.props.transaction ? moment(props.transaction.createdAt) : moment(),
            calendarFocused: false,
        };    
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description, errorDescription: ''}));
    }
    onTransactionDateChange = (event, {name, value}) => {
        this.setState(() => ({ [name]: value  }));
    }
    onTransactionNumberChange = (e) => {
        const transactionNumber = e.target.value;
        this.setState(() => ({
            transactionNumber
        }));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount, errorAmount: '' }));
          }
    }
    onnotesChange = (e) => {
        const notes = e.target.value;
        this.setState(() => ({
            notes
         }
        ));
    }
    onClassificationChange = (classification) => {
        this.setState( () => (
            { classification }
        ));
    }
    onTagChange = (tag) => {
        this.setState( () => ({tag}) );
    }
    onPayorChange = (payor) => {
        this.setState ( () => ({payor}) );
    }

    onDateChange = (transactionDate) => {
        // prevent users from deleting value
        if (transactionDate) {
          this.setState(() => ({ transactionDate }));
        }
      };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        if (!this.state.amount || !this.state.transactionNumber) {
              if (!this.state.amount) {
                this.setState(() => ({ errorAmount: 'Please provide amount' }));
              } 
              if (!this.state.transactionNumber) {
                this.setState(() => ({ errortransactionNumber: 'Please provide an transactionNumber' }));
              } 
        } else {
            // Clear the error
            this.setState(() => ({
                errorAmount: '',
                errortransactionNumber: ''
            }));
            
            const transaction = {
                transactionDate: this.state.transactionDate,
                amount: this.state.amount,
                transactionNumber: this.state.transactionNumber,
                notes: this.state.notes
            };
           
            this.props.onFormSubmit(transaction);
        }
    }

    render() {
        const CustomOption = ({ innerProps, isDisabled }) => {
            console.log(innerProps);
            return !isDisabled ? (
                <div {...innerProps}>{/* your component internals */}</div>
            ) : null;
        }
          const ControlComponent = (props) => (
            <div>
              <components.Control {...props} />
            </div>
          );
        
          const optionRenderer = (option) => {
            return (
                <div>
                    {option.value} - {option.label} - {option.someOtherValue}
                </div>
            )
        }
        return (
            <form className="form"  autoComplete='false'>
                <div className="field">
                    <label>Transaction Date</label>
                    <div className="fields">
                    <div>
                        <SingleDatePicker
                      
                        date={this.state.transactionDate}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false} // allow selecting past days
                        showDefaultInputIcon
                        hideKeyboardShortcutsPanel
                        
                        />
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label>Or Number</label>
                    <div className="fields">
                        <div className={this.state.transactionNumber === '' ? '' : ''}>
                            <input 
                            type="text"
                            className="text-input"
                            placeholder="Or Number"
                            value={this.state.transactionNumber}
                            onChange={this.onTransactionNumberChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label>Classification</label>
                    <div className="fields">
                        <div className={this.state.classification === '' ? '' : ''}>
                        <Select   
                           optionRenderer={optionRenderer}
                            components={{ Control: ControlComponent }} 
                            options={this.state.classifications} />
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label>Amount</label>
                    <div className="fields">
                    <div className={this.state.amount === '' ? 'field error' : 'field '}>
                        <input 
                            type="text" 
                            placeholder="Amount" 
                            className="text-input"
                            value={this.state.amount}
                            onChange={this.onAmountChange}    
                        />
                    </div>
                    </div>
                </div>
               
                <div className="field">
                    <label>notes</label>
                    <div className="fields">
                    <div className='field'>
                        <textarea
                         className="textarea"
                        placeholder="Add a notes for your expense (optional)"
                        value={this.state.notes || ''}
                        onChange={this.onnotesChange}
                        >
                        </textarea>
                    </div>
                    </div>
                </div>
                <div>
                    <button className="button" onClick={this.onFormSubmit}>Submit Transaction</button>
                    { ' ' }
                    <Link className="button button--secondary" to={'/transactions'}>Cancel</Link>
                </div>
            </form>
        );
    }

}

export default TransactionForm;