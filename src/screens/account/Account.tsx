import React from "react";
import { compose } from "react-apollo";
import { NavigationScreenProp } from "react-navigation";

import {
  withUserMutation,
  withUserQuery
} from "../../apollo/client-state/user";
import { AccountGuest, AccountMenuWithQuery } from ".";
import { UserType } from "../../types";

type Props = {
  navigation: NavigationScreenProp<any, any>;
  user: UserType;
};

export class Account extends React.PureComponent<Props> {
  static navigationOptions = () => ({ headerTitle: "Account" });

  onPress = (screen: string) => {
    this.props.navigation.navigate(screen);
  };

  render() {
    const {
      navigation: { navigate },
      user
    } = this.props;

    return user.name ? (
      <AccountMenuWithQuery onPress={this.onPress} user={user} />
    ) : (
      <AccountGuest onPress={this.onPress} />
    );
  }
}

export const AccountWithQuery = compose(
  withUserMutation,
  withUserQuery
)(Account);
