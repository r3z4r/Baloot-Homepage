import React from "react";
import {makeStyles, Hidden} from "@material-ui/core";

const useStyle = makeStyles(theme => ({
	root: {
		height: 360,
		display: "flex",
		alignItems: "center",
		transform: "scale(0.8)",
		marginLeft: "-50vw",
		boxSizing: "border-box",
	},
}));

const Ellipse = () => {
	const classes = useStyle();
	return (
		<div className={classes.root}>
			<img src="/images/homepage/Ellipse.png" alt="Ellipse" />
			<img src="/images/homepage/investment.png" alt="investment" />
		</div>
	);
};

export default Ellipse;
