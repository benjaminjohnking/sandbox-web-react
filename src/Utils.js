import { format } from 'date-fns';

export const getDisplayDate = (dateString) => {
  let displayDate = 'Present';

  if(dateString) {
    const date = new Date(dateString);
    date.setMonth(date.getMonth() + 1);
    displayDate = format(date, 'MMMM yyyy');
  }

  return displayDate;
}