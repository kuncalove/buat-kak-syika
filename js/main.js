
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('halo kak syika, sama-sama kak dan makasih juga kak udah mau ngeladenin dan temenan sm bokem ini, aku juga minta maaf kalo ada perkataan/perbuatanku yang ga nyaman buat kak syika, moga kita bisa terus temenan ya kak, w tunggu lu sempro+cumlaude 😁. sukses terus buat kak syika, ayo kak kapan aja aku bisa kalo ngopi mah :D').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
