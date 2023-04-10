import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { Button, Select } from '@chakra-ui/react'
import { Many } from 'lodash';

interface Props {
    onSortSelect: (option: string) => void;
    onToggleOrder: () => void;
    sortOrder: Many<'asc' | 'desc'>;
    sortOption: string;
}

const SortSelect = ({ sortOrder, sortOption, onSortSelect, onToggleOrder }: Props) => {

    return (
        <>
            <Select
                variant='filled'
                placeholder='Sort by'
                width='auto'
                onChange={e => onSortSelect(e.target.value)}
            >
                <option value='title'>Title</option>
                <option value='score'>Score</option>
            </Select>
            <Button
                variant='ghost'
                onClick={onToggleOrder}
                isDisabled={!sortOption}
            >{
                    sortOrder === 'asc' ?
                        <ArrowUpIcon /> :
                        <ArrowDownIcon />
                }
            </Button>
        </>
    )
}

export default SortSelect