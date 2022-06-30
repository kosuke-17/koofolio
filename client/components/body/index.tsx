import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import Content from "./bodyContent";

const Body = () => {
  return (
    <>
      <Box
        component={"div"}
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Content />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
export default Body;
