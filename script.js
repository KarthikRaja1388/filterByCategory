const products = [
  { name: "Laptop", category: "Computers" },
  { name: "Smartphone", category: "Phones" },
  { name: "Smartwatch", category: "Wearables" },
  { name: "Television", category: "TVs" },
  { name: "Tablet", category: "Computers" },
  { name: "Headphones", category: "Audio" },
  { name: "Camera", category: "Cameras" },
  { name: "Gaming Console", category: "Gaming" },
  { name: "Wireless Earbuds", category: "Audio" },
  { name: "Home Assistant", category: "Smart Home" },
];

function filterByCategory(arr) {
  function filterInner(prodCategory) {
    const filteredArray = arr.filter(
      (element) => element.category === prodCategory
    );
    return filteredArray;
  }
  return filterInner;
}

console.log(filterByCategory(products)("Audio"));
