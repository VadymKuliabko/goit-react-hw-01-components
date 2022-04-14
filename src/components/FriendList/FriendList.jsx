import PropTypes from 'prop-types';
import { ListItem, Item } from './FriendList.styled';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ListItem>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <Item key={id}>
          <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
        </Item>
      ))}
    </ListItem>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
