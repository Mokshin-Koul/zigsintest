import classes from './Header.module.css';
import img_2 from '../../img/img-2.png';

function Header() {
    return (
        <header>
            <ul>
                <li>Products</li>
                <li>Collections</li>
                <li>Gifts</li>
                <li>Our Magazine</li>
            </ul>
            <div className={classes.left}>
                <div>
                <img src={img_2} alt="search"></img>
                </div>
                <button className={classes.login}>Log In</button>
                <div className={classes.btn}>
                    <button>SIGN UP</button>
                </div>
            </div>
        </header>
    );
}

export default Header;