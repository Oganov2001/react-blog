import Subscription from './subscription';

const Header = () => {
    return (
        <header>
            <h1>A Blog Using React.js</h1>
            <p>Welcome to my blog. Subscribe and get my latest blog posts in your inbox.</p>

            <Subscription></Subscription>
        </header>
    );
};

export default Header;