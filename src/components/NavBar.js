import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { getPage } from "../slices/navbarSlice";
import { logoutUser } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";
import { getLoginStatus } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import api from "../api/api";

const NavBar = () => {
    const pages = ["Explore", "Search", "Add Story"];
    const links = ["/", "/search", "/addStory"];
    const settings = ["Profile", "Account", "Dashboard", "Logout"];
    const [isOpen, setOpen] = React.useState(false);

    const dispatch = useDispatch();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const crrPage = useSelector(getPage);
    const isLoggedIn = useSelector(getLoginStatus);

    const navigate = useNavigate();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleLogout = async (e) => {
        try {
            const res = await api.get("/user/logout");
            if (res.status === 200) {
                dispatch(logoutUser());
                navigate("/");
            }
        }
        catch (error) {
            console.error(error);
        }
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    return (
        <>
            <AppBar position="static" color="secondary">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleDrawerOpen}
                                color="black"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

                        <Typography
                            href="#app-bar-with-responsive-menu"
                            color="black"
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: '"Dosis", sans-serif',
                                fontWeight: 500,
                                fontSize: "30px",
                                textDecoration: "none",
                            }}
                        >
                            Twisted Tales
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent={"center"}
                            spacing={7}
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {pages.map((page, index) => (
                                <Button
                                    key={page}
                                    onClick={() => navigate(links[index])}
                                    sx={{
                                        my: 2,
                                        color:
                                            crrPage === page.toLowerCase()
                                                ? "primary"
                                                : "black",
                                        display: "block",
                                        fontFamily: '"Dosis", sans-serif',
                                        textTransform: "none",
                                        fontSize: "18px",
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Stack>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/2.jpg"
                                    />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => {
                                    if (setting !== "Logout") {
                                        return (
                                            <MenuItem
                                                key={setting}
                                                onClick={handleCloseUserMenu}
                                            >
                                                <Typography textAlign="center">
                                                    {setting}
                                                </Typography>
                                            </MenuItem>
                                        );
                                    }
                                    else if (setting === "Logout" && isLoggedIn) {
                                        return (
                                            <MenuItem
                                                key={setting}
                                                onClick={handleLogout}
                                            >
                                                <Typography textAlign="center">
                                                    {setting}
                                                </Typography>
                                            </MenuItem>
                                        );
                                    }
                                    return null;
                                })}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Sidebar
                isOpen={isOpen}
                setOpen={setOpen}
                pages={pages}
                links={links}
            />
        </>
    );
};

export default NavBar;
