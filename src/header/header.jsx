import "./header.scss"
import { useNavigate } from 'react-router-dom';

function Header()
{
    const navigate = useNavigate();

    return (
    <div className={"header_main_div"}>
        <div className={"header_div"}>
            <span className="left_div">
                <button onClick={()=>navigate('/')}>Home</button>
            </span>
                
            <div className="right_div">
                <button onClick={()=>navigate('/about')}>About</button>
                <button onClick={()=>navigate('/projects')}>Projects</button>
                <button onClick={()=>navigate('/contact')}>Contact</button>
                <button onClick={()=>navigate('/extra-curricular')}>Extra-curricular</button>
            </div>
                
        </div>

    </div>)
}

export default Header;