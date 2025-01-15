const colors = [
    {
        "palette_name": "wet fruit acid", 
        "color_1": "#BDFD00", 
        "color_2": "#C61C35", 
        "color_3": "#E1F929", 
        "color_4": "#FFFF00"
    },
    {
        "palette_name": "wet acid", 
        "color_1": "#19FF63", 
        "color_2": "#BDFD00", 
        "color_3": "#4AFF21", 
        "color_4": "#00FFA4"
    },
    {
        "palette_name": "wet chemical acid", 
        "color_1": "#4AFF21", 
        "color_2": "#BDFD00", 
        "color_3": "#05FF50", 
        "color_4": "#00FFA4"
    },
    {
        "palette_name": "chemical acid", 
        "color_1": "#05FFCD", 
        "color_2": "#05FF50", 
        "color_3": "#3C16F8", 
        "color_4": "#FF0FFF"
    },
    {
        "palette_name": "chemical fruit acid", 
        "color_1": "#DA6167", 
        "color_2": "#FFFF00", 
        "color_3": "#920045", 
        "color_4": "#FA3D7C"
    },
    {
        "palette_name": "wet fruit acid", 
        "color_1": "#BDFD00", 
        "color_2": "#C61C35", 
        "color_3": "#E1F929", 
        "color_4": "#FFFF00"
    },
    {
        "palette_name": "wet acid", 
        "color_1": "#19FF63", 
        "color_2": "#BDFD00", 
        "color_3": "#4AFF21", 
        "color_4": "#00FFA4"
    },
    {
        "palette_name": "wet chemical acid", 
        "color_1": "#4AFF21", 
        "color_2": "#BDFD00", 
        "color_3": "#05FF50", 
        "color_4": "#00FFA4"
    },
    {
        "palette_name": "chemical acid", 
        "color_1": "#05FFCD", 
        "color_2": "#05FF50", 
        "color_3": "#3C16F8", 
        "color_4": "#FF0FFF"
    },
    {
        "palette_name": "chemical fruit acid", 
        "color_1": "#DA6167", 
        "color_2": "#FFFF00", 
        "color_3": "#920045", 
        "color_4": "#FA3D7C"
    },
];

const palettesContainer = document.getElementById('color_palettes');

palettesContainer.innerHTML = colors.map(color => `
    <div class="swiper-slide">
        <h2>${color.palette_name.toUpperCase()}</h2>
        <div class="palette_container">
            <div class="circle_1" style="background-color: ${color.color_1};">
                <span style="color: ${color.color_1}">${color.color_1}</span>
            </div>
            <div class="circle_2" style="background-color: ${color.color_2};">
                <span style="color: ${color.color_2}">${color.color_2}</span>
            </div>
            <div class="circle_3" style="background-color: ${color.color_3};">
                <span style="color: ${color.color_3}">${color.color_3}</span>
            </div>
            <div class="circle_4" style="background-color: ${color.color_4};">
                <span style="color: ${color.color_4}">${color.color_4}</span>
            </div>
        </div>
    </div>
`).join('');

// Add event listener to handle clicks on palette containers
palettesContainer.addEventListener('click', (event) => {
    // Check if the click is on a palette_container or its child
    const clickedElement = event.target.closest('.palette_container');
    if (!clickedElement) return; // Exit if not clicked on a palette_container

    if (clickedElement.classList.contains('selected_palette')) 
    {
        clickedElement.classList.remove('selected_palette');
    }
    else 
    {
        // Remove "selected_palette" class from all containers
        document.querySelectorAll('.palette_container').forEach(container => {
            container.classList.remove('selected_palette');
        });
    
        // Add "selected_palette" class to the clicked container
        clickedElement.classList.add('selected_palette');
    }
});

const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loopedSlides: 5,
    loop: true,
    slidesPerView: "auto",
    freeMode: true,
    mousewheel: {
      releaseOnEdges: true,
    },
    on: {
        scroll: function (e) {
          console.log(document.elementFromPoint(e.x, e.y).closest(".swiper-slide"));
          document.elementFromPoint(e.x, e.y).closest(".swiper-slide").focus()
        },
    }
});