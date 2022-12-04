import { Block, TransactionData, TableContainer, Link } from "../style";
import { baseURL } from "../../../config";

const Table = ({ transactions }) => {
  return (
    <TableContainer>
      {transactions?.map((transaction, index) => {
        return (
          <Block key={index}>
            <Link href={`/dashboard/admin/transactions/${transaction.id}`}>
              <TransactionData>
                Transaction Initiated: {transaction?.transactionDateAndTime}
              </TransactionData>
              <TransactionData>
                Customer Wallet Address: {transaction?.buyerWalletAddress}
              </TransactionData>
              <TransactionData>
                Phone Number: {transaction?.phoneNumber}
              </TransactionData>
              <TransactionData>
                Email Address: {transaction?.emailAddress}
              </TransactionData>
              <TransactionData>
                Transaction Data: {transaction?.transactionStatus}
              </TransactionData>
            </Link>
          </Block>
        );
      })}
    </TableContainer>
  );
};

export default Table;
