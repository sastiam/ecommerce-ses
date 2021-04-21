import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Router, Location } from "@reach/router";
import "../../index.scss";

const TransitionRouter = ({ children }) => (
	<Location>
		{({ location }) => (
			<TransitionGroup>
				<CSSTransition key={location.key} classNames="fade" unmountOnExit timeout={300}>
					<Router location={location}>{children}</Router>
				</CSSTransition>
			</TransitionGroup>
		)}
	</Location>
);

export default TransitionRouter;