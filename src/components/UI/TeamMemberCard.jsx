import { Card, CardContent, Typography, Avatar } from "@mui/material";

const TeamMemberCard = ({ name, role, image }) => (
  <Card className="bg-transparent shadow-none text-white">
    <Avatar src={image} alt={name} variant="rounded" className="w-full h-48 mb-2" />
    <CardContent className="p-0">
      <Typography variant="subtitle1" className="font-semibold">{name}</Typography>
      <Typography variant="body2">{role}</Typography>
    </CardContent>
  </Card>
);

export default TeamMemberCard;
