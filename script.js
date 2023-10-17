document.addEventListener("DOMContentLoaded", function () {
  const inventoryForm = document.getElementById("inventoryForm");
  const inventoryList = document.getElementById("inventoryList");

  inventoryForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const itemName = document.getElementById("itemName").value;
      const quantity = document.getElementById("quantity").value;

      const listItem = document.createElement("li");
      listItem.innerHTML = `
          <span>${itemName}</span>
          <span>${quantity}</span>
      `;

      inventoryList.appendChild(listItem);

      // Clear the form
      document.getElementById("itemName").value = "";
      document.getElementById("quantity").value = "";
  });
});
