import React from "react";
import PropTypes from "prop-types";
import MuiCard from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { Divider, Box, Typography, IconButton } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Card = props => {
  return (
    <MuiCard sx={{ minWidth: 280, maxWidth: 350 }}>
      <CardActionArea>
        {/* header */}
        <CardMedia
          component="img"
          image="https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg"
          height="194"
          alt="business card"
        />
        {/* body */}
        <CardContent>
          <CardHeader
            title="first card"
            subheader="subtitle of first card"
            sx={{ p: 0, mb: 1 }}
          />
          <Divider />
          <Box mt={1}>
            <Typography variant="body2" color="text.secondary">
              <Typography fontWeight={700} component="span">
                phone:{" "}
              </Typography>
              050-0000000
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Typography fontWeight={700} component="span">
                address:{" "}
              </Typography>
              los angeles 7 kiryat malachi
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Typography fontWeight={700} component="span">
                card number:{" "}
              </Typography>
              9000000
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>

      {/* actionBar */}
      <CardActions
        disableSpacing
        sx={{ pt: 0, justifyContent: "space-between" }}>
        <Box>
          <IconButton aria-label="delete card">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit card">
            <EditIcon />
          </IconButton>
        </Box>

        <Box>
          <IconButton aria-label="call business">
            <CallIcon />
          </IconButton>
          <IconButton aria-label="add to fav">
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardActions>
    </MuiCard>
  );
};

Card.propTypes = {};

export default Card;
