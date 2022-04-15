import PropTypes from 'prop-types';
import { Wrapper, Status, Avatar, Name } from '../FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Wrapper>
      <Status isOnline={isOnline ? 'Online' : 'Offline'}>{isOnline}</Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Wrapper>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
