import logo from "../assets/logo.svg";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

function Emoji({ rating }: Props) {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: logo, alt: "meh" }, //3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: logo, alt: "recommended" }, //4: { src: thumpsUp, alt: "recommended", boxSize: "25px" },
    5: { src: logo, alt: "exceptional" }, //5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return (
    <>
      <Image {...emojiMap[rating]} marginTop={1} boxSize="25px" />
    </>
  );
}

export default Emoji;
