import $ from 'jquery';
import 'bootstrap';
import projectData from '../data/projectsData';

let cardState = 'off';

const hideForProjects = () => {
  $('#techPage').hide();
  $('#resumePage').hide();
  $('#bioPage').hide();
};

const clipForProjects = () => {
  $('#techPage').toggle('.clipMe');
  $('#resumePage').toggle('.clipMe');
  $('#bioPage').toggle('.clipMe');
};

const clickedCard = () => {
  $('.cardHeader').on('click', ((event) => {
    if (cardState === 'off') {
      $('.cardBody').hide();
      $(event.target).siblings().show();
      cardState = 'on';
    } else {
      $(event.target).siblings().hide();
      cardState = 'off';
    }
  }));
};

const createProjectCards = () => {
  projectData.getProjects().then((projects) => {
    console.log(projects);
    let tempString = '';
    for (let i = 0; i < projects.length; i += 1) {
      if (projects[i].available === true) {
        const compArray = [];
        const modalArray = [];
        Object.keys(projects[i].components).forEach((component) => {
          compArray.push(projects[i].components[component]);
          modalArray.push(component);
        });
        let componentString = '';
        for (let j = 0; j < compArray.length; j += 1) {
          componentString += `<button class='btn btn-sm btn-info compButton' data-toggle="modal" data-target="#${modalArray[j]}">${compArray[j]}</button>`;
        }
        tempString += `<div class='card projectCard'>
                        <button class='btn btn-primary cardHeader'>${projects[i].title}</button>
                        <div class='cardBody' style='display:none'>
                          <img src='${projects[i].screenshot}' class='cardScreen'>
                          <p class='cardPar'>${projects[i].description}</p>
                          <p class='cardPar'>Technologies Used: ${projects[i].technologiesUsed}</p>
                          <div class='compDiv'>
                            ${componentString}
                          </div>
                          <div class='cardLinkDiv'>
                            <a href='${projects[i].url}' target='_blank' class='cardLink'>Project Link</a>
                            <a href='${projects[i].githubUrl}' target='_blank' class='cardLink'>Github Link</a>
                          </div>
                        </div>
                      </div>`;
      }
    }
    $('#projectsPage').append(tempString);
    clickedCard();
  }).catch();
};

const projectsBuilder = () => {
  const tempString = `<p class='projectsTitle'>Projects Portfolio</p>
                        <div class="fullPage" id="projectsPage"></div>`;
  $('#projectsPage').html(tempString);
  createProjectCards();
  // $('.mainPage').hide();
  $('#projectsPage').show();
  clipForProjects();
  hideForProjects();
};

export default {
  createProjectCards,
  projectsBuilder,
  // createProjectCards2,
};
