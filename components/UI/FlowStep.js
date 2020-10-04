import React from "react";
import {makeStyles, FormHelperText} from "@material-ui/core";

const useStyle = makeStyles(theme => ({
	root: {
		display: "flex",
		// width: 100,
		flexDirection: "column",
		margin: theme.spacing(8, 8, 2, 4),
		alignItems: "center",
		justifyContent: "space-around",
		"& p": {
			fontSize: 16,
		},
	},
}));

const FlowStep = props => {
	const classes = useStyle();
	return (
		<div className={classes.root}>
			<img src={props.img} alt={props.alt} width="70%" />
			<p>
				{props.children}
			</p>
		</div>
	);
};

export default FlowStep;
