function cakes(recipe, available) {
     let numbers = [];
    for(let  ingredient in recipe) {
      if(!available[ingredient]) return 0;
      numbers.push(Math.floor(available[ingredient] / recipe[ingredient]));
    }
    return Math.min(...numbers);
  }