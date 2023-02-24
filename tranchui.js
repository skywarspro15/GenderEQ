var effectEnabled = false;

function openModal(id) {
  var modal = document.getElementById(id);
  var modalContent = modal.getElementsByClassName("modal-content");
  var closeButton = modal.getElementsByClassName("close");
  modal.classList.add("active");
  modal.style.animation = "fadeIn cubic-bezier(0.65, 0.05, 0.36, 1) 500ms";
  document.body.style.overflow = "hidden";
  scrollTopButton.style.transform = "translateY(100px)";

  closeButton[0].addEventListener(
    "click",
    (e) => {
      if (window.innerWidth > 600) {
        modalContent[0].style.animation =
          "scaleDown cubic-bezier(0.68,-0.55,0.27,1.55) 500ms";
      } else {
        modalContent[0].style.animation =
          "slideUp cubic-bezier(0.68,-0.55,0.27,1.55) 500ms";
      }
      modal.style.animation = "fadeOut cubic-bezier(0.65, 0.05, 0.36, 1) 500ms";
      setTimeout(function() {
        modal.classList.remove("active");
        modal.style.animation = "none";
        if (window.innerWidth > 600) {
          modalContent[0].style.animation =
            "scaleUp cubic-bezier(0.68,-0.55,0.27,1.55) 500ms";
        } else {
          modalContent[0].style.animation =
            "slideDown cubic-bezier(0.68,-0.55,0.27,1.55) 500ms";
        }
      }, 500);
      scrollTopButton.style.transform = "translateY(0)";
      document.body.style.overflow = "scroll";
    },
    { once: true }
  );
}

function closeModal(id) {
  var modal = document.getElementById(id);
  var modalContent = modal.getElementsByClassName("modal-content");
  if (window.innerWidth > 600) {
    modalContent[0].style.animation =
      "scaleDown cubic-bezier(0.68,-0.55,0.27,1.55) 500ms";
  } else {
    modalContent[0].style.animation =
      "slideUp cubic-bezier(0.68,-0.55,0.27,1.55) 500ms";
  }
  modal.style.animation = "fadeOut cubic-bezier(0.68,-0.55,0.27,1.55) 500ms";
  setTimeout(function() {
    modal.classList.remove("active");
    modal.style.animation = "none";
    modalContent[0].style.animation =
      "slideUp cubic-bezier(0.68,-0.55,0.27,1.55) 500ms";
  }, 500);
  document.body.style.overflow = "scroll";
  scrollTopButton.style.transform = "translateY(0)";
}

const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
      (bottom > 0 && bottom < innerHeight)) &&
    ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

function appearElement(id) {
  var element = document.getElementById(id);
  if (elementIsVisibleInViewport(element, true)) {
    element.classList.remove("hidden");
  }
}

function navItemShow(id) {
  var button = document.getElementById(id);
  var icon = button.getElementsByClassName("iconImg");
  button.href = "javascript: navItemHide('" + id + "');";
  icon[0].src = "icons/up-arrow.png";
  var elements = document.querySelectorAll(".responsive");
  for (var i = 0, len = elements.length; i < len; i++) {
    elements[i].classList.remove("responsive");
    elements[i].classList.add("responsive-active");
  }
}

function navItemHide(id) {
  var button = document.getElementById(id);
  var icon = button.getElementsByClassName("iconImg");
  button.href = "javascript: navItemShow('" + id + "');";
  icon[0].src = "icons/down-arrow.png";
  var elements = document.querySelectorAll(".responsive-active");
  for (var i = 0, len = elements.length; i < len; i++) {
    elements[i].classList.remove("responsive-active");
    elements[i].classList.add("responsive");
  }
}

function registerButtons() {
  if (effectEnabled == false) return;
  let mouseDown = false;
  document.querySelectorAll(".button").forEach((button) => {
    button.onmouseleave = (e) => {
      mouseDown = false;
      e.target.style.background = "rgba(37, 37, 37, 0.8)";
      e.target.style.border = "1px solid rgb(100, 100, 100)";
    };

    button.addEventListener("mousemove", (e) => {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (!mouseDown) {
        e.target.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.2),rgba(37,37,37,0.8) )`;
        e.target.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `;
      } else {
        e.target.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.5),rgba(37,37,37,0.8) )`;
        e.target.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `;
      }
    });

    button.addEventListener("mousedown", (e) => {
      mouseDown = true;
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      e.target.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.5),rgba(37,37,37,0.8) )`;
      e.target.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `;
    });

    button.addEventListener("mouseup", (e) => {
      mouseDown = false;
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      e.target.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.2),rgba(37,37,37,0.8) )`;
      e.target.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `;
    });

    document.addEventListener("mousemove", (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      button.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch`;
    });
  });
}

if (window.innerWidth > 600) effectEnabled = true;
