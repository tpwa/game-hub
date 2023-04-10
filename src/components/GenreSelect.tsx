import { Heading, HStack, Image, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import _ from "lodash";
import useGenres from "../hooks/useGenres";

interface Props {
    selectedGenres: number[];
    onClick: (id: number) => void;
}

const GenreSelect = ({ selectedGenres, onClick }: Props) => {
    const { genres, error } = useGenres();
    return (
        <VStack alignItems='start'>
            <Heading size={'lg'}>Genres</Heading>
            <UnorderedList >
                {genres.map(genre => (
                    <ListItem _hover={{ cursor: 'pointer' }} listStyleType='none' m={2} key={genre.id} onClick={() => onClick(genre.id)}>
                        <HStack>
                            <Image boxSize='50px' borderRadius={10} src={genre.image_background} />
                            <Text
                                fontWeight={(selectedGenres.includes(genre.id)) ? 'bold' : ''}
                                color={(selectedGenres.includes(genre.id)) ? 'red' : ''}
                            >
                                {genre.name}
                            </Text>
                        </HStack>
                    </ListItem>
                ))}
            </UnorderedList>
        </VStack>
    )
}

export default GenreSelect