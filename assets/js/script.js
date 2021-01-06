/* Author: 

*/

let birthdaysText = document.querySelector("textarea");
console.log(birthdaysText);
birthdaysText.value = `[
    {"name": "Tyrion Lannister",
    "birthday" : "1/01/1978"},
    {"name": "Jon Snow",
    "birthday" : "07/08/2011"},
    {"name": "Cerici Lannister",
    "birthday" : "12/06/1978"},
    {"name": "Danarys Targereon",
    "birthday" : "1/01/1990"},
    {"name": "Arya Stark",
    "birthday" : "1/01/1990"},
    {"name": "Hodor Stark",
    "birthday" : "2/01/1990"},
    {"name": "Hodor Stark",
    "birthday" : "2/01/1990"},
    {"name": "Hodor Stark",
    "birthday" : "4/12/2000"},
    {"name": "Hodor Stark",
    "birthday" : "2/01/2003"},
    {"name": "Jamie Lannistor",
    "birthday" : "2/01/1990"},
    {"name": "Hodor Stark",
    "birthday" : "3/08/1990"},
    {"name": "King Joffery",
    "birthday" : "1/04/1990"}
  ]`;
// convert to JSON
let birthdays = JSON.parse(birthdaysText.value.toString());
console.log(birthdays);

let calcButton = document.querySelector("input[type=submit]");
let year = document.querySelector("#year").value;

let birthdayList = document.querySelectorAll(".birthdays");
// console.log("ul", birthdayList);

// moment.updateLocale("en", {
//   week: {
//     dow: 1,
//     doy: 1,
//   },
// });

let calc = () => {
  year = document.querySelector("#year").value;
  birthdays = JSON.parse(birthdaysText.value.toString());
  birthdayList.forEach((item) => {
    item.innerHTML = "";
  });
  birthdays.map((item) => {
    let birthday = moment(item.birthday);
    birthday = birthday.year(year);
    // console.log(moment(birthday));
    let day = moment(birthday).day() - 1;
    if (day == -1) {
      day = 6;
    }
    let acronym = getAcronym(item.name);
    let newLi = document.createElement("li");
    newLi.innerHTML = `${acronym}`;
    birthdayList[day].append(newLi);
  });
  findLength();
};

calc();

function findLength() {
  birthdayList.forEach((item) => {
    item.classList.remove("empty");
    let liList = item.querySelectorAll("li");
    let length = Object.keys(liList).length;
    switch (length) {
      case 0:
        item.classList.add("empty");
        break;
      case 1:
        giveClass(liList, "big");
        break;
      case 2:
      case 3:
      case 4:
        giveClass(liList, "medium");
        break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        giveClass(liList, "small");
        break;
      default:
        break;
    }
  });
}

function giveClass(nodes, className) {
  nodes.forEach((li) => {
    li.classList = className;
  });
}

calcButton.addEventListener("click", calc);

function getAcronym(string) {
  let str = string;
  let matches = str.match(/\b(\w)/g);
  let acronym = matches.join("");
  return acronym;
}
