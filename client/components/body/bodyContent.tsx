import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const Content: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" image="./dripCoffee.png" alt="" />
      <CardContent>
        <Typography variant="h5" color="text.first">
          タイトル
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Content;
