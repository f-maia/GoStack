import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';

import {
  Container,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
  Loading
} from './styles';

import api from '../../services/api';

const INITIAL_STATE = {
  stars: [],
  loading: true,
  page: 1,
  refreshing: false,
};

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = INITIAL_STATE;

  refreshList = async () => {
    await this.setState({ ...INITIAL_STATE, loading: true });
    await this.load();
    await this.setState({ loading: false });
  };

  load = async () => {
    const { stars, page } = this.state;
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred`, {
      params: {
        page,
      },
    });

    this.setState({ stars: [...stars, ...response.data] });
  };

  loadMore = async () => {
    const { page } = this.state;

    await this.setState({ page: page + 1 });
    await this.load();
  };

  async componentDidMount() {
    await this.load();
    this.setState({ loading: false });
  }

  handleNavigate = repository => {
    const { navigation } = this.props;

    console.tron.log('here');
    navigation.navigate('Repository', { repository });
  };

  render() {
    const { navigation } = this.props;
    const { stars, loading, refreshing } = this.state;
    const user = navigation.getParam('user');

    return (
      <Container>
        <Header user={user} />
        {loading ? (
          <Loading />
        ) : (
          <Stars
            data={stars}
            keyExtractor={star => String(star.id)}
            onRefresh={this.refreshList}
            refreshing={refreshing}
            onEndReachedThreshold={0.2}
            onEndReached={this.loadMore}
            renderItem={({ item }) => (
              <Starred onPress={() => this.handleNavigate(item)}>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
        )}
      </Container>
    );
  }
}
