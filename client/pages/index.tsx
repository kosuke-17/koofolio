import type { NextPage } from "next";
import { useRouter } from "next/router";

import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Skills from "../components/skills";

const BodyLayout = styled("div")({});

const SkillCard = styled("div")({});

const Home: NextPage = () => {
  const router = useRouter();
  const skills = [
    { url: "react.png", name: "react", rate: 2 },
    { url: "typescript.png", name: "typescript", rate: 3 },
    { url: "nextjs.png", name: "nextjs", rate: 1 },
    { url: "nodejs.png", name: "nodejs", rate: 4 },
    { url: "nestjs.png", name: "nestjs", rate: 2.5 },
    { url: "mongodb.png", name: "mongodb", rate: 1.5 },
  ];
  return (
    <BodyLayout>
      <Card sx={{ minWidth: 275, backgroundColor: "aliceblue" }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }}>こんにちは!</Typography>
          <Typography sx={{ fontSize: 20 }}>
            エンジニア1年目の田村孝輔です。
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            趣味はフットサルしたり、映画見たり、プログラミングの勉強をしています。
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" onClick={() => router.push("/me")}>
            気になった方はこちら
          </Button>
        </CardActions>
      </Card>
      {skills && (
        <Skills skills={skills} classes={{ width: "100px", height: "100px" }} />
      )}
    </BodyLayout>
  );
};

export default Home;
