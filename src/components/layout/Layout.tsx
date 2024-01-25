import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Link, Outlet } from 'react-router-dom';
// rfce
// Alt + Shift + O kullanılmayan kodları temizler

// emotinal styled component sample
const MyFooter = styled.footer`
	position: fixed;
	width: 100vw;
	font-size: 1em;
	padding: 0.25em 1em;
	background-color: #bf4f74;
	bottom: 0;
	text-align: center;
	color: white;
`;

function Layout() {
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<Link to="/">
							<MenuIcon />
						</Link>
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<Button variant="text">
							<Link
								style={{ textDecoration: 'none', color: 'whitesmoke' }}
								to="/demo"
							>
								Demo
							</Link>{' '}
						</Button>
						<Button variant="text">
							<Link
								style={{ textDecoration: 'none', color: 'whitesmoke' }}
								to="/useEffectDemo"
							>
								UseEffect Demo
							</Link>
						</Button>

						<Button variant="text">
							<Link
								style={{ textDecoration: 'none', color: 'whitesmoke' }}
								to="/useEffectDemoAsync"
							>
								useEffectDemoAsync Demo
							</Link>
						</Button>

						{/* <a href="/demo">Demo Href</a> */}
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
			<Grid2 container spacing={2} sx={{ padding: '1rem' }}>
				<Grid2 xs={12}>
					<Outlet />
				</Grid2>

				{/* dinamik içerik */}
			</Grid2>
			<MyFooter>
				<p>Alt Bilgi</p>
			</MyFooter>
		</div>
	);
}

export default Layout;
