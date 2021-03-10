import { Theme } from "@material-ui/core";
import { Styles } from "@material-ui/core/styles/withStyles";
import {
	defaultFont,
	container,
	primaryColor,
	grayColor,
} from "./../../material-dashboard-react";

const footerStyle: Styles<
	Theme,
	{},
	| "block"
	| "left"
	| "right"
	| "footer"
	| "container"
	| "a"
	| "list"
	| "inlineBlock"
> = {
	block: {
		color: "inherit",
		padding: "15px",
		textTransform: "uppercase",
		borderRadius: "3px",
		textDecoration: "none",
		position: "relative",
		display: "block",
		...defaultFont,
		fontWeight: 500,
		fontSize: "12px",
	},
	left: {
		float: "left",
		display: "block",
	},
	right: {
		padding: "15px 0",
		margin: "0",
		fontSize: "14px",
		float: "right",
	},
	footer: {
		bottom: "0",
		borderTop: "1px solid " + grayColor[11],
		padding: "15px 0",
		...defaultFont,
	},
	container,
	a: {
		color: primaryColor[0],
		textDecoration: "none",
		backgroundColor: "transparent",
	},
	list: {
		marginBottom: "0",
		padding: "0",
		marginTop: "0",
	},
	inlineBlock: {
		display: "inline-block",
		padding: "0px",
		width: "auto",
	},
};
export default footerStyle;
