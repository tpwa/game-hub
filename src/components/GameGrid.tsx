import { GridItem, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import filterGames from "../utilities/filterGames";
import _, { Many } from 'lodash';


interface Props {
  selectedGenres: number[];
  searchInput: string;
  sortOption: string;
  selectedPlatform: number;
  sortOrder: Many<'asc' | 'desc'>;
}

const GameGrid = ({ selectedGenres, searchInput, sortOption, selectedPlatform, sortOrder }: Props) => {
  const { games: allGames, error: gameError } = useGames();

  const games = filterGames(allGames, searchInput, selectedGenres, sortOption, selectedPlatform, sortOrder);

  return (
    <>
      {gameError && <Text>{gameError}</Text>}
      {games.length ?
        <VStack>
          <Heading>Games</Heading>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding='10px' spacing={5}>
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </SimpleGrid>
        </VStack> :
        <p>Whoops ! Are you sure ?</p>

      }
    </>
  );
};

export default GameGrid;
