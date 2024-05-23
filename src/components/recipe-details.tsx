import Image from "next/image";

const RecipeDetailsCC = ({ recipe }: { recipe: any }) => {
    return (
        <>
            <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="w-full lg:sticky top-0 sm:flex gap-2">
                        <Image
                            width={500}
                            height={500}
                            src={recipe?.image}
                            className="w-4/5 rounded object-cover"
                            alt={recipe?.name}
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-950">
                            {recipe?.name}
                        </h2>
                        <div className="flex flex-wrap gap-4 mt-5">
                            <p className="text-2xl text-gray-700">
                                {recipe?.mealType[0]}
                            </p>
                        </div>
                        <div className="mt-5">
                            <p className="text-2xl text-gray-800">
                                {recipe?.cuisine}
                            </p>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-lg font-bold">Ingredients</h3>
                            {recipe.ingredients &&
                            recipe.ingredients.length > 0 ? (
                                <ul className="space-y-3 list-desc mt-4 pl-4 text-sm text-gray-750">
                                    {recipe.ingredients.map(
                                        (ingredient: any) => {
                                            return <li>{ingredient}</li>;
                                        }
                                    )}
                                </ul>
                            ) : (
                                <p></p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecipeDetailsCC;
