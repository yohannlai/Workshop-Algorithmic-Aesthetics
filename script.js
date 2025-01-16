const colors = [
  {
    palette_name: "Color Name",
    palette_group: "Chemical Acid",
    palette_group_color: "#FF0FFF",
    color_1: "#FF0FFF",
    color_2: "#05FFCD",
    color_3: "#FA3D7C",
    color_4: "#EEFF00",
  },
  {
    palette_name: "Color Name",
    palette_group: "Chemical Acid",
    palette_group_color: "#FF0FFF",
    color_1: "#05FF50",
    color_2: "#FA3D7C",
    color_3: "#3C16F8",
    color_4: "#FF0FFF",
  },
  {
    palette_name: "Color Name",
    palette_group: "Chemical Fruit Acid",
    palette_group_color: "#05FF50",
    color_1: "#920045",
    color_2: "#05FF50",
    color_3: "#3C16F8",
    color_4: "#EEFF00",
  },
  {
    palette_name: "Color Name",
    palette_group: "Chemical Fruit Acid",
    palette_group_color: "#05FF50",
    color_1: "#05FF50",
    color_2: "#920045",
    color_3: "#E1F924",
    color_4: "#FA3D7C",
  },
  {
    palette_name: "Color Name",
    palette_group: "Chemical Fruit Acid",
    palette_group_color: "#05FF50",
    color_1: "#FF0FFF",
    color_2: "#05FFCD",
    color_3: "#05FF50",
    color_4: "#DA6167",
  },
  {
    palette_name: "Color Name",
    palette_group: "Fruit Acid",
    palette_group_color: "#FFA400",
    color_1: "#920045",
    color_2: "#FFA400",
    color_3: "#DA6167",
    color_4: "#E1F924",
  },
  {
    palette_name: "Color Name",
    palette_group: "Fruit Acid",
    palette_group_color: "#FFA400",
    color_1: "#DA6167",
    color_2: "#C61C35",
    color_3: "#E1F924",
    color_4: "#FFA400",
  },
  {
    palette_name: "Color Name",
    palette_group: "Fruit Acid",
    palette_group_color: "#FFA400",
    color_1: "#E1F924",
    color_2: "#DA6167",
    color_3: "#C61C35",
    color_4: "#FFFF00",
  },
  {
    palette_name: "Color Name",
    palette_group: "Soda",
    palette_group_color: "#F0FAF3",
    color_1: "#C61C35",
    color_2: "#05FF50",
    color_3: "#F0FAF3",
    color_4: "#3C16F8",
  },
  {
    palette_name: "Color Name",
    palette_group: "Soda",
    palette_group_color: "#F0FAF3",
    color_1: "#DA6167",
    color_2: "#920045",
    color_3: "#05FFCD",
    color_4: "#F0FAF3",
  },
  {
    palette_name: "Color Name",
    palette_group: "Soda",
    palette_group_color: "#F0FAF3",
    color_1: "#C61C35",
    color_2: "#E1F924",
    color_3: "#F0FAF3",
    color_4: "#EEFF00",
  },
  {
    palette_name: "Color Name",
    palette_group: "Wet Acid",
    palette_group_color: "#85FF8F",
    color_1: "#00290D",
    color_2: "#D6FFE3",
    color_3: "#85FF8F",
    color_4: "#F0FAF3",
  },
  {
    palette_name: "Color Name",
    palette_group: "Wet Acid",
    palette_group_color: "#85FF8F",
    color_1: "#D6FFE3",
    color_2: "#F0FAF3",
    color_3: "#3C5936",
    color_4: "#85FF8F",
  },
  {
    palette_name: "Color Name",
    palette_group: "Wet Acid",
    palette_group_color: "#85FF8F",
    color_1: "#3C5936",
    color_2: "#003D13",
    color_3: "#85FF8F",
    color_4: "#00290D",
  },
  {
    palette_name: "Color Name",
    palette_group: "Wet Chemical Acid",
    palette_group_color: "#05FFCD",
    color_1: "#FA3D7C",
    color_2: "#85FF8F",
    color_3: "#F0FAF3",
    color_4: "#00290D",
  },
  {
    palette_name: "Color Name",
    palette_group: "Wet Chemical Acid",
    palette_group_color: "#05FFCD",
    color_1: "#05FF50",
    color_2: "#00290D",
    color_3: "#EEFF00",
    color_4: "#05FFCD",
  },
  {
    palette_name: "Color Name",
    palette_group: "Wet Chemical Acid",
    palette_group_color: "#05FFCD",
    color_1: "#05FFCD",
    color_2: "#85FF8F",
    color_3: "#FF0FFF",
    color_4: "#D6FFE3",
  },
  {
    palette_name: "Color Name",
    palette_group: "Wet Fruit Acid",
    palette_group_color: "#DA6167",
    color_1: "#DA6167",
    color_2: "#C61C35",
    color_3: "#920045",
    color_4: "#3C5936",
  },
  {
    palette_name: "Color Name",
    palette_group: "Wet Fruit Acid",
    palette_group_color: "#DA6167",
    color_1: "#F0FAF3",
    color_2: "#FFA400",
    color_3: "#D6FFE3",
    color_4: "#FFFF00",
  },
  {
    palette_name: "Color Name",
    palette_group: "Wet Fruit Acid",
    palette_group_color: "#DA6167",
    color_1: "#DA6167",
    color_2: "#E1F924",
    color_3: "#F0FAF3",
    color_4: "#85FF8F",
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
