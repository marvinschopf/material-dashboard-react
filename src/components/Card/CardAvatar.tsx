import React, { FunctionComponent, ReactChildren } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components

import styles from "./../../assets/jss/material-dashboard-react/components/cardAvatarStyle";

const useStyles = makeStyles(styles);

type Props = {
	children: ReactChildren;
	className?: string;
	profile?: boolean;
	plain?: boolean;
};

const CardAvatar: FunctionComponent<Props> = (props: Props) => {
	const classes: Record<
		"cardAvatar" | "cardAvatarProfile" | "cardAvatarPlain",
		string
	> = useStyles();
	const { children, className, plain, profile, ...rest } = props;
	const cardAvatarClasses: string = classNames({
		cardAvatar: true,
		cardAvatarProfile: profile,
		cardAvatarPlain: plain,
		className: className !== undefined,
	});
	return (
		<div className={cardAvatarClasses} {...rest}>
			{children}
		</div>
	);
};

export default CardAvatar;
