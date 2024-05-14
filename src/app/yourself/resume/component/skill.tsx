import { skills } from '../resume-info';

export default function Skill() {
    return (
        <>
            <div className="flex flex-row relative w-2/4 justify-center pt-20 items-center">
                <h1 className="absolute left-0 bottom-0 text-2xl text-black font-black">
                    Professional Skill
                </h1>
            </div>
            {skills.map((item, key) => (
                <div
                    key={key}
                    className="flex flex-row w-2/4 mt-20 py-10 bg-gray-400 rounded-sm shadow-2xl"
                >
                    <div className="flex flex-col w-4/6 px-10">
                        <h4 className="text-lg text-white font-light">
                            JOB POSITION
                        </h4>
                        <h6 className="text-base text-white font-extralight">
                            Company Name
                        </h6>
                        <h6 className="text-base text-white font-extralight">
                            Company Location
                        </h6>
                    </div>
                </div>
            ))}
        </>
    );
}
