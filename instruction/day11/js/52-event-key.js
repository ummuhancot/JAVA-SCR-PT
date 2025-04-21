// event.key bu durumda tuşlanan harfi verecektir. event.target.value ise event listener eklenmiş olan elementin değerini getirecektir.
document.querySelector("#input").addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    alert(`Tuşlara basıldı ve input değeri: ${event.target.value}`);
  }

  console.log(event);
});
