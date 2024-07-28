import React from "react";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { Platform } from "../entities/Platform";
interface GamePlatformListProps {
  platforms: [{ platform: Platform }];
}

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  nintendo: SiNintendo,
  web: BsGlobe,
};

const PlatformIconList = ({ platforms }: GamePlatformListProps) => {
  return (
    <>
      <HStack color={"gray.500"} marginY={1}>
        {platforms.map((item) => (
          <Icon key={item.platform.id} as={iconMap[item.platform.slug]}></Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
