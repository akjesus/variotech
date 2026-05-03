import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const ProjectCard = ({ title, image }) => {
  return (
    <Card>
      <CardMedia component="img" height="220" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
