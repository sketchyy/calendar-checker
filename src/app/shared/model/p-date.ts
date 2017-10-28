export interface PDate {
  day: number;
  month: number;
  year: number;
  today: boolean;
  selectable: boolean;

  /* Props for this App */
  selected: boolean;
  disabled: boolean;
}
