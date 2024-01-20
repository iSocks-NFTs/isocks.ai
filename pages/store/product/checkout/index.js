import Head from 'next/head';
import StoreNavbar from '../../../../components/Navbar/Store';
import CheckOutCost from '../../../../components/Store/Checkout';
import ProductList from '../../../../components/Store/Checkout/ProductList';


export default function Checkout(){
    return (
        <>
            <Head>
                <title>iSocks Store | Checkout</title>
                </Head>
            <StoreNavbar />
            <div className='w-full flex gap-x-2 p-3'>
                <ProductList />
                <CheckOutCost />
            </div>
        </>
    )
}