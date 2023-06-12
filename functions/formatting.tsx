
// Format date as Month, Day, Year

export function formatDate(datetimeString: string) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];
  
    const date = new Date(datetimeString);
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
  
    const formattedDateTime = `${month} ${day}, ${year}`;
    return formattedDateTime;
  }