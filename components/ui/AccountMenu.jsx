"use client";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import IconButton from "@mui/material/IconButton";

import Tooltip from "@mui/material/Tooltip";

import { BaggageClaim, Ban, LogOut, User } from "lucide-react";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/AuthSlice";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <User />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <div className="flex gap-2">
            <User size={20} /> My Account
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className="flex gap-2">
            <BaggageClaim size={20} />
            My Order
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className="flex gap-2">
            <Ban size={20} />
            Cancellations
          </div>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <div onClick={handleLogout} className="flex gap-2">
            <LogOut size={20} />
            Logout
          </div>
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
