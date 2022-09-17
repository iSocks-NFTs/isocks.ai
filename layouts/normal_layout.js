import NavBar from '../components/Navbar/';
import Footer from '../components/Footer';

export default function Layout({children}){
    return(
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}