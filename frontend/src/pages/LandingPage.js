import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link as routerLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import "./LandingPage.css";
import mockupImg from "../static/images/mockup_blue.png";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		background:
			"linear-gradient(90deg, rgba(164, 174, 223, 1) 9%, rgba(255, 112, 160, 1) 100%)",
	},
}));

function LandingPage() {
	const classes = useStyles();
	return (
		<Grid container className={classes.root}>
			<Grid
				className="LandingPage__mainText"
				container
				item
				xs={12}
				md={7}
				direction="column"
				justify="center"
				alignItems="flex-start"
			>
				<Box fontWeight={300} pl={5} textAlign="left" py={3} mr={2}>
					<Typography
						variant="h3"
						style={{ fontWeight: "200", color: "3f51b5" }}
					>
						Create your digital business card with OneLink
					</Typography>
				</Box>
				<Box pl={5} pb={4} mr={2} textAlign="left">
					<Typography variant="h6">
						All the ways your clients can contact you, in one link
					</Typography>
				</Box>
				<Box display="flex" flexDirection="row" pb={3} alignSelf="center">
					<Button
						variant="contained"
						color="secondary"
						size="large"
						style={{
							margin: "0 .5rem",
						}}
						href="https://www.linkedin.com/feed/update/urn:li:activity:6761314380282920961/"
					>
						Watch Demo
					</Button>
					<Button
						variant="contained"
						color="primary"
						size="large"
						style={{ margin: "0 .5rem" }}
						component={routerLink}
						to="/signup"
					>
						Start Now
					</Button>
				</Box>
			</Grid>
			<Grid
				className="LandingPage__imageContainer"
				container
				item
				xs={12}
				md={5}
				direction="column"
				justify="center"
				alignItems="center"
			>
				<Box
					display="flex"
					style={{ height: "100%" }}
					justifyContent="center"
					alignItems="center"
				>
					<img src={mockupImg} alt="mockup" style={{ height: "92%" }} />
				</Box>
			</Grid>
		</Grid>
	);
}

export default LandingPage;
