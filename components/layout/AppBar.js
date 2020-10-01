import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from "../Link";
import Baloot from "../../icons/baloot-logo.svg";
import customTheme from "./theme";
import List from "@material-ui/core/List";
import ListItem, {ListItemProps} from "@material-ui/core/ListItem";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		"& .MuiAppBar-root": {
			padding: theme.spacing(2, 1),
		},
		"& .MuiListItem-root": {
			display: "inline",
			margin: theme.spacing(2),
			padding: "38px 0",
			fontSize: 24,
		},
		"& .MuiLink-underlineHover:hover": {
			textDecoration: "none",
			background: customTheme.palette.background.default,
		},
		"& .MuiList-root": {
			margin: theme.spacing(0, 5),
		},
		"& .Mui-selected": {
			borderBottom: `5px solid ${customTheme.palette.primary.main}`,
			background: customTheme.palette.background.default,
		},
		"& .MuiListItem-button:hover": {
			background: customTheme.palette.background.default,
		},
	},
	appBar: {
		display: "flex",
		alignItems: "center",
		flexGrow: 1,
		"& a": {
			color: customTheme.palette.text.main,
		},
	},
	title: {
		flexGrow: 1,
	},
}));

export default function LayoutAppBar() {
	const classes = useStyles({});
	const [selectedIndex, setSelectedIndex] = React.useState(1);

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};
	return (
		<div className={classes.root}>
			<AppBar position="static" color={"transparent"}>
				<Toolbar>
					<div className={classes.appBar}>
						<Baloot />
						<List component="nav" aria-label="main mailbox folders">
							<ListItem
								button
								selected={selectedIndex === 0}
								onClick={event => handleListItemClick(event, 0)}>
								<Link href={"/home/HomePage"}>صفحه اصلی</Link>
							</ListItem>
							<ListItem
								button
								selected={selectedIndex === 1}
								onClick={event => handleListItemClick(event, 1)}>
								<Link href={"/home/HomePage"}>پس انداز</Link>
							</ListItem>
							<ListItem
								button
								selected={selectedIndex === 2}
								onClick={event => handleListItemClick(event, 2)}>
								<Link href={"/home/HomePage"}>سرمایه گذاری</Link>
							</ListItem>
							<ListItem
								button
								selected={selectedIndex === 3}
								onClick={event => handleListItemClick(event, 3)}>
								<Link href={"/home/HomePage"}>آموزش</Link>
							</ListItem>
							<ListItem
								button
								selected={selectedIndex === 4}
								onClick={event => handleListItemClick(event, 4)}>
								<Link href={"/home/HomePage"}>درباره بلوط</Link>
							</ListItem>
						</List>
					</div>
					<Button variant="contained" color="secondary">
						دریافت اپلیکیشن بلوط
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
