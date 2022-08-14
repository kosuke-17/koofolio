import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import SkillCard from "./skillCard";

const Skills = ({
  skills,
  classes,
}: {
  skills: { url: string; name: string; rate: number }[];
  classes: { width: string; height: string };
}) => {
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
          {skills.map((skill) => (
            <Grid item xs={2} sm={4} md={4} key={skill.url}>
              <SkillCard skill={skill} classes={classes} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
export default Skills;
