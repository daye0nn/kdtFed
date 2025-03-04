const xhr = new XMLHttpRequest();

xhr.open("GET", "student.json", true);
xhr.send();

const rederHTML = (contents) => {
  contents.forEach((content) => {
    let output = `
    <h2>${content.name}</h2>`;
  });
};

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const students = JSON.parse(xhr.responseText);
    rederHTML(students);
  }
});
