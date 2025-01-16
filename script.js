const colors = [
  {
    palette_name: "Color Name",
    palette_group: "wet fruit acid",
    palette_group_color: "#C61C35",
    color_1: "#BDFD00",
    color_2: "#C61C35",
    color_3: "#E1F929",
    color_4: "#FFFF00",
  },
  {
    palette_name: "Color Name",
    palette_group: "wet acid",
    palette_group_color: "#05FFCD",
    color_1: "#19FF63",
    color_2: "#BDFD00",
    color_3: "#4AFF21",
    color_4: "#00FFA4",
  },
  {
    palette_name: "Color Name",
    palette_group: "wet chemical acid",
    palette_group_color: "#3C16F8",
    color_1: "#4AFF21",
    color_2: "#BDFD00",
    color_3: "#05FF50",
    color_4: "#00FFA4",
  },
  {
    palette_name: "Color Name",
    palette_group: "chemical acid",
    palette_group_color: "#BDFD00",
    color_1: "#05FFCD",
    color_2: "#05FF50",
    color_3: "#3C16F8",
    color_4: "#FF0FFF",
  },
  {
    palette_name: "Color Name",
    palette_group: "chemical fruit acid",
    palette_group_color: "#920045",
    color_1: "#DA6167",
    color_2: "#FFFF00",
    color_3: "#920045",
    color_4: "#FA3D7C",
  },
  {
    palette_name: "Color Name",
    palette_group: "wet fruit acid",
    palette_group_color: "#C61C35",
    color_1: "#BDFD00",
    color_2: "#C61C35",
    color_3: "#E1F929",
    color_4: "#FFFF00",
  },
  {
    palette_name: "Color Name",
    palette_group: "wet acid",
    palette_group_color: "#05FFCD",
    color_1: "#19FF63",
    color_2: "#BDFD00",
    color_3: "#4AFF21",
    color_4: "#00FFA4",
  },
  {
    palette_name: "Color Name",
    palette_group: "wet chemical acid",
    palette_group_color: "#3C16F8",
    color_1: "#4AFF21",
    color_2: "#BDFD00",
    color_3: "#05FF50",
    color_4: "#00FFA4",
  },
  {
    palette_name: "Color Name",
    palette_group: "chemical acid",
    palette_group_color: "#BDFD00",
    color_1: "#05FFCD",
    color_2: "#05FF50",
    color_3: "#3C16F8",
    color_4: "#FF0FFF",
  },
  {
    palette_name: "Color Name",
    palette_group: "chemical fruit acid",
    palette_group_color: "#920045",
    color_1: "#DA6167",
    color_2: "#FFFF00",
    color_3: "#920045",
    color_4: "#FA3D7C",
  },
];

const palettesContainer = document.getElementById("color_palettes");

palettesContainer.innerHTML = colors
  .map(
    (color, index) => `
    <div class="swiper-slide">
        <div class="palette_header">
            <h2>${index + 1}# ${color.palette_name.toUpperCase()}</h2>
            <h3 style="color: ${
              color.palette_group_color
            }">${color.palette_group.toUpperCase()}</h3>
        </div>
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
`
  )
  .join("");

// Add event listener to handle clicks on palette containers
palettesContainer.addEventListener("click", (event) => {
  // Check if the click is on a palette_container or its child
  const clickedElement = event.target.closest(".palette_container");
  if (!clickedElement) return; // Exit if not clicked on a palette_container

  if (clickedElement.classList.contains("selected_palette")) {
    clickedElement.classList.remove("selected_palette");
  } else {
    // Remove "selected_palette" class from all containers
    document.querySelectorAll(".palette_container").forEach((container) => {
      container.classList.remove("selected_palette");
    });

    // Add "selected_palette" class to the clicked container
    clickedElement.classList.add("selected_palette");
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loopedSlides: 1,
  loop: true,
  slidesPerView: "auto",
  freeMode: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  on: {
    scroll: function (e) {
      //   console.log(document.elementFromPoint(e.x, e.y).closest(".swiper-slide"));
      document.elementFromPoint(e.x, e.y).closest(".swiper-slide").focus();
    },
  },
});

document.querySelectorAll(".swiper-slide").forEach((slide) => {
  const container = slide.querySelector(".palette_container");
  const header = slide.querySelector(".palette_header");
  let loopTimeline; // Variable to store the looping timeline

  // Add mouseenter event for hover in
  container.addEventListener("mouseenter", () => {
    const circles = container.querySelectorAll(
      ".circle_1, .circle_2, .circle_3, .circle_4"
    );

    // Create a GSAP timeline for looping animation
    loopTimeline = gsap.timeline({ repeat: -1 }); // Infinite loop

    // Add staggered animation for circles in the timeline
    loopTimeline
      .to(circles, {
        y: -50,
        opacity: 1, // Ensure full opacity
        duration: 0.5, // Animation duration
        ease: "power2.in", // Easing for smooth animation
        stagger: 0.1, // Delay between each circle
      })
      .to(circles, {
        y: 0, // Reset scale to normal
        duration: 0.1, // Animation duration for reset
        ease: "power2.inOut", // Easing for smooth animation
        stagger: 0.1, // Reverse stagger to animate reset in order
      });

    gsap.to(header, {
      y: -30,
      duration: 0.2,
      ease: "power2.inOut",
    });
  });

  // Add mouseleave event for hover out
  container.addEventListener("mouseleave", () => {
    // Stop and kill the looping timeline on mouseleave
    if (loopTimeline) {
      loopTimeline.kill();
      loopTimeline = null; // Reset the timeline variable
    }

    const circles = container.querySelectorAll(
      ".circle_1, .circle_2, .circle_3, .circle_4"
    );

    // Reset animation for all circles
    gsap.to(circles, {
      y: 0, // Reset scale to normal
      opacity: 1, // Ensure full opacity
      duration: 0.1, // Animation duration
      ease: "power2.in",
      stagger: 0.1, // Easing for smooth animation
    });

    gsap.to(header, {
      y: 0,
      duration: 0.2,
      ease: "power2.inOut",
    });
  });
});
