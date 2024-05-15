import { languages } from '../resume-info';

export default function Language() {
    return (
        <div className="flex flex-col w-2/4 pt-20 justify-center items-center">
            <div className="flex flex-row relative w-full justify-center pt-10 items-center">
                <h1 className="absolute left-0 bottom-0 text-2xl text-black font-black">
                    Language
                </h1>
            </div>
            <div className="flex flex-row flex-wrap w-full mt-10 py-10 bg-gray-400 rounded-sm shadow-2xl">
                {languages.map((item, key) => (
                    <div
                        key={key}
                        className="flex flex-row w-1/2 px-10 items-center"
                    >
                        <div className="w-5 h-5 mx-5 bg-blue-700"></div>
                        <h4 className="text-lg text-white font-light">
                            {item}
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    );
}
