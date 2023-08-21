import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { func, string } from "prop-types";
import { useUser } from "../../../users/providers/UserProvider";
import CardDeleteDialog from "./CardDeleteDialog";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import useCards from "../../hooks/useCards";


const CardActionBar = ({ cardId, onDelete, onLike, userId ,cardUserId , cardLikes }) => {
 
  const { handleLikeCard } = useCards();
  const navigate = useNavigate();
  const { user } = useUser();
  const [isDialogOpen, setDialog] = useState(false);
  const [isLiked, setLike] = useState(() => 
       !!cardLikes.find(id => id === user._id)
  );

  const handleLike = async () => {
    setLike(prev => ! prev);
    await handleLikeCard(cardId);
    onLike();
  };
  
  const handleDialog = term => {
    if (term === "open") return setDialog(true);
    setDialog (false);
  };

  const handleDeleteCard = () => {
    handleDialog();
    onDelete(cardId);
  };

  return (
    <CardActions disableSpacing sx={{ pt: 0, justifyContent: "space-between" }}>
     <Box>
        {user && (user.isAdmin || user._Id === cardUserId) && (
          <IconButton
            aria-label="delete card"
            onClick={()=> handleDialog ("open")}>
          
            <DeleteIcon />
          </IconButton>
        )}
         {user && user._id === userId && (
          <IconButton
            aria-label="edit card"
            onClick={() => navigate(`${ROUTES.EDIT_CARD}/${cardId}`)}
          >
            <EditIcon />
          </IconButton>
        )}
      </Box>
      <Box>
        <IconButton aria-label="call business">
          <CallIcon />
        </IconButton>

        {user && (
          <IconButton aria-label="add to fav" onClick={handleLike}>
            <FavoriteIcon color={isLiked ? "error" : "inherit"} />
          </IconButton>
          
        )}
        
         </Box>
    <CardDeleteDialog
    isDialogOpen={isDialogOpen}
    onChangeDialog={handleDialog}
    onDelete={handleDeleteCard}
    
     />
      </CardActions>
    
  );
};


CardActionBar.propTypes = {
  cardId: string.isRequired,
  onDelete: func.isRequired,
  onLike: func.isRequired,
  userId: string.isRequired,
};


export default CardActionBar;
