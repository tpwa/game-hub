import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsPlaystation, BsWindows, BsXbox, BsApple, BsAndroid, BsGlobe, BsNintendoSwitch} from 'react-icons/bs';
import { FaLinux } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md';
import { Platform } from '../hooks/useGames';

interface Props {
    platforms: { platform: Platform }[]
}
const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: {[key:string]: IconType} = {
        pc: BsWindows,
        playstation: BsPlaystation,
        xbox: BsXbox,
        nintendo: BsNintendoSwitch,
        android: BsAndroid,
        mac: BsApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
    }
    return (
        <HStack>
            {platforms.map(({ platform }) => (
                <Icon color='gray.500' key={platform.id} as={iconMap[platform.slug]}/>
            ))}
        </HStack>
    );
}

export default PlatformIconList;