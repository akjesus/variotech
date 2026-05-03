import { Box, TextField, Button } from "@mui/material";

const ContactForm = () => {
  return (
    <Box component="form" sx={{ display: "grid", gap: 2, maxWidth: 500 }}>
      <TextField label="Name" fullWidth />
      <TextField label="Email" fullWidth />
      <TextField label="Phone" fullWidth />
      <TextField label="Message" multiline rows={4} fullWidth />
      <Button variant="contained">Send Message</Button>
    </Box>
  );
};

export default ContactForm;
