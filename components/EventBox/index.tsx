import React from 'react';
import { Evenenent } from '../../domain/event';

interface Props {
    event: Evenenent;
    len: number;
    index: number;
}

export function EventBox({ event, len, index }: Props) {
    return (
        <div
            className={`p-1 bg-gray-300 text-color-white flex border border-solid flex-row justify-between `}
            style={{
                gridColumn: len == 0 ? `${index + 2}/span 3` : index + 2,
                gridRow: `${event.hours - 8}/${
                    event.hours + event.duration / 60 - 8
                }`,
            }}
            onClick={() => {
                console.log({ len, index });
            }}
        >
            <h1 className="text-center w-full hover:bg-white"> {event.id}</h1>
            {/* <h2>start: {event.start}</h2> */}
            {/* <h2>duration : {event.duration}</h2> */}
        </div>
    );
}
