import './header.css';
import Subscription from '../Subscription/subscription';

const Header = () => {
    return (
        <header>
            <h1>A Blog Using React.js</h1>
            <p>Welcome to my blog. Subscribe and get my latest blog post in your inbox.</p>

            <Subscription></Subscription>
        </header>
    );
};

export default Header;