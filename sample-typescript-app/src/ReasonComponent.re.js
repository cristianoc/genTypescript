/* @flow strict */

const ReasonComponentBS = require("./ReasonComponent.bs");
const ReasonReact = require("reason-react/src/ReasonReact.js");

import type {Component as ReactComponent} from 'React';
import type {actionless as ReasonReactactionless} from './ReasonReact.re';
import type {component as ReasonReactcomponent} from './ReasonReact.re';
import type {noRetainedProps as ReasonReactnoRetainedProps} from './ReasonReact.re';
import type {stateless as ReasonReactstateless} from './ReasonReact.re';
export type Props = {|message?:string, children?:any|};
const component = ReasonReact.wrapReasonForJs(
  ReasonComponentBS.component,
  (function _(jsProps: Props) {
     return ReasonComponentBS.make(jsProps.message, jsProps.children);
  }));

exports.component = (component: React$ComponentType<Props>);