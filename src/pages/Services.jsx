import { Container, Grid, Typography } from "@mui/material";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Residential Design",
      description: "Beautiful and functional home interiors.",
    },
    {
      title: "Commercial Spaces",
      description: "Professional and inspiring office designs.",
    },
  ];

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        Our Services
      </Typography>

      <Grid container spacing={3}>
        {services.map((service, i) => (
          <Grid item xs={12} md={6} key={i}>
            <ServiceCard {...service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;