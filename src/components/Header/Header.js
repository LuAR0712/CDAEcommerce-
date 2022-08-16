import style from './Header.module.css';
import Nav from './Nav';

const Header = () => {
    const prueba = () => {
        
    };
    return (
        <header className={style.header}>
            <Nav isInHedaer={true} prueba={prueba} />
        </header>
    );
};

export default Header;