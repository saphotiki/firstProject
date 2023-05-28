export const DynamicComponent = () => {

    const userData = [
        {
            tittle: "Very easy this was to integrate",
            description: "If you care for your time, I hands down would go with this.",
            image: "https://avatars.githubusercontent.com/u/130461824?v=4",
            description2: "Software Engineer at Facebook"
        },

        {
            tittle: "Solid foundation for any project",
            description: "Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!",
            image: "https://avatars.githubusercontent.com/u/130461824?v=4",
            description2: "Software Engineer at Facebook"
        },

        {
            tittle: "Solid foundation for any project",
            description: "Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!",
            image: "https://avatars.githubusercontent.com/u/130461824?v=4",
            description2: "Software Engineer at Facebook"
        },
    ];


   return <>
<div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white"></h3>
            <p className="my-4"></p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
       
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div></div>
                <div className="text-sm text-gray-500 dark:text-gray-400"></div>
            </div>
        </figcaption>
    </figure>
    <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {
                        userData.map((user, index) => {
                            return <li key={index} className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {user.tittle}
                                        </p>
                                        <div className="flex-shrink-0">
                                        <img className="w-8 h-8 rounded-full" src={user.image} alt="Neil image" />
                                    </div>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {user.description}
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        {user.description2}
                                    </div>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>           
    </>
    }