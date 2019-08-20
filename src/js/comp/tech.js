import $ from 'jquery';
import techData from '../data/techData';
import screen1 from '../../../images2/photos/Bebop_Drone_2016-05-18T185813+0000_D15CA0.jpg';

const devBuilder = () => new Promise((resolve) => {
  techData.getDev().then((techs) => {
    let tempString = `<div class="jumbotron col-5" id='devDiv'>
                        <h1 class="display-4">Development Techs</h1>
                        <hr class="my-4">
                        <div id='techContainer'>`;
    techs.forEach((tech) => {
      tempString += `<div id='${tech.name}Div' class='techDiv'>
                      <img id='${tech.name}Img' class='techImg' src=${tech.src}>
                      <span id='${tech.name}Par' class='devSpan'>${tech.name}</span>
                      </div>`;
    });
    tempString += `
      </div>
    </div>`;
    resolve(tempString);
  });
});

const nondevBuilder = (incString) => {
  techData.getNondev().then((techs) => {
    let tempString = incString;
    tempString += `<div class="jumbotron col-5" id='nondevDiv' style='background-image: url(${screen1})'>
                        <h1 class="display-4">Nondevelopment Techs</h1>
                        <hr class="my-4">
                        <div id='techContainer'>`;
    techs.forEach((tech) => {
      tempString += `<div id='${tech.name}Div' class='techDiv'>
                      <img id='${tech.name}Img' class='techImg' src=${tech.src}>
                      <span id='${tech.name}Par' class='nondevSpan'>${tech.name}</span>
                      </div>`;
    });
    tempString += `
      </div>
    </div>`;
    $('#techPage').html(tempString);
  });
};

const hideForTech = () => {
  $('#projectsPage').hide();
  $('#resumePage').hide();
  $('#bioPage').hide();
};

const clipForTech = () => {
  $('#projectsPage').toggle('.clipMe');
  $('#resumePage').toggle('.clipMe');
  $('#bioPage').toggle('.clipMe');
};

const techsBuilder = () => {
  // $('.mainPage').hide();
  $('#techPage').show();
  clipForTech();
  hideForTech();
  devBuilder().then((tempString) => {
    nondevBuilder(tempString);
  })
    .catch((err) => {
      console.log(err);
    });
};

export default {
  techsBuilder,
};
