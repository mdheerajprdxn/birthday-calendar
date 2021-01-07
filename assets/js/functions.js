import { birthdayList } from "./elements.js";

export let getAcronym = (string) => {
  let str = string;
  let matches = str.match(/\b(\w)/g);
  let acronym = matches.join("");
  return acronym;
};

export let giveClassToChildren = (nodes, className) => {
  nodes.forEach((li) => {
    li.classList = className;
  });
};

// Find the total no of bdays in the day and decide size according to that
export function findLength() {
  birthdayList.forEach((item) => {
    item.classList.remove("empty");
    let liList = item.querySelectorAll("li");
    let length = Object.keys(liList).length;
    if (length > 4) {
      giveClassToChildren(liList, "small");
    } else if (length > 1) {
      giveClassToChildren(liList, "medium");
    } else if (length == 1) {
      giveClassToChildren(liList, "big");
    } else {
      item.classList.add("empty");
    }

    let countText = item.nextElementSibling;
    if (length == 0) {
      countText.innerHTML = `No birthdays`;
    } else if (length == 1) {
      countText.innerHTML = `${length} birthday`;
    } else {
      countText.innerHTML = `${length} birthdays`;
    }

    // switch (length) {
    //   case 0:
    //     item.classList.add("empty");
    //     break;
    //   case 1:
    //     giveClassToChildren(liList, "big");
    //     break;
    //   case 2:
    //   case 3:
    //   case 4:
    //     giveClassToChildren(liList, "medium");
    //     break;
    //   case 5:
    //   case 6:
    //   case 7:
    //   case 8:
    //   case 9:
    //   case length > 9:
    //     giveClassToChildren(liList, "small");
    //     break;
    //   default:
    //     break;
    // }
  });
}
