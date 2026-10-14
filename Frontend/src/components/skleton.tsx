export function Skeleton() {
    return (
        <div className="border-b border-gray-200 py-6 animate-pulse">

            {/* author */}
            <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 rounded-full bg-gray-200"></div>

                <div className="h-4 w-24 rounded bg-gray-200"></div>

                <div className="h-2 w-2 rounded-full bg-gray-200"></div>

                <div className="h-4 w-24 rounded bg-gray-200"></div>
            </div>

            {/* title */}
            <div className="h-6 w-80 rounded bg-gray-200 mb-3"></div>

            {/* description */}
            <div className="h-4 w-[500px] rounded bg-gray-200 mb-6"></div>

            {/* read time */}
            <div className="h-4 w-24 rounded bg-gray-200"></div>

        </div>
    );
}

export function FullblogSkeleton() {
    return (
        <div>
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 pt-12 w-full max-w-4xl animate-pulse">

                    {/* Left side */}
                    <div className="col-span-8">

                        {/* Title */}
                        <div className="h-10 w-5/6 bg-gray-200 rounded mb-2"></div>
                        <div className="h-10 w-2/3 bg-gray-200 rounded"></div>

                        {/* Date */}
                        <div className="h-4 w-32 bg-gray-200 rounded mt-4"></div>

                        {/* Content */}
                        <div className="pt-6 space-y-3">
                            <div className="h-3 w-full bg-gray-200 rounded"></div>
                            <div className="h-3 w-11/12 bg-gray-200 rounded"></div>
                            <div className="h-3 w-full bg-gray-200 rounded"></div>
                            <div className="h-3 w-10/12 bg-gray-200 rounded"></div>
                            <div className="h-3 w-full bg-gray-200 rounded"></div>
                            <div className="h-3 w-9/12 bg-gray-200 rounded"></div>
                        </div>

                    </div>

                    {/* Right side */}
                    <div className="col-span-4">

                        {/* Author */}
                        <div className="h-5 w-16 bg-gray-200 rounded"></div>

                        <div className="flex mt-4">

                            {/* Avatar */}
                            <div className="h-12 w-12 rounded-full bg-gray-200"></div>

                            <div className="pl-4">

                                {/* Name */}
                                <div className="h-5 w-32 bg-gray-200 rounded"></div>

                                {/* Catch phrase */}
                                <div className="h-3 w-40 bg-gray-200 rounded mt-3"></div>
                                <div className="h-3 w-28 bg-gray-200 rounded mt-2"></div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}