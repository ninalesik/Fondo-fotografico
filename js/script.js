const nav = document.querySelector(".nav-bottom");
const navBtn = document.getElementById("burger-btn");
const close = document.querySelector(".close");

navBtn.onclick = () => {
  nav.style.display = "block";
  close.style.display = "block";
  navBtn.style.display = "none";
};

close.onclick = () => {
  nav.style.display = "none";
  close.style.display = "none";
  navBtn.style.display = "block";
};

const selectBtns = document.querySelectorAll(".select-btn");

selectBtns.forEach((selectBtn) => {
  selectBtn.addEventListener("click", () => {
    const selectBox = selectBtn.closest(".select-box");
    const selectContent = selectBox.querySelector(".select-content");
    const searchInput = selectContent.querySelector(".select-content-input");

    selectBox.classList.toggle("active");
    selectContent.classList.toggle("active");
    selectBtn.classList.toggle("active");
    searchInput.classList.toggle("active");
  });
});

let pagines = document.querySelectorAll(".numb");
pagines.forEach((pagine) => {
  pagine.addEventListener("click", () => {
    pagines.forEach((p) => {
      p.classList.remove("active");
    });
    pagine.classList.add("active");
  });
});

let http = new XMLHttpRequest();
http.open("get", "./js/archive.json", true);
http.send();

http.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let cards = JSON.parse(this.responseText);
    let output = "";
    for (let card of cards) {
      output += `
      <div class="card">
      <div class="image-container">
          <img src="${card.image}" alt="${card.image}">
          <div class="text-overlay">
              <p>${card.label}</p>
          </div>
      </div>
      <div class="card-details">
          <h2 class="card-title">${card.title}</h2>
          <p class="card-year">${card.year}</p>
          <hr class="card-line">
          <p class="card-library">${card.library}</p>
      </div>
  </div>
      `;
    }
    document.querySelector(".cards-container").innerHTML = output;
  }
};
