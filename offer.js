const allItem = document.querySelectorAll(".doEbco a");
let myArry = [];
let bitLists = "";
for (let i = 0; i < allItem.length; i++) {
  const item = allItem[i];
  myArry.push([item.href, item.textContent]);
  bitLists += `${item.textContent}さん<br>`;
}

let imgTag = "";
if (addImageUrl) {
  imgTag = `<img src="${addImageUrl}" width="200"><br>`;
}

const ran = Math.floor(Math.random() * myArry.length);
const newDiv = document.createElement("div");
newDiv.innerHTML = `
=====================<br>
Botによる抽選結果<br>
=====================<br>
${imgTag}
当選者：<a href="${myArry[ran][0]}" target="_blank" style="color:blue">${
  myArry[ran][1]
}</a>さん 🎉<br>
<br>
=====================<br>
応募者一覧（合計入札回数：${myArry.length}）<br>
=====================<br>
${bitLists}
`;

newDiv.style.color = "#444";
newDiv.style.padding = "2em";

document.body.insertBefore(newDiv, document.body.firstChild);
