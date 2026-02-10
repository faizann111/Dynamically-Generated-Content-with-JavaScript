function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const numDisplay = document.getElementById("randomNumber");

  // Clear previous content
  numDisplay.innerHTML = "";

  // Create new paragraph element
  const newPara = document.createElement("p");
  newPara.innerHTML = "Random Number: " + randomNumber;

  // Append to display
  numDisplay.appendChild(newPara);
}

function addItem() {
  const itemList = document.getElementById("itemList");
  const newItem = document.createElement("li");
  newItem.innerHTML = "Item " + (itemList.children.length + 1);
  itemList.appendChild(newItem);
}

function removeItem() {
  const itemList = document.getElementById("itemList");
  if (itemList.children.length > 0) {
    itemList.removeChild(itemList.lastChild);
  }
}
