import React, { useState } from "react";
import { Box, Button, Tooltip, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  GAME_MODE_NORMAL,
  GAME_MODE_HARD,
  GAME_MODE_SURVIVAL,
  GAME_MODE_COMBO,
} from "../../../constants/Constants";

const PawIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    style={{ opacity: 0.5, marginRight: '4px' }}
  >
    <ellipse cx="12" cy="16" rx="5" ry="4" fill="#FF9800" />
    <ellipse cx="8" cy="10" rx="2" ry="2.5" fill="#FF9800" />
    <ellipse cx="16" cy="10" rx="2" ry="2.5" fill="#FF9800" />
    <ellipse cx="6" cy="13" rx="1.5" ry="2" fill="#FF9800" />
    <ellipse cx="18" cy="13" rx="1.5" ry="2" fill="#FF9800" />
  </svg>
);

const GameModeSelector = ({ gameMode, setGameMode, disabled }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (value) => {
    setGameMode(value);
    handleClose();
  };

  const modes = [
    {
      value: GAME_MODE_NORMAL,
      label: "Normal",
      tooltip: "Standard typing mode",
    },
    {
      value: GAME_MODE_HARD,
      label: "Hard",
      tooltip: "-1 second for every wrong type",
    },
    {
      value: GAME_MODE_SURVIVAL,
      label: "Survival",
      tooltip: "-2s per wrong word, +1s per correct word",
    },
    {
      value: GAME_MODE_COMBO,
      label: "Blast",
      tooltip: "+3s for 2 consecutive correct words, -1s for wrong word",
    },
    {
      value: "QWERTY",
      label: "QWERTY",
      tooltip: "Practice touch typing on the keyboard",
    },
  ];

  const currentMode = modes.find(m => m.value === gameMode) || modes[0];

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Tooltip title="Select game mode">
        <Button
          id="mode-select-button"
          aria-controls={open ? 'mode-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="outlined"
          onClick={handleClick}
          disabled={disabled}
          endIcon={<KeyboardArrowDownIcon />}
          startIcon={<PawIcon />}
          sx={{
            minWidth: "150px",
            fontSize: { xs: "0.75rem", sm: "0.85rem" },
            padding: "6px 16px",
            borderRadius: "20px",
            borderColor: "rgba(255, 152, 0, 0.5)",
            color: "#FF9800",
            '&:hover': {
              borderColor: "#FF9800",
              backgroundColor: "rgba(255, 152, 0, 0.04)",
            }
          }}
        >
          {currentMode.label} Mode
        </Button>
      </Tooltip>
      <Menu
        id="mode-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'mode-select-button',
        }}
        PaperProps={{
          sx: {
            mt: 1,
            backgroundColor: "#1e1e1e",
            color: "#fff",
            border: "1px solid rgba(255, 152, 0, 0.3)",
            '& .MuiMenuItem-root': {
              fontSize: "0.85rem",
              '&:hover': {
                backgroundColor: "rgba(255, 152, 0, 0.1)",
              },
              '&.Mui-selected': {
                backgroundColor: "rgba(255, 152, 0, 0.2)",
                '&:hover': {
                  backgroundColor: "rgba(255, 152, 0, 0.3)",
                }
              }
            }
          }
        }}
      >
        {modes.map((mode) => (
          <Tooltip key={mode.value} title={mode.tooltip} placement="right">
            <MenuItem 
              selected={gameMode === mode.value}
              onClick={() => handleSelect(mode.value)}
            >
              {mode.label}
            </MenuItem>
          </Tooltip>
        ))}
      </Menu>
    </Box>
  );
};

export default GameModeSelector;
