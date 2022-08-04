import {useState} from "react";
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
    const [currentPage, setCurrentPage] = useState('');
    
    const handlePageChange = (page) => {
        setCurrentPage(page)
      };

    return (
        <nav className="Header">
            <h1>Event Staff Shift App</h1>
            <div className="NavLinks">
            <Link to='/' onClick={() => handlePageChange('Completed')} className={currentPage==="Completed"?"CurrentPage":"OtherPage"}>Completed Shifts - To Be Confirmed</Link>
            <Link to='/upcoming' onClick={() => handlePageChange('Upcoming')} className={currentPage==="Upcoming"?"CurrentPage":"OtherPage"}>Upcoming Shifts</Link>
            <Link to='/history' onClick={() => handlePageChange('History')} className={currentPage==="History"?"CurrentPage":"OtherPage"}>Shift History</Link>
            <Link to='/signup' onClick={() => handlePageChange('Signup')} className={currentPage==="Signup"?"CurrentPage":"OtherPage"}>Sign Up for Shifts</Link>
            </div>
        </nav>
    )
}

export default Header;