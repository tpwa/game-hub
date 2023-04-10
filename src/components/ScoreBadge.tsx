import { Badge } from "@chakra-ui/react"

interface Props {
    score: number;
}

const ScoreBadge = ({ score }: Props) => {
    if ((score < 0) || (score > 100)) return (<></>);
    let colorScheme = 'green';
    if (score < 95) colorScheme = 'yellow';
    if (score < 85) colorScheme = 'red';
    return (<Badge fontSize='1rem' borderRadius='5px' colorScheme={colorScheme}>{score}</Badge>);
}

export default ScoreBadge;