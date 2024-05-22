document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    var name = document.getElementById("Tour-name").value;
    var time = document.getElementById("Tour-time").value;
    var cost = document.getElementById("Tour-cost").value;
    var coment = document.getElementById("Tour-coment").value;

    if (name === "" || time === "" || cost === "" || coment === "") {
      alert("Будь ласка заповніть всі поля форми.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/tour/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, time, cost, coment }),
      });

      if (!response.ok) {
        throw new Error("Виникла помилка при збереженні даних.");
      }

      alert("Дані успішно збережено до бази даних.");
    } catch (error) {
      console.error("Помилка:", error);
      alert("Виникла помилка при збереженні даних.");
    }
  });
});
