import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import { withUserQuery } from '../../apollo/client-state/user';
import { StaysList, StaysListGuest } from '.';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  segmentedControlContainer: {
    padding: 30,
  },
});
export class Stays extends React.PureComponent {
  static navigationOptions = () => ({ headerTitle: 'Stays' });

  state = { selectedIndex: 1 };

  handleIndexChange = index => {
    this.setState({ selectedIndex: index });
  };

  renderStaysList(isSignedIn) {
    const { selectedIndex } = this.state;
    const {
      navigation: { navigate },
      user: { name },
    } = this.props;
    // get past or upcoming reservations based on segmented control tab selected index
    const timeRangeKey = selectedIndex === 1 ? 'arrivalDate_gte' : 'arrivalDate_lt';

    if (isSignedIn) {
      return <StaysList name={name} orderBy="createdAt_DESC" timeRangeKey={timeRangeKey} />;
    }
    return <StaysListGuest onSignIn={() => navigate('SignIn')} />;
  }

  render() {
    const { selectedIndex } = this.state;
    const { user } = this.props;
    const isSignedIn = !!user.name;

    return (
      <View style={styles.container}>
        <View style={styles.segmentedControlContainer}>
          <SegmentedControlTab
            enabled={isSignedIn}
            values={['Past', 'Upcoming']}
            selectedIndex={selectedIndex}
            onTabPress={this.handleIndexChange}
          />
        </View>
        {this.renderStaysList(isSignedIn)}
      </View>
    );
  }
}

export const StaysWithQuery = withUserQuery(Stays);

Stays.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
