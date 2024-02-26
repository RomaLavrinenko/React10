import style from './NavBar.module.css'
import {Link} from 'react-router-dom';
const NavBar = () =>{


    return(
        <header className={style.header}>
            <ol className={style.nav} >
                <li>
                    <Link className={style.navLink} to="/todos">todos</Link>
                </li>
                <li>
                    <Link className={style.navLink} to="/albums">albums</Link>
                </li>
                <li>
                    <Link className={style.navLink} to="/comments">comments</Link>
                </li>
                
            </ol>
        </header>
    );
}

export default NavBar;