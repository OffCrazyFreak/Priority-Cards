const statements = [
  "There's a fine line between genius and insanity from deck 1",
  "Statement 2 from deck 1",
  "Statement 3 from deck 1",
  "Statement 4 from deck 1",
  "Statement 5 from deck 1",
  "Statement 6 from deck 1",
  "Statement 7 from deck 1",
  "Statement 8 from deck 1",
  "Statement 9 from deck 1",
];

const sectionsArray = document.querySelectorAll(".section");

// const showSection = (sectionIndex) => {
//   sectionIndex = sectionIndex % sectionsArray.length;

//   for (let index = 0; index < sectionsArray.length; index++) {
//     if (index !== sectionIndex) {
//       sectionsArray[index].classList.add("hidden");
//     } else {
//       sectionsArray[index].classList.remove("hidden");
//     }
//   }
// };

// section 1

const decksArray = document.querySelectorAll(".card-deck");

const statementCard = document.querySelector(".order-card");
const cardText = document.querySelector(".card__text");

let deckChosenIndex;

for (let index = 0; index < decksArray.length; index++) {
  decksArray[index].addEventListener("click", () => {
    // console.log("Deck clicked: " + index);

    deckChosenIndex = index;

    // showSection(1);
  });
}

// section 2

const orderButtonArray = document.querySelectorAll(".order-button");

cardText.innerText = statements[0];
let statementIndex = 0;

let importantStatementsArray = [];

for (let index = 0; index < orderButtonArray.length; index++) {
  orderButtonArray[index].addEventListener("click", () => {
    if (index === 0) {
      importantStatementsArray.push(statements[statementIndex]);
    }

    if (statementIndex < statements.length - 1) {
      cardText.innerText = statements[++statementIndex];
    } else {
      displayResults();
      //   showSection(2);
      compareCards();
    }
  });
}

// section 3

let importantStatementsArrayOrdered = [];

const priorityButtonArray = document.querySelectorAll(".priority-button");

for (let index = 0; index < priorityButtonArray.length; index++) {
  priorityButtonArray[index].addEventListener("click", () => {
    // orderCards(i, j);
  });
}

const compareCards = () => {
  for (let i = 0; i < importantStatementsArray.length; i++) {
    for (let j = 1; j < importantStatementsArray.length; j++) {
      if (j <= i) {
        continue;
      }

      //   display card text i and j
    }
  }
};

// section 4

const resultsText = document.querySelector(".results");

const displayResults = () => {
  //   showSection(3);

  importantStatementsArray.forEach((statement) => {
    resultsText.innerText = resultsText.innerText + "\n" + statement;
  });
};
