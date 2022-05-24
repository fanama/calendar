import { Evenenent } from '../domain/event';
import events from '../infra/mock/input.json';
export function getEvents(): Evenenent[] {
    return events.map((e) => {
        const hourString = e.start.split(':')[0];
        const minutesString = e.start.split(':')[1];
        return {
            ...e,
            indice: 0,
            hours: parseInt(hourString),
            minutes: parseInt(minutesString),
        };
    });
}
