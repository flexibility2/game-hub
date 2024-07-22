import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown, BsDownload } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatform";

interface PlatfromProps {
  selectedPlateformId?: number;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformList = ({
  selectedPlateformId,
  onSelectPlatform,
}: PlatfromProps) => {
  const { data, error } = usePlatform();
  const selectedPlatform = data?.results.find(
    (p) => p.id === selectedPlateformId
  );

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformList;
