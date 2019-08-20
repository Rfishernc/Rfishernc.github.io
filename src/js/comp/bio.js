import $ from 'jquery';
import 'bootstrap';
import bioPic from '../../../images2/photos/croppedphoto.jpg';
import solarIcon from '../../../images2/solaricon3.jpg';
import codingIcon from '../../../images2/comp.png';
import projectsComp from './projects';

const hideForBio = () => {
  $('#projectsPage').hide();
  $('#resumePage').hide();
  $('#techPage').hide();
};

const clipForBio = () => {
  $('#techPage').toggle('.clipMe');
  $('#resumePage').toggle('.clipMe');
  $('#projectsPage').toggle('.clipMe');
};

const bioButtons = () => {
  document.getElementById('bioCodingBut').addEventListener('click', () => {
    projectsComp.projectsBuilder();
  });
};

const initialLoad = () => {
  const tempString = `<div id='menuHelpContainer'>
                        <p class='projectsTitle' id='menuHelp'>Click and hold the mouse button to access the site menu</p>
                      </div>
                      <div class="fullPage" id="bioPage">
                      <div class='bioDiv row'>
                        <div class='col-4'>
                          <h3 id='bioTitle'>Rich Fisher - Junior Software Developer</h3>
                          <img src=${bioPic} id='bioImg'/>
                        </div>
                        <div class='col-8'>
                          <p class='title'>About Me</p>
                          <p class='bio'>Ever since my father brought home a Commodore 64 when I was four years old, I've had an interest in computers.   But when it came time to start a career, I was young and convinced I would try to save the world, and in my mind that meant going in a different direction.  Ten years later of climbing the proverbial ladder within the solar power industry and I'd designed and built over 40 megawatts of clean, renewable power.  Yet, I found myself stuck in a position I hated.  Gone were the early days of getting my hands dirty and crafting something through my own skill and ability.  Now my days were spent chasing down payments from investors, haggling over pennies with foreign manufacturers over product that will likely never even be purchased, countless late-night hours on the phone with clients and legal counsel ironing out the minutia of contracts, and wading through an endless stream of issues from contractors.  
                          Giving tremendous respect to the people who can find satisfaction in that line of work, I realized I needed a change.  I wanted to be closer to my work, to get back to  personally building, crafting something through my own ability and knowledge.  With the encouragment of my family, I decided to pursue my lifelong interest in computers and joined Nashville Software School.</p>
                        </div>
                      </div>
                      <div id='bioButtonsDiv'>
                        <button class='btn btn-outline-dark bioBut' id='bioSolarBut' data-toggle='modal' data-target='#solarModal'><img src=${solarIcon} class='buttonIcon'/>What I used to do</button>
                        <button class='btn btn-outline-dark bioBut' id='bioCodingBut'><img src=${codingIcon} class='buttonIcon'/>What I do now</button>
                      </div>
                    </div>`;
  $('#bioPage').html(tempString);
  bioButtons();
};

const bioBuilder = () => {
  const tempString = `<div id='menuHelpContainer'>
                        <p class='projectsTitle' id='menuHelp'>Click and hold the mouse button to access the site menu</p>
                      </div>
                      <div class="fullPage" id="bioPage">
                      <div class='bioDiv row'>
                        <div class='col-4'>
                          <h3 id='bioTitle'>Rich Fisher - Jr. Jr. Software Developer</h3>
                          <img src=${bioPic} id='bioImg'/>
                        </div>
                        <div class='col-8'>
                          <p class='title'>About Me</p>
                          <p class='bio'>Ever since my father brought home a Commodore 64 when I was four years old, I've had an interest in computers.   But when it came time to start a career, I was young and convinced I would try to save the world, and in my mind that meant going in a different direction.  Ten years later of climbing the proverbial ladder within the solar power industry and I'd designed and built over 40 megawatts of clean, renewable power.  Yet, I found myself stuck in a position I hated.  Gone were the early days of getting my hands dirty and crafting something through my own skill and ability.  Now my days were spent chasing down payments from investors, haggling over pennies with foreign manufacturers over product that will likely never even be purchased, countless late-night hours on the phone with clients and legal counsel ironing out the minutia of contracts, and wading through an endless stream of issues from contractors.  
                          Giving tremendous respect to the people who can find satisfaction in that line of work, I realized I needed a change.  I wanted to be closer to my work, to get back to  personally building, crafting something through my own ability and knowledge.  With the encouragment of my family, I decided to pursue my lifelong interest in computers and joined Nashville Software School.</p>
                        </div>
                      </div>
                      <div id='bioButtonsDiv'>
                        <button class='btn btn-outline-dark bioBut' id='bioSolarBut' data-toggle='modal' data-target='#solarModal'><img src=${solarIcon} class='buttonIcon'/>What I used to do</button>
                        <button class='btn btn-outline-dark bioBut' id='bioCodingBut'><img src=${codingIcon} class='buttonIcon'/>What I do now</button>
                      </div>
                      </div>`;
  $('#bioPage').html(tempString);
  bioButtons();
  // $('.mainPage').hide();
  $('#bioPage').show();
  clipForBio();
  hideForBio();
};

export default {
  bioBuilder,
  initialLoad,
};
