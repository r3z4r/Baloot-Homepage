import React from "react";
import {
	GridListTile,
	GridListTileBar,
	IconButton,
	makeStyles,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		width: 360,
		height: 240,
		listStyle: "none",
	},
	icon: {
		color: "rgba(255, 255, 255, 0.54)",
	},
}));

export default props => {
	const classes = useStyles();
	return (
		<GridListTile key={props.img} className={classes.gridList}>
			<img src={props.img} alt={props.title} />
			<GridListTileBar
				title={props.title}
				subtitle={
					<span>
						توسط : {props.author}
					</span>
				}
				actionIcon={
					<IconButton className={classes.icon}>
						<PlayArrowIcon />
					</IconButton>
				}
			/>
		</GridListTile>
	);
};
