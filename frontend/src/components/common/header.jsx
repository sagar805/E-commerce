import Topbar from "../Layout/Topbar";
import Navbar from "./nAVBAR.JSX";


const Header = () => {
  return ( 
    <header className="border-b border-gray-200">
    
    {/* Topbar */}
    <Topbar />
    {/* navbar */}
    <Navbar />
        
    
    {/* Cart Draswer */}
    
    </header>
  );
};

export default Header;