export const dateFormatter = (inputDate) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const dateObj = new Date(inputDate);
    const formattedDate = dateObj.toLocaleDateString('en-US', options);
    
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    
    return `${formattedDate}, ${formattedTime}`;
  }