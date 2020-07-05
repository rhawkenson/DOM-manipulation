// Add generic text to the document
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is more glorious text-content!';

container.appendChild(content);


//Add a red paragraph to the document
const redPara = document.createElement('p');
redPara.classList.add('red-paragraph');
redPara.textContent = "Hey I'm red!";
redPara.style.cssText = 'color: red';

container.appendChild(redPara);

//Add blue h3
const blueH3 = document.createElement('h3');
blueH3.classList.add('blueH3');
blueH3.textContent = "I'm a blue H3!";
blueH3.style.cssText = 'color: blue';

container.appendChild(blueH3);

//Add DIV with a black border and pink background
const div = document.createElement('div');
div.classList.add('div');
div.style.cssText = 'background-color: pink; border: 1px solid black';

//Add 2 children: h1 and p
const h1 = document.createElement('h1');
h1.classList.add('heading');
h1.textContent = "I'm in a div";

div.appendChild(h1);

const divPara = document.createElement('p');
divPara.classList.add('divPara');
divPara.textContent = "ME TOO!";

div.appendChild(divPara);

container.appendChild(div);