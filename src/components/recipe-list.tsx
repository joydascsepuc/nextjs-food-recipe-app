import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const RecipeListCC = ({ rList }: { rList: any }) => {
    return (
        <>
            <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
                <h2 className="text-3xl font-bold text-gray-800 mb-12">
                    Recipes
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rList && rList.length > 0 ? (
                        rList.map((recipe: any) => {
                            return (
                                <Link
                                    href={`recipe-list/${recipe.id}`}
                                    id={recipe.id}
                                >
                                    <Card>
                                        <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transaction-all">
                                            <div className="w-full aspect-w-16 aspect-h8 lg:h-80">
                                                <Image
                                                    src={recipe.image}
                                                    alt={recipe.name}
                                                    width={500}
                                                    height={500}
                                                    className="h-full w-full object-cover object-top"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-lg font-bold text-gray-900">
                                                    {recipe.name}
                                                </h3>
                                                <div className="mt-4 flex items-center flex-wrap gap-2">
                                                    <p className="text-lg text-gray-600">
                                                        Ratings: {recipe.rating}
                                                    </p>
                                                    <div className="ml-auto">
                                                        <p className="text-lg text-gray-600 font-bold">
                                                            {recipe.cuisine}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            );
                        })
                    ) : (
                        <p className="text-black">List is empty!</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default RecipeListCC;
