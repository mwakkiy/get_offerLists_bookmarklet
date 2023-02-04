const getOffer = function() {
  const allItem = document.querySelectorAll(".doEbco a");
  let myArry = [];
  for (let i = 0; i < allItem.length; i++) {
    const item = allItem[i];
    // console.log(item.href, item.textContent);
    myArry.push([item.href, item.textContent]);
  }
  console.log(myArry);
  console.log("=======抽選=======");
  console.log(myArry[Math.floor(Math.random() * myArry.length)]);
};
