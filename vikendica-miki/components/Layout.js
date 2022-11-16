import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Layout = ({children}) => {
    return ( 
        <div className="layout-wrapper">
            <NavBar />
            <div className="proba">
                {children}
                <Footer />
            </div>
        </div>
     );
}
 
export default Layout;