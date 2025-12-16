const API_URL = process.env.REACT_APP_API_URL;

export const createRecipe = async (payload: any) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const fetchRecipes = async () => {
  try {
    const response = await fetch('http://176.108.251.138:8000/recipes/');
    if (!response.ok) {
      throw new Error('Ошибка при загрузке рецептов');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
