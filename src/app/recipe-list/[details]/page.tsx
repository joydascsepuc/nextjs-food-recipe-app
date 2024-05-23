import RecipeDetailsCC from "@/components/recipe-details";

async function fetchRecipeDetails(id: Number) {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await apiResponse.json();
        return data ?? data;
    } catch (error) {
        throw new Error("" + error);
    }
}

const RecipeDetails = async ({ params }: { params: any }) => {
    const recipeData = await fetchRecipeDetails(params?.details);
    return (
        <>
            <RecipeDetailsCC recipe={recipeData} />
        </>
    );
};

export default RecipeDetails;
