/*global window*/

import React, { PropTypes } from "react/addons";
import tweenState from "react-tween-state";
import Base from "./base";
import Transitions from "./transitions";
import config from "../presentation/config";
import radium from "radium";

const Slide = React.createClass({
  displayName: "Slide",
  mixins: [tweenState.Mixin, Base.Mixin, Transitions],
  getDefaultProps() {
    return {
      align: "center center",
      presenterStyle: {}
    };
  },
  propTypes: {
    align: PropTypes.string,
    presenterStyle: PropTypes.object,
    children: PropTypes.node,
    notes: PropTypes.string,
    slideIndex: PropTypes.number,
    lastSlide: PropTypes.number,
    header: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
  },
  contextTypes: {
    styles: PropTypes.object,
    export: PropTypes.bool,
    print: PropTypes.bool,
    overview: PropTypes.bool,
    flux: PropTypes.object
  },
  getInitialState() {
    return {
      zoom: 1,
      contentScale: 1
    };
  },
  setZoom() {
    const content = React.findDOMNode(this.refs.content);
    const zoom = (content.offsetWidth / config.width);
    const contentScaleY = (content.parentNode.offsetHeight / config.height);
    const contentScaleX = (content.parentNode.offsetWidth / config.width);
    const contentScale = Math.min(contentScaleY, contentScaleX);
    this.setState({
      zoom: zoom > 0.6 ? zoom : 0.6,
      contentScale: contentScale < 1 ? contentScale : 1
    });
  },
  componentDidMount() {
    this.setZoom();
    const slide = React.findDOMNode(this.refs.slide);
    const frags = slide.querySelectorAll(".fragment");
    if (frags && frags.length) {
      Array.prototype.slice.call(frags, 0).forEach((frag, i) => {
        frag.dataset.fid = i;
        this.context.flux.actions.SlideActions.addFragment({
          slide: this.props.slideIndex,
          id: i,
          visible: this.props.lastSlide > this.props.slideIndex
        });
      });
    }
    window.addEventListener("load", this.setZoom);
    window.addEventListener("resize", this.setZoom);
  },
  componentWillUnmount() {
    window.removeEventListener("resize", this.setZoom);
  },
  render() {
    const printStyles = this.context.print ? {
      backgroundColor: "white",
      backgroundImage: "none"
    } : {};
    const styles = {
      outer: {
        position: this.context.export ? "relative" : "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex"
      },
      inner: {
        display: "flex",
        position: "relative",
        flex: 1,
        alignItems: this.props.align ? this.props.align.split(" ")[1] : "center",
        justifyContent: this.props.align ? this.props.align.split(" ")[0] : "center"
      },
      content: {
        flex: 1,
        position: "absolute",
        top: "50%",
        left: "50%",
        maxHeight: config.height,
        width: config.width,
        fontSize: 16 * this.state.zoom,
        transform: " translate(-50%,-50%) scale(" + this.state.contentScale + ")",
        padding: 0
      },
      header: {
        position: 'absolute',
        top: -272,
        right: 70,
        fontSize: 50
      }
    };
    return (
      <div className="spectacle-slide"
        ref="slide"
        style={[
          styles.outer,
          this.getStyles(),
          this.getTransitionStyles(),
          printStyles,
          this.props.presenterStyle]}>
        <div style={[styles.inner]}>
          <div ref="content"
            className="spectacle-content"
            style={[styles.content, this.context.styles.components.content]}>
            <div style={styles.header}>{this.props.header}</div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

export default radium(Slide);
