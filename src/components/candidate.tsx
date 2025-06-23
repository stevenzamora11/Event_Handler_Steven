import type { CandidateType } from "@/types/candidates";
import type React from "react";
import { cn } from "@/utils/styles"; 

type CandidateProps = CandidateType & {
    className?: string;
    onClick?: (name: string) => void;
};

const Candidate = (props: CandidateProps) => {
    const { name, age, experience, skills, status, working, onClick } = props;

    return (
        <div
            className={cn(
                props.className,
                'border border-gray-300 shadow-md',
                'flex-col rounded-lg p-4',
                'min-w-[200px]'
            )}
            onClick={() => onClick?.(name)}
        >
            <div className='flex items-center justify-between mb-2 gap-x-2'>
                <h2 className='text-xl font-bold'>{name.toUpperCase()}</h2>
                <span
                    className={cn(
                        getStatusColor(status),
                        'text-sm font-medium text-white',
                        'px-4 py-1 rounded-full'
                    )}
                >
                    {status.toUpperCase()}
                </span>
            </div>
            <p className='text-gray-500'>Age: {age}</p>
            <p className='text-gray-500'>Experience: {experience} years</p>
            <p
                className={cn(
                    'text-gray-500',
                    working? 'text-green-600' : 'text-red-600'
                )}
            >
                Working: {working? 'Yes' : 'No'}
            </p>
            <h3 className='text-lg font-semibold mt-2'>Skills:</h3>
            <ol className='list-decimal list-inside text-gray-700'>
                {skills.map((skill, index) => (
                    <span key={index} className='block ml-1'>
                        {skill}
                    </span>
                ))}
            </ol>
        </div>
    );

    function getStatusColor(status: CandidateType['status']) {
        if(status === 'Hired') {
            return 'bg-green-600 hover:bg-green-700';
        }
        if(status === 'Interviewing') {
            return 'bg-yellow-600 hover:bg-yellow-700';
        }
        if(status === 'Pending') {
            return 'bg-blue-600 hover:bg-blue-700';
        }
        if(status === 'Refused') {
            return 'bg-red-600 hover:bg-red-700';
        }
        return 'bg-blue-600 hover:bg-blue-700';
    };
};

export default Candidate;
