import React from 'react';
import WorkExperience from './component/work-experience';
import Education from './component/education';
import Language from './component/languages';
import Skill from './component/skill';

export default function Page() {
    return (
        <>
            <div className="flex flex-col w-full h-full pb-10 bg-gray-200 items-center">
                <div className="flex flex-row pt-20 justify-center items-center">
                    <div className="w-5 h-5 bg-blue-700"></div>
                    <h1 className="p-5 text-4xl text-black font-black">
                        RESUME
                    </h1>
                </div>
                <WorkExperience />
                <Education />
                <Skill />
                <Language />
            </div>
        </>
    );
}
