import React from "react";
import {Grid, makeStyles, Typography, Button, Paper} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import orange from "@material-ui/core/colors/orange";

import Video from "../../components/UI/Video";
import FlowStep from "../../components/UI/FlowStep";
import Ellipse from "../../components/UI/Ellipse";
import MUIAccordion from "../../components/UI/MUIAccordion";
import DownArrow from "../../icons/down-arrow.svg";
import Carousel from "../../components/UI/Carousel";

const useStyles = makeStyles(theme => ({
	root: {
		margin: theme.spacing(0, 12),
	},

	button: {
		marginTop: 28,
		padding: 6,
		width: 200,
		fontSize: 18,
		borderRadius: 10,
	},

	text: {margin: theme.spacing(6, 0)},

	list: {
		fontSize: 20,
		marginLeft: theme.spacing(-4),
		listStyle: "none",
		lineHeight: "3rem",
	},

	arrows: {
		display: "flex",
		flexDirection: "column-reverse",
		alignItems: "center",
		"& svg": {
			position: "absolute",
			height: 40,
			left: "37vw",

			[theme.breakpoints.down("md")]: {
				left: "33vw",
			},
		},
		"& svg:nth-child(1)": {
			top: "calc(100% - 70px);",
			opacity: 0.21,
		},
	},

	container0: {
		display: "flex",
		position: "relative",
		height: 450,
		margin: theme.spacing(6, 16),
		"& img": {
			position: "absolute",
			right: 20,
			width: "40%",
			maxWidth: 500,
		},
		"& img:nth-child(2)": {
			right: 0,
			top: 30,
			width: "38%",
		},
		"& img:nth-child(3)": {
			width: "4.5%",
			maxWidth: 50,
			top: 40,
			right: "25%",
		},
		"& img:nth-child(4)": {
			width: "5%",
			maxWidth: 60,
			top: "18vw",
			right: "5%",
		},
	},

	container1: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		flexGrow: 2,
		margin: theme.spacing(4, 16, 16),
		"& #arrow": {
			height: 25,
		},
	},

	container2: {
		display: "flex",
		justifyContent: "flex-end",
		margin: theme.spacing(10, 4),
		height: 400,
		"& #app": {
			marginLeft: 26,
		},
		"& #desc": {
			margin: theme.spacing(6, 8),
			maxWidth: "50ch",
		},
	},

	container3: {
		display: "flex",
		height: 550,
		width: "100vw",
		borderRadius: 15,
		backgroundColor: "#f4f4f4",
		margin: theme.spacing(6, 2),
		padding: theme.spacing(6, 0, 10, 0),
		justifyContent: "space-around",
		alignItems: "center",
	},

	container4: {
		width: "70vw",
		borderRadius: 15,
		marginTop: theme.spacing(-14),
		padding: theme.spacing(2),
		[theme.breakpoints.down("sm")]: {
			width: "90vw",
		},
	},

	container5: {
		width: "97vw",
		borderRadius: 15,
		backgroundColor: "#f4f4f4",
		margin: theme.spacing(6, 2),
		padding: theme.spacing(8),
		"& .swiper-button-next, .swiper-button-prev": {
			color: theme.palette.primary.main,
			backgroundColor: theme.palette.pagination.main,
			padding: theme.spacing(4),
			borderRadius: 20,
		},
	},
	carouselHeader: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
}));

const bulletStyle = {
	fontSize: "20px",
	color: orange[800],
	marginLeft: 20,
};

const expandIconStyles = {fontSize: 40};

function HomePage() {
	const classes = useStyles();
	return (
		<Grid container justify="center">
			<Grid item xs={12} className={classes.root}>
				<div className={classes.container0}>
					<div className={classes.text}>
						<Typography variant="h4">
							بلوط پلی بین پس انداز و سرمایه گذاری
						</Typography>
						<ul className={classes.list}>
							{[
								"پس انداز بلوط با کمترین مبلغ",
								"شروع پس انداز فقط در عرض چند دقیقه",
								"پس انداز با هر تراکنش",
							].map(listItem =>
								<li>
									<FiberManualRecordIcon style={bulletStyle} />
									{listItem}
								</li>
							)}
						</ul>
						<Button
							variant="contained"
							color="secondary"
							size="large"
							className={classes.button}>
							شروع کن
						</Button>
					</div>
					<div className={classes.image}>
						<img src="/images/homepage/Background Simple.png" alt="" />
						<img src="/images/homepage/startimg.png" alt="" />
						<img src="/images/homepage/squirrel.png" alt="" width="5%" />
						<img src="/images/homepage/squirrel.png" alt="" width="5%" />
					</div>
					<div className={classes.arrows}>
						<DownArrow />
						<DownArrow />
					</div>
				</div>
				<Grid container justify="center">
					<Typography variant="h4">چطوری باید شروع کنی؟</Typography>
				</Grid>
				<Grid container justify="center">
					<div className={classes.container1}>
						<FlowStep img="/images/homepage/download.png" alt="download">
							دانلود اپلیکیشن بلوط
						</FlowStep>
						<img src="/images/homepage/arrow.png" alt="arrow" id="arrow" />
						<FlowStep img="/images/homepage/auth.png" alt="authenticate">
							دانلود اپلیکیشن بلوط
						</FlowStep>
						<img src="/images/homepage/arrow.png" alt="arrow" id="arrow" />
						<FlowStep img="/images/homepage/launch.png" alt="launch">
							دانلود اپلیکیشن بلوط
						</FlowStep>
						<Video
							title="چطوری باید شروع کنی؟"
							img="/images/homepage/movieThumb.png"
							author="رضا"
						/>
					</div>
				</Grid>
				<Grid container justify="center">
					<Typography variant="h4">
						چه سرویس هایی از اپلیکشن بلوط میتونی بگیری؟
					</Typography>
				</Grid>
				<Grid container justify="center" style={{overflow: "hidden"}}>
					<div className={classes.container2}>
						<Ellipse />
						<img
							id="app"
							src="/images/homepage/mobileapp.png"
							alt="mobile app"
							height="100%"
						/>
						<div id="desc">
							<Typography gutterBottom variant="h4">
								سرمایه گذاری
							</Typography>
							<Typography paragraph variant="h5">
								با توجه به تیپ شخصیتون و نیازی که از سرمایه گذاری و پس انداز
								دارید، ما بهتون کمک می کنیم مناسب ترین سبد را بچینید و سرمایه
								تون رو برای بلند مدت رشد بدید
							</Typography>
							<Button
								className={classes.button}
								variant="contained"
								color="primary">
								دریافت اپلیکیشن بلوط
							</Button>
						</div>
					</div>
				</Grid>
				<Grid container justify="center">
					<Paper className={classes.container3} elevation={0}>
						<div className={classes.text}>
							<Typography variant="h4">چرا بلوط؟</Typography>
							<ul className={classes.list}>
								{[
									"تیمی از متخصصین",
									"شفافیت در عملکرد",
									"استفاده راحت برای همه",
									"امینت داشتن",
								].map(listItem =>
									<li>
										<FiberManualRecordIcon style={bulletStyle} />
										{listItem}
									</li>
								)}
							</ul>
							<Button
								variant="contained"
								className={classes.button}
								style={{
									backgroundColor: "#f9d976",
								}}>
								ما را بیشتر بشناسید
							</Button>
						</div>
						<img src="/images/homepage/chart.png" alt="chart" height="60%" />
					</Paper>
					<Paper elevation={3} className={classes.container4}>
						<Typography variant="h4" align="center">
							سئوالات متداول
						</Typography>
						<MUIAccordion />
						<Button
							color="primary"
							variant="outlined"
							style={{
								display: "flex",
								border: "2px dashed",
								borderRadius: 25,
								marginRight: "auto",
								marginLeft: "auto",
							}}
							className={classes.button}>
							مشاهده بیشتر
						</Button>
					</Paper>
					<Paper className={classes.container5} elevation={0}>
						<div className={classes.carouselHeader}>
							<Typography id="title" variant="h4">
								آموزش با مقاله
							</Typography>
							<Button
								color="primary"
								size="small"
								className={classes.button}
								endIcon={
									<ArrowRightAltIcon
										color="primary"
										style={{transform: "rotate(180deg)"}}
									/>
								}>
								مشاهده بیشتر
							</Button>
						</div>
						<br />
						<Carousel slidesPerView={4} />
					</Paper>
					<Grid item xs={10}>
						<Typography variant="h4">همکاران بلوط چه کسانی هستند؟</Typography>
					</Grid>
					<Grid item xs={8}>
						<img
							src="/images/homepage/coworkers.png"
							alt="coworkers"
							width="100%"
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
export default HomePage;
