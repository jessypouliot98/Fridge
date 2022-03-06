import React from "react";
import ContentCard from "../ContentCard/ContentCard";

export type IngredientListProps = {}

const IngredientList: React.FC<IngredientListProps> = (props) => {
  const { children } = props;

  return (
    <ContentCard>
      {children}
    </ContentCard>
  );
}

export default IngredientList;
