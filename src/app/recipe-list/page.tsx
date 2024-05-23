import RecipeListCC from "@/components/recipe-list";

async function fetchRecipeList() {
    try {
        const apiResponse = await fetch("https://dummyjson.com/recipes");
        const data = await apiResponse.json();
        return data?.recipes;
    } catch (error) {
        throw new Error("" + error);
    }
}

async function recipeList() {
    const recipes = await fetchRecipeList();
    return <RecipeListCC rList={recipes} />;
}

export default recipeList;
