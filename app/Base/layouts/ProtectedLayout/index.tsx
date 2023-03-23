import { NavLink, Outlet } from 'react-router-dom';
import styles from './styles.module.css';

function ProtectedLayout() {
    return (
        <div className={styles.protectedLayout}>
            <nav className={styles.navBar}>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default ProtectedLayout;
