'use strict';

function mapItem({name, icon}) {
  return `
    <li>
      ${name}
      <img class='tech-icon' src='${icon}' alt='Icon for ${name}'/>
    </li>`
}

function genItems(items) {
  return items.map(mapItem).join('')
}

function mapTech({tech, items}) {
  return `
    <h4 class='tech-h4'>${tech}</h4>
    <ul class='tech-list'>${genItems(items)}</ul>
  `
}

function genTech(techStack) {
  return techStack.map(mapTech).join('');
}

function mapProjects({project, screenshot, desc, techStack}) {
  return `
    <img class='screenshot src='${screenshot}' alt='Screenshot of "${project}"' />
    <h2>${project}</h2>
    <h3>Description</h3>
    <p>${desc}</p>
    <h3>Tech Stack</h3>
    ${genTech(techStack)}
  `
}

function genProjects(data) {
  return data.map(mapProjects).join('');
}

function renderProjects() {
  $('.projects').html(`
    <h1>Projects</h1>
    ${genProjects(data)}
  `);
}

function docReady() {
  renderProjects();
}

$(docReady())