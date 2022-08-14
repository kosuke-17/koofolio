import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Rating,
  Stack,
} from "@mui/material";

const SkillCard = ({
  skill,
  classes,
}: {
  skill: { url: string; name: string; rate: number };
  classes: { width: string; height: string };
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image={skill.url}
        alt=""
        sx={{
          display: "block",
          margin: "auto",
          width: classes.width,
          height: classes.height,
        }}
      />
      <CardContent>
        <Typography
          sx={{ textAlign: "center" }}
          variant="h5"
          color="text.first"
        >
          {skill ? skill.name : "名無し"}
        </Typography>
      </CardContent>
      <Stack spacing={1}>
        <Rating
          name="half-rating-read"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
          defaultValue={skill.rate}
          precision={0.5}
          readOnly
        />
      </Stack>
    </Card>
  );
};

export default SkillCard;
