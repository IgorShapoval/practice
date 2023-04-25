const categoriesListRef = document.querySelector('#categories')


const numberOfCategories = categoriesListRef.children.length
console.log(`Number of categories: ${numberOfCategories}`);

const categoriesArr = [...categoriesListRef.children].forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`)
    console.log(`Elements: ${el.lastElementChild.children.length}`);
})

console.log(categoriesArr);



