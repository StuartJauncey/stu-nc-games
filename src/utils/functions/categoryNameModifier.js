const categoryNameModifier = (category) => {
  const name = category;
  const nameArr = name.split("-");
  const capitalizedArr = nameArr.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  return capitalizedArr.join(" ");
}

export default categoryNameModifier;