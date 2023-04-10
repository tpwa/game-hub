import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import { useState } from "react";
import GenreSelect from "./components/GenreSelect";
import { Many } from "lodash";

function App() {
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const handleGenreSelect = (id: number) => {
    if (selectedGenres.includes(id)) setSelectedGenres(selectedGenres.filter(n => n !== id));
    else setSelectedGenres([...selectedGenres, id]);
  }

  const [searchInput, setSearchInput] = useState('');
  const [sortOption, setSortOption] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<Many<'asc' | 'desc'>>('asc');
  const [selectedPlatform, setSelectedPlatform] = useState(0);


  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem p="2" area="nav">
        <NavBar
          sortOrder={sortOrder}
          sortOption={sortOption}
          onInputChange={input => setSearchInput(input)}
          onSortSelect={option => { setSortOption(option); setSortOrder('asc'); }}
          onPlatformSelect={id => setSelectedPlatform(id)}
          onToggleOrder={() => {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
          }}
        />
      </GridItem>
      <GridItem p="2" area="main">
        <GameGrid
          sortOrder={sortOrder}
          selectedGenres={selectedGenres}
          sortOption={sortOption}
          searchInput={searchInput}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
      <Show above="lg">
        <GridItem p="2" area="aside">
          <GenreSelect
            selectedGenres={selectedGenres}
            onClick={(id) => handleGenreSelect(id)}
          />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
