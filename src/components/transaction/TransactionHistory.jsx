import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

const TransactionHistory = props => {
    const {
        items
    } = props;

    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({id, type, amount, currency}) => 
                    <tr key = {id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(
        {type:PropTypes.string.isRequired,
         amount:PropTypes.string.isRequired,
         currency:PropTypes.string.isRequired,
         id:PropTypes.string.isRequired,}
    )).isRequired,
}

export default TransactionHistory;