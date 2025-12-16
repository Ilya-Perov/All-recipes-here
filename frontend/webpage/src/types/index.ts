export type RecipePreviewProps = {
  title: string;
  description?: string;
  image?: string;
  tags: string[];
};

export interface Recipe {
  id: number;
  title: string;
  description: string;
  image_url: string;
  tags: string[];
  ingredients: string[];
  cooking_time: number;
  servings: number;
  instructions: string;
}
