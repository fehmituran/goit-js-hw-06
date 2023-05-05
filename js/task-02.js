const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientList = document.querySelector('#ingredients');

const list = document.createElement('ul');


for (const ingredient of ingredients) {
  const liIng = document.createElement('li');
  liIng.textContent = ingredient;
  list.append(liIng);
}

ingredientList.append(list);
