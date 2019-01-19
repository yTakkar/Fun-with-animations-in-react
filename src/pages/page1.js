import React from "react";
import { Transition, animated } from "react-spring";

import First from "../components/first";
import Second from "../components/second";
import Third from "../components/third";

import Transitions from "../components/Transitions";

export default class Page1 extends React.Component {
  state = {
    showThird: false
  };

  toggle = () => {
    this.setState({ showThird: !this.state.showThird });
  };

  render() {
    return (
      <div>
        <Transitions />
        <First />
        <Second toggle={this.toggle} />
        <Transition
          items={this.state.showThird}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <Third />
              </animated.div>
            ))
          }
        </Transition>
      </div>
    );
  }
}
