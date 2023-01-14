import Head from 'next/head';
import Layout from '../../layouts/normal_layout';
import VerifyComponent from '../../components/Verify';

const Verify = () =>{
    return(
        <Layout>
            <Head>
                <title>
                    iSocks | Verify Socks
                </title>
            </Head>
            <VerifyComponent />
        </Layout>
    )
}

export default Verify;