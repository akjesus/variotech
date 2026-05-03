import { Card, CardContent, Typography } from "@mui/material";

const ServiceCard = ({ title, description }) => {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
