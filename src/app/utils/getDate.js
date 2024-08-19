export const getDate =  (date) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];  
  const month = parseInt(date[5]+date[6])
  const modifiedDate = date[8]+date[9] + " " + months[month-1] + " " + date[2]+date[3]
  return modifiedDate
}