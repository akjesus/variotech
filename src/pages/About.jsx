import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Typography>
        We create timeless and luxurious spaces tailored to your taste.
      </Typography>
    </Container>
  );
};

export default About;
