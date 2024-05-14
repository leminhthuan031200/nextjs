import { education } from '../resume-info';

export default function Education() {
    return (
        <>
            <div className="flex flex-row relative w-2/4 justify-center pt-20 items-center">
                <h1 className="absolute left-0 bottom-0 text-2xl text-black font-black">
                    Education
                </h1>
            </div>
            {education.map((item, key) => (
                <div
                    key={key}
                    className="flex flex-row w-2/4 mt-20 py-10 bg-gray-400 rounded-sm shadow-2xl"
                >
                    <div className="flex flex-col w-4/6 px-10">
                        <h4 className="text-lg text-blue-700 font-bold">
                            {item.learnTimeFrom} - Present
                        </h4>
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
                    <div className="flex flex-col text-base px-10">
                        <p>
                            {
                                "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
                            }
                        </p>
                        <p className="pt-5 text-balance">
                            {
                                "I'm a great place for you to tell a story and let your users know a little more about you."
                            }
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
}
