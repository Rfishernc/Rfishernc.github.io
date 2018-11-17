import $ from 'jquery';

function expandRing(posX, posY) {
  const svgString = `<svg width='2000' height='2000' id='svgRing' style='position:absolute; left:0; top:0; z-index:4000'>
                      <clipPath id='clippy'>
                        <circle r='200' stroke='orange' stroke-width='10' fill='transparent' cy='${posY + 100}' cx='${posX + 100}'>
                          <animate attributeType='XML' attributeName='r' from='200' to='1000' dur='4s'/>
                          <animate attributeType='XML' attributeName='stroke-width' from='10' to='50' dur='4s'/>
                        </circle>
                      </clipPath>
                      <clipPath id='clippyOutside' clip-rule='evenodd'>
                        <rect width='2000' height='2000'/>
                        <circle r='200' stroke='orange' stroke-width='10' fill='transparent' cy='${posY + 100}' cx='${posX + 100}'>
                          <animate attributeType='XML' attributeName='r' from='200' to='1000' dur='4s'/>
                          <animate attributeType='XML' attributeName='stroke-width' from='10' to='50' dur='4s'/>
                        </circle>
                      </clipPath>
                      <circle id='circle1' r='200' stroke='orange' stroke-width='10' fill='transparent' cy='${posY + 100}' cx='${posX + 100}'>
                        <animate attributeType='XML' attributeName='r' from='200' to='1000' dur='4s'/>
                        <animate attributeType='XML' attributeName='stroke-width' from='10' to='50' dur='4s'/>  
                      </circle>
                    </svg>`;
  $('#body').append(svgString);
  $('.fullPage').toggleClass('clipMeOut');
  setTimeout(() => {
    $('#svgRing').hide();
    $('.fullPage').toggleClass('clipMeOut');
  }, 4000);
}

export default { expandRing };
