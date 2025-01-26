import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color =
    score > 80
      ? "green"
      : score > 60
      ? "yellow"
      : score > 40
      ? "orange"
      : "red";

  return (
    <Badge
      colorScheme={color}
      fontSize="15px"
      borderRadius="4px"
      paddingX={"6px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
