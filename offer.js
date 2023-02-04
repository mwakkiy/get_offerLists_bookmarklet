const allItem = document.querySelectorAll(".doEbco a");
let myArry = [];
let bitLists = "";
for (let i = 0; i < allItem.length; i++) {
  const item = allItem[i];
  myArry.push([item.href, item.textContent]);
  bitLists += `${item.textContent}さん<br>`;
}

const ran = Math.floor(Math.random() * myArry.length);
const newDiv = document.createElement("div");
newDiv.innerHTML = `
=====================<br>
抽選結果<br>
=====================<br>
<a href="${myArry[ran][0]}" target="_blank">${myArry[ran][1]}</a>さん<br>
<br>
<br>
=====================<br>
応募者<br>
=====================<br>
${bitLists}
`;

document.body.insertBefore(newDiv, document.body.firstChild);
