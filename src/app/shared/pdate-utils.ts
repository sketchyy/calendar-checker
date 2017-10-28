import {PDate} from './model/p-date';

export function equals(a: PDate, b: PDate): boolean {
  return (a != null && b != null) &&
    (a.day === b.day) &&
    (a.month === b.month) &&
    (a.year === b.year);
}
