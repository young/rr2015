import React from "react/addons";

import {
 Deck, Heading, Slide, CodePane, Fill, Fit
} from "../src/spectacle";

import {Layout as Row} from '../src/spectacle';

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Hello
          </Heading>
          <Heading size={1} fit caps margin="-20px 0px">
            My name is Jem.
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit margin="-20px 0px">
            let & const
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <CodePane
            lang='javascript'
            source={require("raw!./code/let_const/0.example")} size={1} fit
            margin="-20px 0px"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">

          <Row>
          <Fit margin={20}>
            <Heading>
              let
            </Heading>
          </Fit>
          </Row>
          <Row>

            <Fill>
              <CodePane
                lang='javascript'
                source={require("raw!./code/let_const/0.example")}
                padding='0px 20px'
                margin='0'
                />
            </Fill>
            <Fill style={{float: 'right'}}>
              <CodePane
                lang='javascript'
                source={require("raw!./code/let_const/1.example")}
                />
            </Fill>
          </Row>
        </Slide>
      </Deck>
    );
  }
}
