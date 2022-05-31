import React from 'react';
import { Evenenent } from '../../domain/event';

interface Props {
    event: Evenenent;
    len: number;
    index: number;
}

export function EventBox({ event, len, index }: Props) {
    const colStart = index + 2;
    // const colEnd = index + 3;
    const hourStart = event.hours - 8;
    const hourEnd = event.hoursEnd - 8;

    return (
        <div
            className={`p-1 bg-gray-300 text-color-white flex border border-solid flex-row justify-between `}
            style={{
                zIndex: event.duration / 60,
                gridColumn: len <= 1 ? `${colStart}/-1` : `${colStart}`,
                gridRow: `${hourStart}/${hourEnd}`,
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
