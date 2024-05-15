import { education } from '../resume-info';

export default function Education() {
    return (
        <div className="flex flex-col w-2/4 pt-20 justify-center items-center">
            <div className="w-full">
                <h1 className="text-left text-2xl text-black font-black">
                    Education
                </h1>
            </div>

            {education.map((item, key) => (
                <div
                    key={key}
                    className="flex flex-row w-full mt-10 py-10 bg-gray-400 rounded-sm shadow-2xl"
                >
                    <div className="flex flex-col w-4/6 px-10">
                        <h4 className="text-lg text-blue-700 font-bold">
                            {item.learnTimeFrom} - {item.learnTimeTo}
                        </h4>
                        <h4 className="text-lg text-white font-light">
                            {item.degreeLevel}
                        </h4>
                        <h6 className="text-base text-white font-extralight">
                            {item.universityName}
                        </h6>
                        <h6 className="text-base text-white font-extralight">
                            {item.universityLocation}
                        </h6>
                    </div>
                    <div className="flex flex-col text-base px-10">
                        {item.description.split('\n').map((i, k) => (
                            <span key={k}>
                                <p>{i}</p>
                                <br />
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
