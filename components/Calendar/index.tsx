import React from 'react';
import { Evenenent } from '../../domain/event';
import { EventBox } from '../EventBox';
import { useCalendar } from './useCalendar';

export function Calendar() {
    const { day } = useCalendar();

    return (
        <div
            className="grid bg-gray-600 h-full w-full"
            style={{
                gridTemplateRows: 'repeat(12,auto)',
                gridTemplateColumns: '10% repeat(6,auto)',
            }}
        >
            {Object.values(day).map((events: Evenenent[], i) => (
                <React.Fragment key={i}>
                    <h1
                        className="border bg-gray-600 text-white border-solid p-1"
                        style={{ gridColumn: '1' }}
                    >
                        {i + 9}h
                    </h1>
                    {events.map((event, index) => (
                        <EventBox
                            key={event.id}
                            event={event}
                            len={events.length}
                            index={index}
                        />
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}
