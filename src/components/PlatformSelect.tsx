import { Select } from '@chakra-ui/react'
import usePlatforms from '../hooks/usePlatforms';

interface Props {
    onPlatformSelect: (option: number) => void;
}

const PlatformSelect = ({ onPlatformSelect }: Props) => {
    const { platforms, error } = usePlatforms();

    return (
        <Select
            variant='filled'
            placeholder='Choose platform'
            width='auto'
            onChange={e => onPlatformSelect(parseInt(e.target.value))}
        >
            {platforms.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
            ))}
        </Select>
    )
}

export default PlatformSelect