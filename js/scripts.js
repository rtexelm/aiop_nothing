// ========================================
// CONFIGURATION - Add your Google Drive image URLs here
// ========================================
const imageIds = [
  "1fL_NgTOc4qOiK7Qrz7eLlfmXx7UZKVZA",
  "1YxWZvQ06njlHUVx8I6OJ4CKNQXhgoWEG",
  "1WUxOwieTqMEPIRXg-91_bwgtMLOmFTBG",
  "1QrG56_UPxYkATfeb4cpJR-p1QI2gEaWW",
  "1C_zT1VVJxMedP3cAld-eAaTVasckhRag",
  "11sfSCsQ7_Rzqsey8Wjs9pu7gpFLZ-1dP",
  "1nFb-yDxxxmPD_hHWgcGTHKlLqtpQ-HW4",
  "1msjwLp6napyPGbVO-c1pByP5MGdoZJr_",
  "1edcyR4r1h2cOVn4teie1ZNRgVkmuLvxY",
  "1i-TRk0AlYqPSp7Ua0S7qauy96-2bAIPL",
  "1xOGjP-3MIDSd4tH4_jELIdQ5zger29K5",
  "1EcUvZdNx6USdspTfz9UDcduq3zXo7T1U",
  "1SB-wevsbhVZW_fkOqVmtH4koNJrJzmGf",
  "1aFs8UYnesC67JpGmLRxno6Pa3ags_33h",
  "1AZELe-JX_jFNZzFi0WlgQXtWuGPFhr3e",
  "1wTPM5bFlu7a8vLketEgJdDsB-OrEBSif",
  "1rh4dPFycpXCZ4nhB88iQ_ntGfP1MafJq",
  "1aeSB7rmyKG7zKnG7gqj01lZI1jHl2PKh",
  "1UYERGqnWYAGT4GUeSnOKVLiALGIhSndH",
  "11j39-NoelFVjZ1wLuTq0iYVJZG0BUahI",
  "1YSX4qHgBXXBlIqw4xggV9jDnooHyMNMO",
  "1sCo6i6b6jgw55rRbbmFUvtjtPQyuEqXN",
  "1xQ6B4hf2TANcQd-NMRyKGWGL17vZ1xzM",
  "1Omp-uGjJWCTlDTdnRWH3nHRlJrto2b6Z",
  "1R7Y-UQS5KPpS_PF1LSbj9n0SQCvxPgFZ",
  "1MYkPpU_-EiuPvV-sMEE1yqN5UGy_St-d",
  "1vBFc7lomyLm2uj2taTn-MgfudZtd1P2H",
  "1I2qbgpAXuJHLo7jYDre2j7jsgaqAcMjt",
  "1NupeO02rZHL2jWxMxDiGY7cxWDrP-k6b",
  "1srm1vFpflbACmAknUet46L9cdL1xUo0w",
  "1YVt__uodCL9ci0YOiRJhg5U1Y-1mrJ-5",
  "1PMcDZQe27DE32vCcpgtMyfLWpLGOHqDT",
  "13FxLg1kUNNNKeavSWVm-nGCmb9Q1oeE8",
  "1Mk-QAufd0vsaOGzmoCsEoWpNEb_zdDp1",
  "1KV2gI8MSflhvb6N8LSZ9IM0hI7oLs49k",
  "1hR_K7X9lLJEBE2xfp_L8trYWNgXo-tgA",
  "1Bl-3KPO0lnu4BNpngNTsQFShJPqvI1QC",
  "1BzEy59nhxygnGJu68P7nK7f30EkaLmVe",
  "1Ct1w5cMIKo1UOobxo2HD7SNkr7m8egh7",
  "1Ljqz6dBa6bM46q-7a1FxoXy0HdeVqgr5",
  "17K3fKOV7RBQQ0ZLdekygDQR0y6-KJ-1s",
  "1E3-zh3eFqZP6wF8py_N13R_qlQh9cjFS",
  "1mwqqZVpVp3N6qenmlhZS84PlHoSz8P94",
  "1AFdbxrhi91ulFntTzmuvAM10y5HuKUTU",
  "1GsF1P2fWrgX2f0XfTikv9et3hCcCLOAD",
  "1A4D1zSyUD9ytbmfEmoXAHasHrv5Swrtr",
  "1wHxobKsnK8TaLBBtgJEgnmPEnOl_txz2",
  "1FxMBRPq5qG-Re995YxTNPIQ--7JbkVK8",
  "1Z9-3V8ooSk5zNRCnW_Zyg7KRSKeNSU8I",
  "1fBHuxd23ITDq-6uCWtMKAoHJSzau6Jwa",
  "1_CdOIVEs6FOYSjDCFNKq-59ifpkfYEng",
  "1afUKopQlkG_uKnIBhCus03yPqMOztWdt",
  "1fbBpI-NNl2B5DFftcHhpRtyPZMbKB1bg",
  "1zXXKSTgfbiHiaGKhIUDesI9m8TnEUU7t",
  "1zg5CTgw8rC2XoBNfz73anfQrKwwGjF7g",
  "1KoMg7Cz4YK1R6PvpitGFSc0nBgijr6u-",
  "1YDVuhkLWjtEUxj1La_6D8OMF_ZhK72JQ",
  "1FXXgiy9zNjYvqHHVIgXLS5wo8QvUJkXi",
  "1-lhF0XjyLS39yZPZWvTmUwJmOUrTEGQ-",
  "1tSOsDTiMNRBIQWjBeuiuHLj5IK7ORK1X",
  "11jbZlExRgJDRxdVJ1py1HCdQGIVyXCkB",
  "1YnKz_U53O0moaMKbcgoDW6IY67GdrGg9",
  "1esUQ7COFugF_Rxx5B6CwGLLY1pE2rqmY",
  "1eDjOygba5NV2N1fvjtsObs_xgKWfVYS8",
  "1-70_RK68s4jss43Y_93S43PWXyswVNZn",
  "1kH4uzDhAOd9KRmQWoTz9v8OvtiyS4fw2",
  "1D6ejhHHt9n932AvH_CCiUwqzkPNOvclD",
  "1ICTryMSJaMvXdsSCkErEQmBW0y2Oqq7e",
  "1xzpNWtkaKXx-u3SOH3vB2f1-MERSIdCZ",
  "1tKtItAIBBlLefYF5Zw-iyqcxJt65s2E4",
  "1-W7ftqfaSOvX7_Gqe0ySqNG85Sf2TIL6",
  "1xDXz9JGenKs0by68w9GNYCevc-1ZECPW",
  "1jvJu1JU8BO2ORlVN5btDHtOH094Tvuzl",
  "17OqQ-6dBZSaNkW4IBgb2GE0f2vXu1Gc7",
  "1P_lYtiaNMm26kn3ahCXye6_oJy7oYZUD",
  "1gnp5d_eRkLnNF5OWxSoWUgQIsWazbDck",
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
