import { Game } from "../hooks/useGames";
import _, { Many } from "lodash";

const sortAttr: { [key: string]: string } = {
    title: 'name',
    score: 'metacritic',
}

const filterGames = (
    allGames: Game[],
    searchInput: string,
    selectedGenres: number[],
    sortOption: string,
    selectedPlatform: number,
    sortOrder: Many<'asc' | 'desc'>
) => {
    const searchGames = allGames.filter(game => game.name.toUpperCase().includes(searchInput.toUpperCase()));

    const genreGames =
        (selectedGenres.length === 0) ?
            searchGames :
            searchGames.filter(game => _.intersection(game.genres.map(g => g.id), selectedGenres).length)


    const platformGames =
        selectedPlatform
            ? genreGames.filter(game => game.platforms.map(({ platform }) => platform.id).includes(selectedPlatform))
            : genreGames

    const sortGames = _.orderBy(platformGames, sortAttr[sortOption], sortOrder)


    return sortGames;
}

export default filterGames