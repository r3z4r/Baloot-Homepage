import React from "react";
import DownArrow from "../../icons/down-arrow.svg";

import {Grid, makeStyles, Typography, Button} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import orange from "@material-ui/core/colors/orange";
import Video from "../../components/layout/UI/Video";
import FlowStep from "../../components/layout/UI/FlowStep";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		position: "relative",
		height: 450,
		margin: theme.spacing(6),
		"& img": {
			position: "absolute",
			right: 0,
			width: 400,
			height: 400,
		},
	},
	text: {margin: theme.spacing(6, 0)},
	list: {
		fontSize: 20,
		listStyle: "none",
		lineHeight: "3rem",
	},
	arrows: {
		display: "flex",
		flexDirection: "column-reverse",
		// position: "relative",
		alignItems: "center",
		"& svg": {
			position: "absolute",
			height: 40,
			left: "30vw",

			[theme.breakpoints.down("md")]: {
				left: "40vw",
			},
		},
		"& svg:nth-child(1)": {
			top: "calc(100% - 70px);",
			opacity: 0.21,
		},
	},

	container: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		flexGrow: 2,
		margin: theme.spacing(12, 6),
		"& #arrow": {
			height: 25,
		},
	},
}));

const bulletStyle = {
	fontSize: "20px",
	color: orange[800],
	marginLeft: 20,
};

function HomePage() {
	const classes = useStyles();
	return (
		<Grid container justify="center">
			<Grid item xs={12} lg={9}>
				<div className={classes.root}>
					<div className={classes.text}>
						<Typography variant="h4">
							بلوط پلی بین پس انداز و سرمایه گذاری
						</Typography>
						<ul className={classes.list}>
							<li>
								<FiberManualRecordIcon style={bulletStyle} />پس انداز بلوط با
								کمترین مبلغ
							</li>
							<li>
								<FiberManualRecordIcon style={bulletStyle} />شروع پس انداز فقط
								در عرض چند دقیقه
							</li>
							<li>
								<FiberManualRecordIcon style={bulletStyle} />پس انداز با هر
								تراکنش
							</li>
						</ul>
						<Button
							variant="contained"
							color="secondary"
							style={{padding: "15px 80px", margin: "20px 80px"}}>
							شروع کن
						</Button>
					</div>
					<div className={classes.image}>
						<img src="/images/Background Simple.png" alt="" />
						<img src="/images/startimg.png" alt="" />
					</div>
					<div className={classes.arrows}>
						<DownArrow />
						<DownArrow />
					</div>
				</div>
				<Grid container justify="center">
					<Typography variant="h5">چطوری باید شروع کنی؟</Typography>
				</Grid>
				<Grid container justify="center">
					<div className={classes.container}>
						<FlowStep img="/images/download.png" alt="download">
							دانلود اپلیکیشن بلوط
						</FlowStep>
						<img src="/images/arrow.png" alt="arrow" id="arrow" />
						<FlowStep img="/images/auth.png" alt="authenticate">
							دانلود اپلیکیشن بلوط
						</FlowStep>
						<img src="/images/arrow.png" alt="arrow" id="arrow" />
						<FlowStep img="/images/launch.png" alt="launch">
							دانلود اپلیکیشن بلوط
						</FlowStep>
						<Video
							title="چطوری باید شروع کنی؟"
							img="/images/5350.png"
							author="رضا"
						/>
					</div>
				</Grid>
				<Grid container justify="center">
					<Typography variant="h5">
						چه سرویس هایی از اپلیکشن بلوط میتونی بگیری؟
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
}
export default HomePage;
