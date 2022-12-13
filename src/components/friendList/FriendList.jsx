import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

const FriendList = props => {
    const { friends
    } = props;

    return (
        <ul class={css.friendList}>
            {friends.map(({id, avatar, name, isOnline}) => 
                <FriendListItem key = {id} avatar = {avatar}  name = {name} isOnline = {isOnline}/>
            )}
        </ul>
    )
};

FriendList.prototype = {
    friends: PropTypes.arrayOf(PropTypes.shape(
        {avatar:PropTypes.string.isRequired,
         name:PropTypes.string.isRequired,
         isOnline:PropTypes.bool.isRequired,
         id:PropTypes.number.isRequired,}
    )).isRequired,
}

export default FriendList;