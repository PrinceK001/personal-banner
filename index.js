import './style.css';
const title = 'Life as a Techie';
const phases = ['Learn', 'Innovate', 'Repeat'];
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1 class = 'title'>${title}</h1>
                    <div class = "life">
                      <ol id = "phases"></ol>
                    </div>`;
const olElem = document.getElementById('phases');
phases.forEach((phase, i)=>{
  const newEle = document.createElement('li');
  newEle.textContent = phase;
  olElem.appendChild(newEle);
});