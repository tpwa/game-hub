import { Card, CardBody, CardHeader, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import ScoreBadge from "./ScoreBadge";
import getImageUrl from "../utilities/getImageUrl";



interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={15} overflow='hidden'>
            <Image src={getImageUrl(game.background_image)} />
            <CardBody>
                <HStack mb={2} justifyContent={"space-between"}>
                    <PlatformIconList platforms={game.parent_platforms} />
                    <ScoreBadge score={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>
                    {game.name}
                </Heading>
                {/* <HStack>{game.genres.map(g=> <Text>{g.name}</Text>)}</HStack> */}
            </CardBody>
        </Card>
    );
}

export default GameCard;