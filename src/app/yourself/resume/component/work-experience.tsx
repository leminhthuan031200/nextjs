import { workExperience } from '../resume-info';

export default function Experience() {
    return (
        <div className="flex flex-col w-2/4 pt-20 justify-center items-center">
            <div className="flex flex-row relative w-full justify-center pt-20 items-center">
                <h1 className="absolute left-0 bottom-0 text-2xl text-black font-black">
                    Experience
                </h1>
                <a
                    className="absolute right-0 bottom-0 text-right px-5 py-3 bg-blue-700 rounded-full text-sm font-medium"
                    download={'avatar'}
                    href="/avatar.jpg"
                >
                    DOWNLOAD CV
                </a>
            </div>
            {workExperience.map((item, key) => (
                <div
                    key={key}
                    className="flex flex-row w-full mt-10 py-10 bg-gray-400 rounded-sm shadow-2xl"
                >
                    <div className="flex flex-col w-4/6 px-10">
                        <h4 className="text-lg text-blue-700 font-bold">
                            {item.workTimeFrom} - {item.workTimeTo}
                        </h4>
                        <h4 className="text-lg text-white font-light">
                            {item.jobPosition}
                        </h4>
                        <h6 className="text-base text-white font-extralight">
                            {item.companyName}
                        </h6>
                        <h6 className="text-base text-white font-extralight">
                            {item.companyLocation}
                        </h6>
                    </div>
                    <div className="flex flex-col text-base px-10">
                        {item.description?.split('\n').map((i, k) => (
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
