import React, { useState } from "react";
import {
  Tooltip,
  Fab,
  Modal,
  Box,
  styled,
  Typography,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { EmojiEmotions } from "@mui/icons-material";
import { VideoCameraBack } from "@mui/icons-material";
import { Image } from "@mui/icons-material";
import { PersonAdd } from "@mui/icons-material";
import { DateRange } from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

export const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title='Add'
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}>
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box width={400} height={280} bgcolor='white' p={3} borderRadius={5}>
          <Typography variant='h6' color='gray' textAlign='center'>
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src='https://avatars.githubusercontent.com/u/13625714?s=40&v=4'
              sx={{ width: 30, height: 30 }}></Avatar>
            <Typography fontWeight={500} variant='span'>
              Ben Stoica
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id='standard-multiline-static'
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant='standard'
          />
          <Stack direction='row' gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>
          <ButtonGroup fullWidth variant='contained'>
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </div>
  );
};

export default Add;
