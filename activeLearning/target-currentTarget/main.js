const output = document.querySelector("#output");
function handleClick(e) {
    const logTarget = `target: ${e.target.tagName}`;
    const logCurrentTarget = `cuurentTarget:${e.currentTarget.tagName}`;
    output.textContent += `${logTarget}, ${logCurrentTarget}\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);