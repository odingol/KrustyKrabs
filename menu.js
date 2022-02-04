var menuItems = [
  {
    name: "KRABBY PATTY x",
    count: 0,
  },

  {
    name: "KRABBY PATTY (WITH CHEESE) x",
    count: 0,
  },

  {
    name: "PRETTY PATTY SLIDERS x",
    count: 0,
  },

  { 
    name: "NASTY PATTY x",
    count: 0,
  },

  {
    name: "KRABBY PIZZA x",
    count: 0,
  },

  {
    name: "SALAD x",
    count: 0,
  },

  {
    name: "PEAS (IN A CAN) PIE x",
    count: 0,
  },

  {
    name: "SEANUT BRITTLE x",
    count: 0,
  },

  {
    name: "DIET DR. KELP x",
    count: 0,
  },

  {
    name: "WATER x",
    count: 0,
  },

  {
    name: "KELP SHAKE x",
    count: 0,
  },

  {
    name: "TEA x",
    count: 0,
  },
];

var section = document.querySelector(".style-section");

section.addEventListener("click", function (event) {
  if (event.target.classList.contains("minus")) {
    var index = event.target.dataset.number;
    var menuItem = menuItems[index];
    if (menuItem.count > 0) {
      menuItem.count--;
    }
    var textBox = document.querySelector("#count-box" + index);
    textBox.textContent = menuItem.count;
    localStorage.setItem(menuItem.name, menuItem.count);
  }

  if (event.target.classList.contains("add")) {
    var index = event.target.dataset.number;
    var menuItem = menuItems[index];
    if (menuItem.count < 20) {
      menuItem.count++;
    }
    var textBox = document.querySelector("#count-box" + index);
    textBox.textContent = menuItem.count;
    localStorage.setItem(menuItem.name, menuItem.count);
  }
});



