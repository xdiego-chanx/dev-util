const input = document.getElementById("input");
const output = document.getElementById("output");
// let i = 0; 
let timeoutid;

input.addEventListener("input", (event) => {
    clearTimeout(timeoutid);

    const target = event.currentTarget;
    input.style.height = "auto";
    output.style.height = "auto";
    
    input.style.height = target.scrollHeight + "px";
    output.style.height = target.scrollHeight + "px";

    timeoutid = setTimeout(() => {
    }, 1000);
});