function isMobile() {
  var check = false;
  (function(a){
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
      check = true;
  })(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

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

function enlargeImage(x) {
  
}

function _return() {

}

function changepage(page, p2, p3) {
  document.getElementsByClassName('on').classList = "subsegment off"
  sleep(150)
  document.getElementById(p2).classList = "subsegment"
  document.getElementById(p3).classList = "subsegment"
  document.getElementById(page).classList = "subsegment on"
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
        <div class="spacetext" style="height: 200px;">
            <div class="email">
            </div>

            <div style="z-index: 5; width: 40px; height: 100%; background-color: rgba(0,0,0,0);">
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
        <svg style="pointer-events: none; z-index: 3; width: 70%; height: auto; top: -160px; position: relative; margin-bottom: -160px" class="footer_squiggle" viewBox="0 0 1661 141" fill="none">
            <path
                d="M1581 25.4919C1521.99 20.2951 1444.98 14.0188 1368.77 9.16531C1308.94 5.35466 1249.6 2.42177 1199.86 1.57655C1150.07 0.730667 1110 1.97928 1088.62 6.49452L1088.61 6.49551C1081.88 7.88277 1077.44 9.44777 1074.76 11.0648C1072.06 12.6848 1071.37 14.1935 1071.5 15.4695C1071.65 16.8851 1072.84 18.533 1075.1 20.3119C1077.32 22.0543 1080.37 23.7686 1083.84 25.361C1092.15 29.1678 1102.44 32.7586 1112.74 36.3487L1112.94 36.4184C1123.15 39.9747 1133.36 43.5323 1141.54 47.2763C1144.46 48.5451 1149.74 50.9738 1153.54 53.3691C1154.49 53.9709 1155.37 54.5806 1156.1 55.179C1156.82 55.7688 1157.45 56.3878 1157.86 57.0169C1158.25 57.6342 1158.55 58.4523 1158.22 59.2931C1157.9 60.1006 1157.12 60.5779 1156.26 60.8753L1156.18 60.9051L1156.09 60.9189C1149.02 62.0051 1137.33 62.1302 1127.74 62.227L1127.73 62.2271C1097.79 62.3313 1068.18 61.3584 1037.52 60.3513L1036.23 60.3091L1036.23 60.3089C1003.05 59.0295 969.875 57.7236 936.683 56.4172C766.182 49.7064 595.31 42.9809 422.504 39.7499L422.503 39.7499C343.972 38.2169 265.98 37.2078 186.623 38.5041C160.107 38.9643 133.441 39.7411 106.817 41.2225L106.816 41.2226C81.4495 42.5903 55.941 44.8282 36.254 48.2921C26.4052 50.025 18.058 52.0572 11.9267 54.4222C8.86039 55.6049 6.38661 56.8565 4.56546 58.17C2.74563 59.4825 1.65637 60.7996 1.20975 62.0948C0.460369 64.6872 1.73729 67.5188 5.09939 70.6447C8.4373 73.7482 13.5767 76.889 19.8153 80.0006C31.9617 86.0588 47.9851 91.8682 62.1993 97.0217C62.568 97.1554 62.9355 97.2886 63.3017 97.4214C83.7361 104.562 105.346 111.516 127.059 118.461C128.866 119.039 130.674 119.617 132.482 120.195C144.438 124.017 156.398 127.84 168.179 131.692C155.549 126.54 142.307 121.443 129.052 116.342C125.231 114.871 121.408 113.4 117.599 111.927C92.4644 102.207 67.9104 92.4061 48.1862 82.1329L48.1694 82.1241L48.1529 82.1147C42.1795 78.7089 35.8098 74.8932 32.4377 70.9756C30.7452 69.0093 29.6506 66.8384 29.9653 64.558C30.2818 62.2648 31.9722 60.2147 35.0044 58.3745L35.023 58.3632L35.0421 58.3527C40.1936 55.5255 49.4637 53.3808 61.0555 51.7162C72.696 50.0446 86.8286 48.839 101.815 47.9577C131.791 46.195 165.256 45.7261 189.177 45.4368L189.18 45.4367C265.267 44.8031 341.801 46.3196 417.501 48.1569L417.501 48.1569C545.235 51.3584 672.284 55.6157 798.862 60.553C825.322 61.5488 851.753 62.5987 878.202 63.6493C928.151 65.6333 978.16 67.6197 1028.53 69.2488C1055.07 70.0723 1081.27 70.8322 1108.47 71.0137C1123.23 71.0854 1137.53 71.0346 1152.65 70.3979L1152.65 70.3978C1169.44 69.742 1183.55 68.1531 1192.92 65.7679C1197.62 64.5698 1201.02 63.1984 1202.97 61.7236C1203.93 60.9915 1204.46 60.2936 1204.68 59.6581C1204.88 59.0589 1204.85 58.4038 1204.44 57.6289L1204.44 57.6225L1204.43 57.6162C1203.89 56.5464 1202.9 55.4385 1201.5 54.3001C1200.11 53.1676 1198.35 52.0459 1196.34 50.9338C1192.32 48.7091 1187.37 46.5776 1182.43 44.5028C1169.62 39.3068 1155.31 34.5316 1140.65 29.8237C1133.71 27.6291 1127.36 25.4297 1122.17 23.1839L1122.16 23.1795L1122.15 23.1748C1118.89 21.6776 1115.66 20.1499 1113.59 18.6005C1112.57 17.8347 1111.68 16.9612 1111.29 15.9589C1111.09 15.434 1111.02 14.8686 1111.14 14.2879C1111.27 13.7138 1111.56 13.1943 1111.98 12.7282L1112.03 12.6754L1112.08 12.6299C1113.22 11.6776 1115.17 11.0405 1117.55 10.537C1119.98 10.0224 1123.08 9.61171 1126.68 9.22253L1126.69 9.22171L1126.7 9.22102C1173.96 4.83952 1280.52 8.42653 1388.71 14.0153C1456.91 17.5386 1525.81 21.8601 1581 25.4919Z"
                 stroke="rgba(255,255,255,0.5)" stroke-width="2">
                </path>
          </svg>
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
            
            <a href="https://cash.app/$nexiblep" class="social-link">
                <svg 
                fill="#ffffff" 
                width="800px" 
                height="800px" 
                viewBox="0 0 24 24" 
                role="img">
                    <path
                        d="M23.59 3.47A5.1 5.1 0 0 0 20.54.42C19.23 0 18.04 0 15.62 0H8.36c-2.4 0-3.61 0-4.9.4A5.1 5.1 0 0 0 .41 3.46C0 4.76 0 5.96 0 8.36v7.27c0 2.41 0 3.6.4 4.9a5.1 5.1 0 0 0 3.05 3.05c1.3.41 2.5.41 4.9.41h7.28c2.41 0 3.61 0 4.9-.4a5.1 5.1 0 0 0 3.06-3.06c.41-1.3.41-2.5.41-4.9V8.38c0-2.41 0-3.61-.41-4.91zM17.42 8.1l-.93.93a.5.5 0 0 1-.67.01 5 5 0 0 0-3.22-1.18c-.97 0-1.94.32-1.94 1.21 0 .9 1.04 1.2 2.24 1.65 2.1.7 3.84 1.58 3.84 3.64 0 2.24-1.74 3.78-4.58 3.95l-.26 1.2a.49.49 0 0 1-.48.39H9.63l-.09-.01a.5.5 0 0 1-.38-.59l.28-1.27a6.54 6.54 0 0 1-2.88-1.57v-.01a.48.48 0 0 1 0-.68l1-.97a.49.49 0 0 1 .67 0c.91.86 2.13 1.34 3.39 1.32 1.3 0 2.17-.55 2.17-1.42 0-.87-.88-1.1-2.54-1.72-1.76-.63-3.43-1.52-3.43-3.6 0-2.42 2.01-3.6 4.39-3.71l.25-1.23a.48.48 0 0 1 .48-.38h1.78l.1.01c.26.06.43.31.37.57l-.27 1.37c.9.3 1.75.77 2.48 1.39l.02.02c.19.2.19.5 0 .68z"/>
                </svg>
            </a>
        </div>

        <div class="spacetext" id="sp" style="height: 70px;">
            <p>Copyright 2024 | NX.games</p>
            <p>Designed and built by 
                <a href="about.html" class="normal" id="nohover" style="padding: 0;">
                    Nexi
                </a>
                 :3
            </p>
        </div>
    </center>
`;