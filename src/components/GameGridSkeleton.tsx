import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameGridSkeleton = () => {
  return (
    <Card backgroundColor={"#262626"} borderRadius={30} overflow={"hidden"}>
      <Skeleton height="250px"></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameGridSkeleton;
