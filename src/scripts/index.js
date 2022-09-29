import "../styles/main.scss";
import "babel-polyfill";

const modal = document.getElementById("myModal");

function after60Seconds() {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(modal);
    }, 1000 * 6);
  });
}

const promiseOfModal = async () => {
  const result = await after60Seconds();
  console.log("User has been on the page for 60 seconds", result);
  modal.style.display = "block";
};

promiseOfModal();

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Subscribe Alert

const continueB = document.querySelector("#continue");
continueB.addEventListener("mouseover", () => {
  subscribePromise();
});

// console.log(continueButton);

function subscribe() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(continueB);
    }, 100 * 2);
  });
}

const subscribePromise = async () => {
  const result = await subscribe(continueB);
  result.style.backgroundColor = "teal";
  alert("Continue to subscription");
};
