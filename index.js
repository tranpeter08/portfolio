'use strict';

function clickOut() {
  $(document).on('click', e => {
    const menu = $('#nav-menu');
    const isCollapse = menu.hasClass('collapse');

    if (!isCollapse) {
      const node = $(e.target)
      const nodeMenu = node.closest('#nav-menu')[0];
      const nodeBtn = node.closest('#hamburger')[0];

      const hamburger = $('#hamburger')[0];

      if (nodeMenu !== menu[0] && nodeBtn !== hamburger) {
        menu.addClass('collapse');
      }
    }
  });
}

function navLink() {
  $('.nav-links-container a').on('click', e => {

    $('.nav-links-container ul').addClass('collapse');
  });
}

function navButton() {
  $('#hamburger').on('click', () => {
    $('.nav-links-container ul').toggleClass('collapse');
  });
}

function genLink(href, name) {
  return `
    <a href="${href}" target="_blank" rel="noopener noreferrer">${name}</a>
  `
}

function mapItem({name, icon}) {
  return `
    <li>
      <img 
        class='tech-icon' 
        title='${name}' 
        aria-label=${name} 
        src='${icon}' 
        alt='Icon for ${name}'
        tabindex=0/>
    </li>
  `;
}

function genItems(items) {
  return items.map(mapItem).join('');
}

function mapTech({tech, items}) {
  return `
    <div class='stack-container'>
      <h3>${tech}</h3>
      <ul class='tech-list'>${genItems(items)}</ul>
    </div>
  `;
}

function genTech(techStack) {
  return techStack.map(mapTech).join('');
}

function mapProjects({project, screenshot, desc, demo, code, techStack}) {
  return `
    <div class='project-container'>
      <div class='img-container'>
        <img 
          class='screenshot' 
          src='${screenshot}' 
          alt='Screenshot of "${project}"' />
      </div>  
      <div class='descr-container'>
          <h2>${project}</h2>
          <p><span class="tab"></span>${desc}</p>
      </div>      
      <div class='tech-container'>
        <div class='stacks-container'>
          ${genTech(techStack)}
        </div>
      </div>
      <div class='links-container'>
        ${genLink(demo, 'Demo')}
        ${genLink(code, 'Code')}
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

$(docReady);