import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import ArticleIcon from "@mui/icons-material/Article";
import image from "./assets/bg.jpg";
import "./App.css";
import Landing from "./landing";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// const pages = ["Dashboard", "Logout"];

// const ResponsiveAppBar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   const names = [];
//   for (let i = 0; i < 10; i++) {
//     names.push(
//       <div
//         style={{
//           justifyContent: "space-around",
//           display: "flex",
//           border: "1px solid rgba(0, 0, 0, 0.05)",
//         }}
//       >
//         <ArticleIcon />
//         <span sx={{ marginTop: 5, marginBottom: 5 }}>Report Type:</span>
//         <span>Date:</span>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div
//         style={{
//           backgroundImage: `url(${image})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//         }}
//       >
//         <AppBar position="static">
//           <Container maxWidth="xl">
//             <Toolbar disableGutters>
//               <Typography
//                 variant="h6"
//                 noWrap
//                 component="div"
//                 sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
//               >
//                 LOGO
//               </Typography>

//               <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//                 <IconButton
//                   size="large"
//                   aria-label="account of current user"
//                   aria-controls="menu-appbar"
//                   aria-haspopup="true"
//                   onClick={handleOpenNavMenu}
//                   color="inherit"
//                 >
//                   <MenuIcon />
//                 </IconButton>
//                 <Menu
//                   id="menu-appbar"
//                   anchorEl={anchorElNav}
//                   anchorOrigin={{
//                     vertical: "bottom",
//                     horizontal: "left",
//                   }}
//                   keepMounted
//                   transformOrigin={{
//                     vertical: "top",
//                     horizontal: "left",
//                   }}
//                   open={Boolean(anchorElNav)}
//                   onClose={handleCloseNavMenu}
//                   sx={{
//                     display: { xs: "block", md: "none" },
//                   }}
//                 >
//                   {pages.map((page) => (
//                     <MenuItem key={page} onClick={handleCloseNavMenu}>
//                       <Typography textAlign="center">{page}</Typography>
//                     </MenuItem>
//                   ))}
//                 </Menu>
//               </Box>
//               <Typography
//                 variant="h6"
//                 noWrap
//                 component="div"
//                 sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
//               >
//                 Logo
//               </Typography>
//               <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//                 {pages.map((page) => (
//                   <Button
//                     key={page}
//                     onClick={handleCloseNavMenu}
//                     sx={{ my: 2, color: "white", display: "block" }}
//                   >
//                     {page}
//                   </Button>
//                 ))}
//               </Box>
//             </Toolbar>
//           </Container>
//         </AppBar>
//         <div className="paragraph-text">
//           Name: xyz<br></br>Wallet Address: xyz
//         </div>
//         <div>
//           <Box
//             sx={{
//               width: "75%",
//               marginX: "auto",
//               marginTop: 10,
//               marginBottom: 10,
//               opacity: 0.9,
//               border: "3px solid rgba(0, 0, 0, 1)",
//             }}
//           >
//             <Stack spacing={2}>
//               <Item>
//                 <div>
//                   {names.map((name) => (
//                     <ul>
//                       {name}
//                       <br></br>
//                     </ul>
//                   ))}
//                 </div>
//               </Item>
//             </Stack>
//           </Box>
//         </div>
//       </div>
//       <Item></Item>
//     </>
//   );
// };
// export default ResponsiveAppBar;

const App = () => {
  return <Landing />;
};

export default App;
