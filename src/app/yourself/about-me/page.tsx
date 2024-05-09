export default function Page() {
    return (
        <div className="flex flex-row w-full relative">
            <div className="w-2/5 h-[50rem] bg-gray-300"></div>
            <div className="w-3/5 bg-white"></div>
            <div className="flex flex-row absolute w-4/5 h-96 top-20 left-32 text-black">
                <div className="w-2/5 h-full bg-gray-200">
                    <p>About Me Page</p>
                </div>
                <div className="w-3/5 h-full bg-blue-200"></div>
            </div>
        </div>
    );
}
