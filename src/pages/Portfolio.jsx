import { Container, Grid, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const Portfolio = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        Our Projects
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <ProjectCard
            title="Modern Living Room"
            image="https://images.unsplash.com/photo-1494526585095-c41746248156"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Portfolio;
