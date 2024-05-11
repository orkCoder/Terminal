document.addEventListener("DOMContentLoaded", function () {
  let hrs = document.getElementById("hours");
  let min = document.getElementById("minutes");
  let sec = document.getElementById("seconds");

  setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML =
      (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML =
      (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML =
      (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
  }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  //retrieve DOM content
  let input = document.getElementById("commandinput");
  let output = document.getElementById("output-container");
  let terminal = document.getElementById("terminalBody");
  let inputOut = document.getElementById("input-output");

  var historyCommands = [];

  const allCommands = {
    help: function () {
      const com = ["[help]", "[about]", "[projects]", "[contact]"];

      function delayList(index) {
        if (index < com.length) {
          output.innerHTML += `<br> ${com[index]}`;
          index++;
        }
        setTimeout(() => {
          delayList(index);
        }, 300);
      }

      delayList(0);
    },
  };

  function newInput() {
    inputDiv = document.createElement("div");
    inputDiv.className = "input-container";
    inputDiv.innerHTML = "<span>$</span>";

    inputOut.appendChild(inputDiv);
    inputDiv.style.position = "relative";
    inputDiv.style.top = "1rem";
  }

  input.addEventListener("keydown", function (e) {
    input.focus();

    if (e.key === "Enter" || e.keycode === 13) {
      let inputcommand = input.value.trim();
      console.info("command:", inputcommand);

      if (inputcommand.toLowerCase() === "help") {
        console.warn("Help has been said");

        allCommands.help();
      }

      input.disabled = true;
      newInput();
    }
  });
});