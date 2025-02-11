import { Image, ImageProps } from "@chakra-ui/react";
import BullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import Thumbsup from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh", boxSize: "25px" },
    4: { src: Thumbsup, alt: "Recommended", boxSize: "25px" },
    5: { src: BullsEye, alt: "Must Play", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
