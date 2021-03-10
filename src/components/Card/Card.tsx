import React, { FunctionComponent, ReactChildren } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "./../../assets/jss/material-dashboard-react/components/cardStyle";

const useStyles = makeStyles(styles);

type Props = {
	className?: string;
	plain?: boolean;
	profile?: boolean;
	chart?: boolean;
	children?: ReactChildren;
};

const Card: FunctionComponent<Props> = (props: Props) => {
	const classes = useStyles();
	const { className, children, plain, profile, chart, ...rest } = props;
	const cardClasses: string = classNames({
		card: true,
		cardPlain: plain,
		cardProfile: profile,
		cardChart: chart,
		className: className !== undefined,
	});
	return (
		<div className={cardClasses} {...rest}>
			{children}
		</div>
	);
};

export default Card;
