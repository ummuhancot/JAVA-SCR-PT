function calculate() {
  // Genişlik ve yükseklik için elementlere erişim:
  const widthEl = document.querySelector("#width");
  const heightEl = document.querySelector("#height");

  // Genişlik ve yükseklik için girilen değerleri sabitlere atama:
  let width = +widthEl.value;
  let height = +heightEl.value;

  console.log(width, height); // 0 0

  width = width || null;
  // if(!width){
  //     width = null;
  // }

  height = height || null;
  // if(!height){
  //     height = null;
  // }

  const area = (width ?? 10) * (height ?? 5);
  console.log(area);
  document.querySelector("#result").innerText = area;
}
