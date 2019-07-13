'use strict';

function clickOut() {
  $(docmuent).on('click', e => {
    const node = $(e.target);

    const menuQuery = node.closest('ul')[0];
    const menu = $('.nav-links-container ul');

    const buttonQuery = node.closest('button')[0];

    const btn = $('#hamburger').closest('button');
    const hideBtn = btn.hasClass('hidden');

    if (menuQuery !== menu[0] && buttonQuery !== btn[0] && !hideBtn ) {
      menu.attr('class', 'hidden');
    }
  });
}

function navLink() {
  $('.nav-links-container a').on('click', e => {
    const section = $(e.target).attr('goTo');
    const height = $(section).offset().top;

    $('.nav-links-container ul').toggleClass('hidden');
    window.scrollTo(0, height - 52);
  });
}

function navButton() {
  $('#hamburger').on('click', () => {
    $('.nav-links-container ul').toggleClass('hidden');
  });
}

function mapItem({name, icon}) {
  return `
    <li>
      ${name}
      <img class='tech-icon' src='${icon}' alt='Icon for ${name}'/>
    </li>
  `;
}

function genItems(items) {
  return items.map(mapItem).join('');
}

function mapTech({tech, items}) {
  return `
    <h4 class='tech-h4'>${tech}</h4>
    <ul class='tech-list'>${genItems(items)}</ul>
  `;
}

function genTech(techStack) {
  return techStack.map(mapTech).join('');
}

function mapProjects({project, screenshot, desc, demo, code, techStack}) {
  return `
    <div class='project-container'>
      <img 
        class='screenshot 
        src='${screenshot}' 
        alt='Screenshot of "${project}"' />
      <h2>${project}</h2>
      <h3>Description</h3>
      <p>${desc}</p>
      <h3>Tech Stack</h3>
      ${genTech(techStack)}
      <div>
        <a href="${demo}" target="_blank" rel="noopener noreferrer">Demo</a>
        <a href="${code}">Code</a>
      </div>
    </div>
  `;
}

function genProjects(data) {
  return data.map(mapProjects).join('');
}

function renderProjects() {
  $('.projects').html(`
    ${genProjects(data)}
  `);
}

function docReady() {
  clickOut();
  renderProjects();
  navButton();
  navLink();
}

$(docReady());