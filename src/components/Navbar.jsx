import {
  AppBar,
  styled,
  Typography,
  Toolbar,
  Box,
  InputBase,
  Badge,
} from "@mui/material";
import { Mail } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";

import React from "react";
import { Notifications } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
          MUI-REACT
        </Typography>
        <CodeIcon sx={{ display: { xs: "block", sm: "none" } }}></CodeIcon>
        <Search>
          <InputBase placeholder='Search...' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color='error'>
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://avatars.githubusercontent.com/u/13625714?s=40&v=4'
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://avatars.githubusercontent.com/u/13625714?s=40&v=4'
          />
          <Typography variant='span'>Ben</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
