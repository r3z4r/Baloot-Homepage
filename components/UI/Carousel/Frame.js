import React from "react";
import {
	makeStyles,
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActionArea,
} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: 360,
		margin: theme.spacing(1, 2),
	},
	media: {
		// height: 180,
	},
	content: {
		minHeight: 50,
	},
}));

const Frame = props => {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component="img"
					className={classes.media}
					image={props.imgURL}
					title={props.title}
				/>
				<CardContent className={classes.content}>
					<Typography variant="body1" component="p">
						{props.desc}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default Frame;

Frame.propTypes = {
	imgURL: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
	title: PropTypes.string,
};
