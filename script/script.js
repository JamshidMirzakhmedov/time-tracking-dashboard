const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
let boxContent;
let Data = [];
let content = document.querySelector(".col-xl-9");
daily.addEventListener("click", getDaily);
weekly.addEventListener("click", getWeekly);
monthly.addEventListener("click", getMonthly);

function getTimeTracking() {
  fetch("/data.json")
    .then((res) => res.json())
    .then((data) => {
      Data = data;
      boxContent = "";
      document.querySelector(".active").classList.remove("active");
      document.getElementById("weekly").classList.add("active");
      Data.map((data) => {
        boxContent += ` <div class="col-xl-3 tab-item border  ${data.title.toLowerCase()}">
        <div class="tab-item-info">
          <p id="title">${data.title}</p>
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fill-rule="evenodd"
            />
          </svg>
          <div class="info">
            <h1 class="hrs">${data.timeframes.weekly.current}</h1>
            <p class="period">last weeks - ${
              data.timeframes.weekly.previous
            }hrs</p>
          </div>
        </div>
      </div>`;
      });
      content.innerHTML = boxContent;
    });
}

getTimeTracking();

function getDaily() {
  boxContent = "";
  document.querySelector(".active").classList.remove("active");
  document.getElementById("daily").classList.add("active");
  Data.map((data) => {
    boxContent += ` 
    <div class="col-xl-3 tab-item border  ${data.title.toLowerCase()}">
      <div class="tab-item-info">
      <h1 id="title">${data.title}</h1>
      <span><img src="/images/icon-ellipsis.svg" alt="" /></span>
        <div class="info">
          <h1 class="hrs">${data.timeframes.daily.current}</h1>
          <p class="period">last weeks - ${
            data.timeframes.daily.previous
          }hrs</p>
        </div>
      </div>
    </div>`;
  });
  content.innerHTML = boxContent;
}
function getWeekly() {
  boxContent = "";
  document.querySelector(".active").classList.remove("active");
  document.getElementById("weekly").classList.add("active");
  Data.map((data) => {
    boxContent += `
    <div class="col-xl-3 tab-item border  ${data.title.toLowerCase()}">
      <div class="tab-item-info">
      <h1 id="title">${data.title}</h1>
      <span><img src="/images/icon-ellipsis.svg" alt="" /></span>
        <div class="info">
          <h1 class="hrs">${data.timeframes.weekly.current}</h1>
          <p class="period">last weeks - ${
            data.timeframes.weekly.previous
          }hrs</p>
        </div>
      </div>
    </div>`;
  });
  content.innerHTML = boxContent;
}
function getMonthly() {
  boxContent = "";
  document.querySelector(".active").classList.remove("active");
  document.getElementById("monthly").classList.add("active");
  Data.map((data) => {
    boxContent += `
    <div class="col-xl-3 tab-item border  ${data.title.toLowerCase()}">
      <div class="tab-item-info">
      <h1 id="title">${data.title}</h1>
      <span><img src="/images/icon-ellipsis.svg" alt="" /></span>
        <div class="info">
          <h1 class="hrs">${data.timeframes.monthly.current}</h1>
          <p class="period">last weeks - ${
            data.timeframes.monthly.previous
          }hrs</p>
        </div>
      </div>
    </div>`;
  });
  content.innerHTML = boxContent;
}

function makeInputVerifier(minimum, maximum) {
  // write your code here

  return function verify(inputValue) {
    if (inputValue < minimum) {
      console.log("Input is less than minimum value");
    } else if (inputValue >= minimum && inputValue <= maximum) {
      console.log("Input is in range");
    } else if (inputValue > maximum) {
      console.log("Input is more than maximum value");
    }
  };
}
