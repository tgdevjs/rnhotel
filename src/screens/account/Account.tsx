import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';

import { withUserMutation, withUserQuery } from '../../apollo/client-state/user';
import { AccountGuest, AccountMenuWithQuery } from '.';

export class Account extends React.PureComponent {
  static navigationOptions = () => ({ headerTitle: 'Account' });

  render() {
    const {
      navigation: { navigate },
      user,
    } = this.props;

    if (user.name) {
      return <AccountMenuWithQuery navigate={navigate} user={user} />;
    }

    return <AccountGuest user={user} navigate={navigate} />;
  }
}

export const AccountWithQuery = compose(
  withUserMutation,
  withUserQuery
)(Account);

Account.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
