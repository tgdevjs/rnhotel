/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { ApolloProvider } from "react-apollo";

import { client, restoreCache } from "./apollo";
import Navigation from "./Navigation";

export default class App extends React.Component {
  state = { isSetupComplete: false };

  async componentDidMount() {
    await restoreCache();
    this.setState({ isSetupComplete: true });
  }

  render() {
    const { isSetupComplete } = this.state;

    if (!isSetupComplete) return null;
    return (
      <ApolloProvider client={client}>
        <Navigation />
      </ApolloProvider>
    );
  }
}
