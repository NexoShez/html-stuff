function isMobile() {
  var check = false;
  (function(a){
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
      check = true;
  })(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

// if (isMobile == true) {
//   document.getElementsByClassName("topbar").classList.toggle("mobile");;
//   alert("mobile");
// } else {
//   document.getElementsByClassName("topbar").classList.toggle("pc");
//   // const elem = document.querySelector(".topbar");
//   // const temp = elem[0];
//   // temp.setAttribute('id', "pc");
//   alert("pc")
// }

function glibddfun() {
  document.getElementById("glibdropdownid").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('button.glibdbtn')) {
    var dropdowns = document.getElementsByClassName("glibddcont");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];z
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function cctog() {
  var x = document.getElementById("changelog");
  var btn = document.getElementById("cctogbtn");
  if (x.style.display === "none") {
    x.style.display = "block";
    btn.innerHTML = "-Hide Changelog-";
  } else {
    x.style.display = "none";
    btn.innerHTML = "-Show Changelog-";
  }
}

// use this one if it is UNIVERSAL (like a footer)
const observeronce = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('scroll-response');
      return;
    }
  });
});

const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('scroll-response');
      return;
    }
    entry.target.classList.remove('scroll-response');
  });
});

// if (document.querySelector('my-footer')) {
//   observeronce.observe(document.querySelector('my-footer'));
// }
if (document.querySelector('.merchprev')) {
  observer.observe(document.querySelector('.merchprev'));
}
if (document.querySelector('.scrollshow')) {
  observeronce.observe(document.querySelector('.scrollshow'));
}

var header = document.getElementById('header');

function fadeOutOnScroll(element) {
  if (!element) {
    return;
  }

  var distanceToTop = (window.scrollY - 150) + element.getBoundingClientRect().top;
  var elementHeight = element.offsetHeight;
  var scrollTop = document.documentElement.scrollTop;

  var opacity = 1;

  if (scrollTop > distanceToTop) {
    opacity = 1.2 - (scrollTop - distanceToTop) / elementHeight;
  }

  if (opacity >= 0) {
    element.style.opacity = opacity;
  }
}

function scrollHandler() {
  fadeOutOnScroll(header);
  fadeOutOnScroll(document.getElementById('imageheader'))
  fadeOutOnScroll(document.getElementById('headericon'))
  fadeOutOnScroll(document.getElementById('subtitle'));
}

window.addEventListener('scroll', scrollHandler);

function topbar() {
    var x = document.getElementById("topbar");
    if (x.className === "topbar") {
        x.className += " responsive";
    } else {
        x.className = "topbar";
    }
}

document.getElementById("uni").innerHTML = `
    <center>
        <div class="spacetext" style="height: 200px; margin: 10px;">
            <div class="email">

            </div>

            <div style="width: 40px; height: 100%; background-color: rgba(0,0,0,0);">
                <svg style="width:40px; height: 100%;" aria-hidden="true" focusable="false" viewBox="0 0 982.26 981.85">
                    <defs>
                      <style>
                        .cls-1 {
                          fill: #ffcbef79;
                        }
                      </style>
                    </defs>
                    <g id="Layer_1-2" data-name="Layer_1">
                      <path class="cls-1" d="M576.84,0h187.25L186,873.85H0L576.84,0Z"/>
                      <path class="cls-1" d="M576.84,0h187.25L186,873.85H0L576.84,0Z"/>
                      <path class="cls-1" d="M795.01,108h187.25L404.17,981.85h-186L795.01,108Z"/>
                    </g>
                  </svg>
            </div>

            <div class="pages">

            </div>
        </div>
        <div class="socials" id="sp">
            <a href="https://www.youtube.com/user/@nexoshez" class="social-link">
                <svg aria-hidden="true" focusable="false" class="icon icon-youtube" viewBox="0 0 20 20">
                    <path fill="currentColor"
                        d="M18.16 5.87c.34 1.309.34 4.08.34 4.08s0 2.771-.34 4.08a2.125 2.125 0 0 1-1.53 1.53c-1.309.34-6.63.34-6.63.34s-5.321 0-6.63-.34a2.125 2.125 0 0 1-1.53-1.53c-.34-1.309-.34-4.08-.34-4.08s0-2.771.34-4.08a2.173 2.173 0 0 1 1.53-1.53C4.679 4 10 4 10 4s5.321 0 6.63.34a2.173 2.173 0 0 1 1.53 1.53ZM8.3 12.5l4.42-2.55L8.3 7.4v5.1Z">
                    </path>
                </svg>
            </a>
            
            <a href="https://github.com/NexoShez" class="social-link">
                <svg aria-hidden="true" focusable="false" class="icon icon-github" viewBox="0 0 30 30">   
                    <path fill="currentColor"
                        d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>
                </svg>
            </a>
        </div>

        <div class="spacetext" id="sp" style="height: 70px;">
            <p>Copyright 2024 | NX.games</p>
            <p>Designed and built by 
                <a href="../assets/nexi.html" class="normal" id="nohover" style="padding: 0;">
                    Nexi
                </a>
                 :3
            </p>
        </div>
    </center>
`;