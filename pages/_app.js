import App, { Container } from "next/app";
import Page from "../components/Page";

class MyApp extends App {
  render() {
    this.state = {};

    const { Component } = this.props;
    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    );
  }
}

export default MyApp;
