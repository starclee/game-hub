import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameGridSkeleton from "./GameGridSkeleton";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}

      {isLoading && (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} padding="5px">
          {skeletons.map((i) => {
            return (
              <GameCardContainer key={i}>
                <GameGridSkeleton key={i} />
              </GameCardContainer>
            );
          })}
        </SimpleGrid>
      )}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} padding="5px">
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
