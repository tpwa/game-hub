import { HStack, Image } from "@chakra-ui/react";
import { Many } from "lodash";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import PlatformSelect from "./PlatformSelect";
import SearchBar from "./SearchBar";
import SortSelect from "./SortSelect";

interface Props {
  sortOrder: Many<'asc' | 'desc'>;
  sortOption: string;
  onInputChange: (input: string) => void;
  onSortSelect: (option: string) => void;
  onPlatformSelect: (platformID: number) => void;
  onToggleOrder: () => void;
}

const NavBar = ({ sortOrder, sortOption, onInputChange, onSortSelect, onPlatformSelect, onToggleOrder }: Props) => {
  return (
    <HStack justify="space-left" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchBar onInputChange={onInputChange} />
      <PlatformSelect onPlatformSelect={onPlatformSelect} />
      <SortSelect sortOption={sortOption} sortOrder={sortOrder} onSortSelect={onSortSelect} onToggleOrder={onToggleOrder} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
