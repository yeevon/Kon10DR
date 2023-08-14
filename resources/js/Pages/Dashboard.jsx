import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-lg sm:font-semibold text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-4 sm:py-12 bg-dark-grey">
                <div className="px-4 sm:max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Slideshow/Carousel */}
                    <div className="mb-4 sm:mb-8 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="bg-gray-800 p-4 sm:p-6 text-white">
                            Carousel Here
                        </div>
                    </div>

                    {/* Games Cards */}
                    <div className="mb-4 sm:mb-8 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center">
                            <h3 className="mb-2 sm:mb-0 text-gray-900 font-medium sm:font-semibold">
                                Games
                            </h3>
                            <button className="bg-purple-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded hover:bg-purple-800">
                                View All
                            </button>
                        </div>
                        <div className="p-4 sm:p-6 text-gray-900">
                            Games Cards Here
                        </div>
                    </div>

                    {renderSection(
                        "Popular Tournaments",
                        "List of Popular Tournaments Here"
                    )}
                    {renderSection(
                        "Popular Ladders",
                        "List of Popular Ladders Here"
                    )}
                    {renderSection(
                        "Popular Spaces",
                        "List of Popular Spaces Here"
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function renderSection(title, content) {
    return (
        <div className="mb-4 sm:mb-8 bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-4 sm:p-6 text-gray-900">
                <h3 className="text-gray-900 font-medium sm:font-semibold mb-4">
                    {title}
                </h3>
                {content}
            </div>
        </div>
    );
}
