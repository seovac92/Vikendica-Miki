import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Layout = ({children}) => {
    return ( 
        <div className="layout-wrapper">
            <NavBar />
            <div className="page">
                {children}
            </div>    
            <Footer />
        </div>
     );
}
 
export default Layout;