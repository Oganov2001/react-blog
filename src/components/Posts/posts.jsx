import Post from './Post/post';
import './posts.css';

const Posts = (props) => {
    return (
        <ul className='posts-list'>
            <li>
                <Post></Post>
            </li>
            <li>
                <Post></Post>
            </li>
            <li>
                <Post></Post>
            </li>
        </ul>
    );
};

export default Posts;