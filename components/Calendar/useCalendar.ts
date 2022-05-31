import { useEffect, useState } from 'react';
import { getEvents } from '../../application/event';
import { Day } from '../../domain/day';

export function useCalendar() {
    const [day, setDay] = useState<Day>(new Day());
    // const [dayDisplayed, setDayDisplayed] = useState<Day>(new Day());

    useEffect(() => {
        getDay();
    }, []);

    const getDay = () => {
        const events = getEvents();
        const day: Day = new Day();

        let k: keyof Day;
        for (k in day) {
            for (const event of events) {
                if (k == 'h' + event.hours) {
                    if (!day[k].some((e) => e == event)) {
                        day[k] = [...day[k], event];
                    }
                }
            }

            day?.[k].sort((a, b) => {
                return a.minutes - b.minutes;
            });
        }

        setDay(day);
    };

    return { day };
}
