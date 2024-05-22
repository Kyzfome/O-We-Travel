document.addEventListener("DOMContentLoaded", async function () {
  var parentElement = document.getElementById("tourTable");

  try {
    const response = await fetch("http://localhost:3000/api/tour");

    if (!response.ok) {
      throw new Error("Помилка при завантаженні даних турів.");
    }

    const tours = await response.json();

    parentElement.innerHTML = "";

    tours.forEach(function (tour) {
      const tr = document.createElement("tr");

      const nameTD = document.createElement("td");
      const nameText = document.createTextNode(tour.name);
      nameTD.appendChild(nameText);

      const timeTD = document.createElement("td");
      const timeText = document.createTextNode(`${tour.time} днів`);
      timeTD.appendChild(timeText);

      const costTD = document.createElement("td");
      const costText = document.createTextNode(`$${tour.cost}`);
      costTD.appendChild(costText);

      const comentTD = document.createElement("td");
      const comentText = document.createTextNode(`${tour.coment}`);
      comentTD.appendChild(comentText);

      tr.appendChild(nameTD);
      tr.appendChild(timeTD);
      tr.appendChild(costTD);
      tr.appendChild(comentTD);

      parentElement.appendChild(tr);
    });
  } catch (error) {
    console.error("Помилка:", error);
    alert("Виникла помилка при завантаженні даних турів.");
  }
});
