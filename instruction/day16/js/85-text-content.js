const pEl = document.querySelector("p");

console.log(pEl);

console.log(pEl.innerText); // JavaScript, React NextJs
// class, stillendirmeleri göz önünde bulundurur.

console.log(pEl.innerHTML); // JavaScript, React <span style="color:blue; display: none;">Bootstrap</span> NextJs

console.log(pEl.textContent); // JavaScript, React Bootstrap NextJs
// Elamanın içerisindekilere bakar, ne bulursa alır. Bu yüzden biraz daha hızlıdır.
