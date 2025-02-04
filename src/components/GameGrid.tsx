import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { NavLink } from "react-router-dom";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0)

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount || 0}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) =>
          <React.Fragment key={index}>
            {page.results.map(game =>
              <GameCardContainer key={game.id}>
                <NavLink to={`/games/${game.slug}`}>
                  <GameCard game={game} />
                </NavLink>
              </GameCardContainer>)}
          </React.Fragment>
        )}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
