import { HStack, Icon } from "@chakra-ui/react";
import {
  FaAndroid,
  FaApple,
  FaAppStoreIos,
  FaGooglePlay,
  FaLinux,
  FaPlaystation,
  FaSteam,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { Platform } from "../hooks/useGames";

import { IconType } from "react-icons";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";

// import {} from "react-icons/md";
interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  const iconsLookup: { [Key: string]: IconType } = {
    pc: FaWindows,
    linux: FaLinux,
    playstation: FaPlaystation,
    ios: FaAppStoreIos,
    xbox: FaXbox,
    android: FaAndroid,
    steam: FaSteam,
    mac: FaApple,
    google: FaGooglePlay,
    iphone: MdPhoneIphone,
    nintendo: BsNintendoSwitch,
    web: BsGlobe,
  };

  return (
    <HStack spacing={1} marginY={2}>
      {platforms.map((platform) => (
        <Icon
          as={iconsLookup[platform.slug]}
          key={platform.id}
          color={"gray.500"}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
