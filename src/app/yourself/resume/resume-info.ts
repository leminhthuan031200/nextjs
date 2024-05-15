import fs from 'fs';
import path from 'path';

export interface WorkExperience {
    workTimeFrom: string;
    workTimeTo: string;
    jobPosition: string;
    companyName: string;
    companyLocation: string;
    description?: string;
}

export interface Education {
    learnTimeFrom: string;
    learnTimeTo: string;
    degreeLevel: string;
    universityName: string;
    universityLocation: string;
    description: string;
}

export const workExperience: Array<WorkExperience> = [
    {
        workTimeFrom: '2035',
        workTimeTo: 'Present',
        jobPosition: 'Job position',
        companyName: 'Company name',
        companyLocation: 'Company location',
        description:
            "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. \n I'm a great place for you to tell a story and let your users know a little more about you.",
    },
    {
        workTimeFrom: '2036',
        workTimeTo: 'Present',
        jobPosition: 'Job position',
        companyName: 'Company name',
        companyLocation: 'Company location',
        description:
            "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. \n I'm a great place for you to tell a story and let your users know a little more about you.",
    },
];

export const education: Array<Education> = [
    {
        learnTimeFrom: '2035',
        learnTimeTo: '2035',
        degreeLevel: 'Degree Level',
        universityName: 'UNIVERSITY NAME',
        universityLocation: 'University Location',
        description:
            "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. \n I'm a great place for you to tell a story and let your users know a little more about you.",
    },
];

export const skills: Array<string> = [
    'Entrepreneurial Mindset',
    'Go-to-Market Planning',
    'Teamwork & Collaboration',
    'Digital Analytics',
];

export const languages: Array<string> = [
    'English (native)',
    'French (proficient)',
    'Spanish (proficient)',
];

export const basePath: string = 'public';

export const filePath: string = 'files';

export const fileName: string = 'cv.pdf';

export function checkFileCV(): boolean {
    const pathCV = path.join(process.cwd(), basePath, filePath, fileName);

    if (!fs.existsSync(pathCV)) {
        return false;
    }

    return true;
}
