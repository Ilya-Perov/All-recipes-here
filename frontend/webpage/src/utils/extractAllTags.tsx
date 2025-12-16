export const extractAllTags = (recipes: { tags: string[] }[]): string[] => {
  const tagSet = new Set<string>();

  recipes.forEach((recipe) => {
    recipe.tags.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet);
};
