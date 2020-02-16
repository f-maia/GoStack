import React from 'react';
import PropTypes from 'prop-types';

import { HeaderContainer, Avatar, Name, Bio } from './styles';

export default function Header({ user }) {
  return (
    <HeaderContainer>
      <Avatar source={{ uri: user.avatar }} />
      <Name>{user.name}</Name>
      <Bio>{user.bio}</Bio>
    </HeaderContainer>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
};
