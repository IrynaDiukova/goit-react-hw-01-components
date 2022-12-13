import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = props => {
    const {avatar,
           name,
           isOnline} = props;

    return (
        <li class={css.item}>
            <span class={isOnline ? css.isOnline : css.status}></span>
            <img class={css.avatar} src= {avatar} alt="User avatar" width="48" />
            <p class={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.prototype = {
        avatar:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        isOnline:PropTypes.bool.isRequired,
}

export default FriendListItem;