import {Link} from 'react-router-dom';
import './Navbar.css';
export default function Navbar(){
  return (
    <nav>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Students">Students</Link></li>
                <li><Link to="/Teachers">Teachers</Link></li>
            </ul>
        </div>
    </nav>
  );
}
