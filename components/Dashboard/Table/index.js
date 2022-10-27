import {Block,TransactionData,TableContainer} from '../style';

const Table = ({transactions}) =>{
    return(
        <TableContainer>
            {transactions?.map((transaction,index) =>{
                return (
                    <Block key={index}>
                        <TransactionData>Transaction Initiated: {transaction?.transactionDateAndTime}</TransactionData>
                        <TransactionData>Customer Wallet Address: {transaction?.buyerWalletAddress}</TransactionData>
                        <TransactionData>Phone Number: {transaction?.phoneNumber}</TransactionData>
                        <TransactionData>Email Address: {transaction?.emailAddress}</TransactionData>
                        <TransactionData>Transaction Data: {transaction?.transactionStatus}</TransactionData>
                    </Block>
                )
            })}
        </TableContainer>
    )
}

export default Table;