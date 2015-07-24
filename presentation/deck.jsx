import React from "react/addons";

import {
 Deck, Heading, Slide,
} from "../src/spectacle";

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Hello
          </Heading>
          <Heading size={1} fit caps margin="-20px 0px">
            My name is Jem.
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            I do
          </Heading>
          <Heading size={1} fit caps margin="-20px 0px">
            The Javascripts
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
