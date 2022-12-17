const folderName = document.getElementById("folder");
const url = document.getElementById("url");
const submitBtn = document.getElementById("btn");
const sectionEle = document.getElementById("section");

const myData = JSON.parse(localStorage.getItem("myData"));

const storeIntoLocalStorage = (data) => {
  localStorage.setItem("myData", JSON.stringify(data));
};

const addUrl = () => {
  if (!url.value) {
    alert("please enter a url");
    return;
  }
  if (folderName.value) {
    if (myData[folderName.value]) {
      myData[folderName.value] = [...myData[folderName.value], url.value];
    } else myData[folderName.value] = [url.value];
  } else myData["global"] = myData["global"].push(url.value);

  storeIntoLocalStorage(myData);
};

const createSection = (keyName = "global", data) => {
  const createDiv = document.createElement("div");
  const createTitle = document.createElement("h4");

  createTitle.innerText = keyName;

  createDiv.appendChild(createTitle);

  for (let i = 0; i < data.length; i++) {
    const a = document.createElement("a");
    a.href = data[i];
    a.style.display = "block";
    a.innerText = data[i];

    createDiv.appendChild(a);
  }
  sectionEle.appendChild(createDiv);
};

const loadUrl = () => {
  const keys = typeof myData == "object" ? Object.keys(myData) : [];
  for (const key of keys) {
    if (myData[key].length > 0) createSection(key, myData[key]);
  }
};

if (!Boolean(myData)) {
  storeIntoLocalStorage({ global: [] });
}

submitBtn.addEventListener("click", () => {
  addUrl();
  sectionEle.innerHTML = "";
  loadUrl();
  folderName.value = "";
  url.value = "";
});

loadUrl();
