// default export
export default function render(values) {
  const ul = document.createElement('ul');

  for (let v of values) {
    const li = document.createElement('li');
    li.innerHTML = v;
    ul.appendChild(li);
  }

  return ul;
};
