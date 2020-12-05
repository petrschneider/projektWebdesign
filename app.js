const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


var slider = document.getElementById("myRange");
            var output = document.getElementById("value");
            output.innerHTML = slider.value;
            
            slider.oninput = function() {
              output.innerHTML = this.value;
            }
            
    