const dateTimeModifier = (date) => {
  let cleanedDate = date;

  let hour = date.substring(11, 13);
  let minute = date.substring(14, 16);

  cleanedDate = `${hour}:${minute}`;
  
  return cleanedDate;
}

export default dateTimeModifier;

// 2021-01-22T11:05:05.936Z