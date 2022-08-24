let addDishToCourse = (function(courseName, dishName, dishPrice)
{
    let dish = `${dishName} is £${dishPrice}`;
    if (courseName === 'appetizers')
    {
      menu.courses.appetizers.push(dish);
    }
    else if (courseName === 'mains')
    {
      menu.courses.mains.push(dish);
    }
    else if (courseName === 'desserts')
    {
      menu.courses.desserts.push(dish);
    } 
});

let getRandomDishFromCourse = (function(courseName)
{
  if (courseName === 'appetizers')
  {
    let dishes = Math.random(menu.courses.appetizers.length);
    return Math.floor(dishes);
  }
  else if (courseName === 'mains')
  {
    let dishes = Math.random(menu.courses.mains.length);
    return Math.floor(dishes);
  }
  else if (courseName === 'desserts')
  {
    let dishes = Math.random(menu.courses.desserts.length);
    return Math.floor(dishes);
  }
});

let totalPrice = 0;

function generateRandomMeal()
{
  if (getRandomDishFromCourse(courseName) === 'appetizers')
  {
    let appetizer = dish.dishName;
    return totalPrice = totalPrice + dish.dishPrice;
  } 
  else if (getRandomDishFromCourse(courseName) === 'mains')
  {
    let main = dish.dishName
    return totalPrice = totalPrice + dish.dishPrice;
  } 
  else if (getRandomDishFromCourse(courseName) === 'desserts')
  {
    let dessert = dishName
    return totalPrice = totalPrice + dish.dishPrice;
  }
  console.log(`Your meal is ${appetizer}, ${main} & ${dessert}, the total cost is ${totalPrice}`);
};

let menu = 
{
  courses:
  {
    appetizers: [],
    mains: [],
    desserts: []
  },
  dish: addDishToCourse,
  random: getRandomDishFromCourse
};


addDishToCourse('appetizers', 'fondu', 9);
addDishToCourse('appetizers', 'prawns', 8);
addDishToCourse('appetizers', 'cauli', 7);
addDishToCourse('appetizers', 'eggs', 6);
addDishToCourse('appetizers', 'avo', 5);
addDishToCourse('appetizers', 'bacon', 4);

addDishToCourse('mains', 'pizza', 24);
addDishToCourse('mains', 'ribeye', 34);
addDishToCourse('mains', 'ragu', 21);
addDishToCourse('mains', 'risotto', 12);
addDishToCourse('mains', 'calzone', 32);
addDishToCourse('mains', 'caviar', 77);

addDishToCourse('desserts', 'cheesecake', 10);
addDishToCourse('desserts', 'vanilla', 9);
addDishToCourse('desserts', 'chocolate', 11);
addDishToCourse('desserts', 'sponge', 12);

generateRandomMeal();
