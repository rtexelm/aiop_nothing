// ========================================
// CONFIGURATION - Add your Google Drive image URLs here
// ========================================
const imageIds = [
  "1fL_NgTOc4qOiK7Qrz7eLlfmXx7UZKVZA",
  "1YxWZvQ06njlHUVx8I6OJ4CKNQXhgoWEG",
];

// Choose your preferred URL format
// const generateUrl = (id) =>
//   `https://drive.usercontent.google.com/download?id=${id}&export=view`;
const generateUrl = (id) => `https://lh3.googleusercontent.com/d/${id}`;

const imageUrls = imageIds.map(generateUrl);

// Auto-play interval in milliseconds (3000 = 3 seconds)
const AUTO_PLAY_INTERVAL = 3000;

// ========================================
// CAROUSEL LOGIC
// ========================================
class Carousel {
  constructor(imageUrls) {
    this.images = imageUrls;
    this.currentIndex = 0;
    this.isAutoPlaying = true;
    this.autoPlayTimer = null;

    this.track = document.getElementById("carouselTrack");
    // this.indicatorsContainer = document.getElementById("indicators");
    this.prevBtn = document.getElementById("prevBtn");
    this.nextBtn = document.getElementById("nextBtn");
    this.statusDisplay = document.getElementById("autoplayStatus");

    this.init();
  }

  init() {
    this.createSlides();
    // this.createIndicators();
    this.attachEventListeners();
    this.startAutoPlay();
    this.updateCarousel();
  }

  createSlides() {
    this.images.forEach((url, index) => {
      const slide = document.createElement("div");
      slide.className = "carousel-slide";
      slide.innerHTML = `<img src="${url}" alt="Slide ${index + 1}">`;
      this.track.appendChild(slide);
    });
  }

  // createIndicators() {
  //   this.images.forEach((_, index) => {
  //     const indicator = document.createElement("button");
  //     indicator.className = "indicator";
  //     indicator.setAttribute("aria-label", `Go to slide ${index + 1}`);
  //     indicator.addEventListener("click", () => {
  //       this.stopAutoPlay();
  //       this.goToSlide(index);
  //     });
  //     this.indicatorsContainer.appendChild(indicator);
  //   });
  // }

  attachEventListeners() {
    this.prevBtn.addEventListener("click", () => {
      this.stopAutoPlay();
      this.prevSlide();
    });

    this.nextBtn.addEventListener("click", () => {
      this.stopAutoPlay();
      this.nextSlide();
    });

    // Pause on hover
    this.track.addEventListener("mouseenter", () => {
      if (this.isAutoPlaying) {
        this.pauseAutoPlay();
      }
    });

    this.track.addEventListener("mouseleave", () => {
      if (this.isAutoPlaying) {
        this.resumeAutoPlay();
      }
    });

    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    this.track.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true },
    );

    this.track.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe(touchStartX, touchEndX);
      },
      { passive: true },
    );
  }

  handleSwipe(startX, endX) {
    const swipeThreshold = 50;
    const diff = startX - endX;

    if (Math.abs(diff) > swipeThreshold) {
      this.stopAutoPlay();
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateCarousel();
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateCarousel();
  }

  updateCarousel() {
    const offset = -this.currentIndex * 100;
    this.track.style.transform = `translateX(${offset}%)`;
    // this.updateIndicators();
  }

  // updateIndicators() {
  //   const indicators = this.indicatorsContainer.querySelectorAll(".indicator");
  //   indicators.forEach((indicator, index) => {
  //     indicator.classList.toggle("active", index === this.currentIndex);
  //   });
  // }

  startAutoPlay() {
    this.isAutoPlaying = true;
    this.resumeAutoPlay();
    this.updateStatus();
  }

  resumeAutoPlay() {
    this.clearAutoPlayTimer();
    this.autoPlayTimer = setInterval(() => {
      this.nextSlide();
    }, AUTO_PLAY_INTERVAL);
  }

  pauseAutoPlay() {
    this.clearAutoPlayTimer();
  }

  stopAutoPlay() {
    this.isAutoPlaying = false;
    this.clearAutoPlayTimer();
    this.updateStatus();
  }

  clearAutoPlayTimer() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  updateStatus() {
    if (this.isAutoPlaying) {
      this.statusDisplay.innerHTML = "<span>▶</span> Auto-playing";
      this.statusDisplay.classList.remove("paused");
    } else {
      this.statusDisplay.innerHTML = "<span>⏸</span> Paused";
      this.statusDisplay.classList.add("paused");
    }
  }
}

// Initialize the carousel
const carousel = new Carousel(imageUrls);
