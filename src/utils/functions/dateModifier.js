const dateModifier = (date) => {
  let cleanedDate = date;

  let day = date.substring(8, 10);
  let month = date.substring(5, 7);
  let year = date.substring(2, 4);

  cleanedDate = `${day}-${month}-${year}`;
  
  return cleanedDate;
}

export default dateModifier;

// 2021-01-22T11:05:05.936Z