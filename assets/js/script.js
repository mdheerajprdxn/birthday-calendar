import { data } from "./data.js";
import {
  birthdaysText,
  calcButton,
  birthdayList,
  errorMsg,
} from "./elements.js";
import { findLength, getAcronym } from "./functions.js";

window.onload = function () {
  // Put the JSON data from data file in textarea
  birthdaysText.value = data;

  // convert to JSON

  let birthdays = JSON.parse(birthdaysText.value.toString());

  let calc = (e) => {
    if (e) {
      e.preventDefault();
    }
    let year = document.querySelector("#year").value;
    try {
      birthdays = JSON.parse(birthdaysText.value.toString());
      errorMsg.innerHTML = "";
    } catch (error) {
      console.log(error);
      errorMsg.innerHTML = "Invalid JSON";
    }

    birthdayList.forEach((item) => {
      item.innerHTML = "";
    });

    birthdays.map((item) => {
      let birthday = moment(item.birthday);
      birthday = birthday.year(year);
      // we have to adjust for first day to be Mon instead of default Sunday
      let day = moment(birthday).day() - 1;
      if (day == -1) {
        day = 6;
      }
      // Get the first letter of name and last name
      let acronym = getAcronym(item.name);

      // Create new Li to append to the UL
      let newLi = document.createElement("li");

      newLi.innerHTML = ` <span class='name'> ${acronym} </span>`;
      birthdayList[day].append(newLi);
    });
    findLength();
  };

  // call calculate on first load
  calc();

  calcButton.addEventListener("click", calc);
};
