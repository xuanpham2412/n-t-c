document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.querySelector(".search-box");
  const places = document.querySelectorAll(".place");

  searchBox.addEventListener("input", function () {
    const keyword = searchBox.value.toLowerCase();

    places.forEach((place) => {
      const title = place.querySelector("h2").textContent.toLowerCase();
      const desc = place.querySelector("p").textContent.toLowerCase();

      if (title.includes(keyword) || desc.includes(keyword)) {
        place.style.display = "block";
      } else {
        place.style.display = "none";
      }
    });
  });
});
