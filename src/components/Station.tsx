import React from "react";
import { RouteComponentProps, match } from "react-router-dom";
import * as H from "history";

interface MatchParams {
  destination: string;
}

export interface MatchProps extends RouteComponentProps<MatchParams> {}

export interface RouteComponentProps<P> {
  match: match<P>;
  location: H.Location;
  history: H.History;
  staticContext?: any;
}

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

const Station: React.FC<RouteComponentProps> = ({ match }) => {
  return <div>{match}</div>;
};

export default Station;
