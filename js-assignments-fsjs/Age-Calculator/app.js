const yearEle = document.getElementById("years");
const monthELe = document.getElementById("months");
const dayEle = document.getElementById("days");
const dob = document.getElementById("dob");
const desc = document.querySelector(".desc");
const error = document.querySelector(".error");

function getAge(e) {
  calcAge(e.target.value);
}

function calcAge(val) {
  const now = new Date();
  const userDob = new Date(val);

  let currentYear = now.getYear();
  let currentMonth = now.getMonth();
  let currentDate = now.getDate();

  let dobdobYear = userDob.getYear();
  let dobdobMonth = userDob.getMonth();
  let dobdobDate = userDob.getDate();

  let yearAge = currentYear - dobdobYear;

  let monthAge;
  let dateAge;
  if (currentMonth >= dobdobMonth) monthAge = currentMonth - dobdobMonth;
  else {
    yearAge--;
    monthAge = 12 + currentMonth - dobdobMonth;
  }

  if (currentDate >= dobdobDate) dateAge = currentDate - dobdobDate;
  else {
    monthAge--;
    dateAge = 31 + currentDate - dobdobDate;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  let age = {
    years: yearAge,
    months: monthAge,
    days: dateAge,
  };
  displayAge(age);
}

function displayAge(age) {
  const { years, months, days } = age;
  if (years < 0) {
    error.style.display = "block";
    desc.innerHTML = "";
    yearEle.innerText = "";
    monthELe.innerText = "";
    dayEle.innerText = "";
    return;
  }
  if (months == 0 && days == 0) desc.innerHTML = `Happy birth Day`;
  else desc.innerHTML = `Your Age is: ${years}`;

  yearEle.innerText = years;
  monthELe.innerText = months;
  dayEle.innerText = days;
}

dob.addEventListener("change", (e) => {
  getAge(e);
});
