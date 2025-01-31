import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameGridSkeleton from "./GameGridSkeleton";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}

      {isLoading && (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3} padding="5px">
          {skeletons.map((i) => {
            return (
              <GameCardContainer key={i}>
                <GameGridSkeleton key={i} />
              </GameCardContainer>
            );
          })}
        </SimpleGrid>
      )}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3} padding="5px">
        {data.map((game) => {
          return (
            <GameCardContainer key={game.id}>
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
