import './style.css';
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1 class='title'>Life as a Techie</h1>
                    <div class = "life">
                      <ol id="phases"></ol>
                    </div>`;
const phases = ['Learn', 'Innovate', 'Repeat'];
const olElem = document.getElementById('phases');
phases.forEach((phase, i)=>{
  const newEle = document.createElement('li');
  const newTextEle = document.createTextNode(phase);
  newEle.appendChild(newTextEle);
  olElem.appendChild(newEle);
});

