import React from "react";
import styled from "styled-components";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Divider } from "@mui/material";

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    border-radius: 16px;
    border: 2px solid ${({ theme }) => theme.stats};
    max-width: 600px;
  }
`;

const StyledTitle = styled(DialogTitle)`
  color: ${({ theme }) => theme.title};
  font-weight: bold;
  text-align: center;
  font-size: 1.8rem !important;
  letter-spacing: 2px;
`;

const SectionTitle = styled(Typography)`
  color: ${({ theme }) => theme.stats};
  font-weight: bold !important;
  margin-top: 16px !important;
  margin-bottom: 8px !important;
  font-size: 1.1rem !important;
`;

const ModeItem = styled(Box)`
  margin-bottom: 12px;
  padding-left: 8px;
  border-left: 3px solid ${({ theme }) => theme.stats}44;
`;

const GameGuide = ({ open, onClose }) => {
  return (
    <StyledDialog open={open} onClose={onClose} scroll="paper">
      <StyledTitle>𝐀𝐓𝐓𝐄𝐍𝐓𝐈𝐎𝐍!!!</StyledTitle>
      <DialogContent dividers>
        <SectionTitle variant="h6">𝐒𝐩𝐞𝐜𝐢𝐚𝐥 𝐌𝐨𝐝𝐞</SectionTitle>

        <ModeItem>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>𝐁𝐥𝐚𝐬𝐭 𝐌𝐨𝐝𝐞:</Typography>
          <Typography variant="body2">
            Focus on maintaining accuracy streaks!<br/>
            • Every 10 correct words adds +5 seconds<br/>
            • Every mistake deducts 1 point<br/>
            • Maintain your blast streak to earn higher scores and unlock achievements
          </Typography>
        </ModeItem>

        <Divider sx={{ my: 2, bgcolor: 'rgba(255,255,255,0.1)' }} />

        <SectionTitle variant="h6">𝐆𝐚𝐦𝐞 𝐌𝐨𝐝𝐞</SectionTitle>
        
        <ModeItem>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>𝐍𝐨𝐫𝐦𝐚𝐥 𝐌𝐨𝐝𝐞:</Typography>
          <Typography variant="body2">Practice your typing skills through timed challenges with increasing difficulty per level.</Typography>
        </ModeItem>

        <ModeItem>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>𝐇𝐚𝐫𝐝 𝐌𝐨𝐝𝐞:</Typography>
          <Typography variant="body2">A tougher challenge — every mistake deducts 1 point, making precision the key to success.</Typography>
        </ModeItem>

        <ModeItem>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>𝐒𝐮𝐫𝐯𝐢𝐯𝐚𝐥 𝐌𝐨𝐝𝐞:</Typography>
          <Typography variant="body2">
            The ultimate endurance challenge — type for as long as you can before time runs out!<br/>
            • Every correct word adds +1 second<br/>
            • Every wrong word deducts 2 seconds<br/>
            • Survive longer to beat your personal bests and earn rare achievements
          </Typography>
        </ModeItem>

        <ModeItem>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>𝐐𝐖𝐄𝐑𝐓𝐘 𝐌𝐨𝐝𝐞:</Typography>
          <Typography variant="body2">
            Train your typing fundamentals with a focus on proper hand placement and finger usage.<br/>
            • Learn correct finger positions on the QWERTY keyboard<br/>
            • Visual hand and finger guides for accurate typing<br/>
            • Builds muscle memory and proper typing habits<br/>
            • Special achievements for mastering correct hand placement
          </Typography>
        </ModeItem>

        <Divider sx={{ my: 2, bgcolor: 'rgba(255,255,255,0.1)' }} />

        <SectionTitle variant="h6">𝐊𝐞𝐲 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬:</SectionTitle>
        <Typography variant="body2" component="div">
          • Combo-style timer and scoring system<br/>
          • Normal, Hard, Blast, Survival, and QWERTY modes<br/>
          • Increasing difficulty per level<br/>
          • Visual hand placement guide for correct typing technique<br/>
          • Record Modes to track personal bests per game mode<br/>
          • Achievements system for each mode<br/>
          • Great for students, beginners, and casual players
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', p: 2 }}>
        <Button 
          onClick={onClose} 
          variant="contained" 
          sx={{ 
            bgcolor: 'theme.stats', 
            color: 'theme.background',
            fontWeight: 'bold',
            '&:hover': { bgcolor: 'theme.title' }
          }}
        >
          I'M READY!
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default GameGuide;
