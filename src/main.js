import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger, ScrambleTextPlugin);

const textAnimations = {
  textAnimation1: (el) => {
    const split = SplitText.create(el, {
      type: "chars",
      smartWrap: true,
      mask: "chars",
    });

    gsap.from(split.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power2.inOut",
      duration: 0.4,
      scrollTrigger: {
        trigger: el,
        start: "top 70%",
        end: "bottom 90%",
        once: true,
      },
    });
  },

  textAnimation2: (el) => {
    const split = SplitText.create(el, {
      type: "words",
      smartWrap: true,
      mask: "words",
      wordsClass: "word",
    });

    const tl = gsap.timeline({
      onStart: () => {
        gsap.set(el, { x: 100 });
      },

      scrollTrigger: {
        trigger: el,
        start: "top 50%",
        // toggleActions: "restart none none restart",
        // once: true,
      },
    });

    tl.from(split.words, {
      yPercent: 100,
      ease: "power2.inOut",
      stagger: 0.04,
      duration: 0.6,
    })
      .call(() => {
        el.querySelectorAll(".word-mask").forEach((mask) => {
          mask.style.overflow = "visible";
        });
      })
      .to(split.words, {
        x: -100,
        stagger: 0.03,
        ease: "expo.out",
        duration: 0.8,
      });
  },

  textAnimation3: (el) => {
    const split = SplitText.create(el, {
      type: "words",
      smartWrap: true,
      mask: "words",
    });

    gsap.from(split.words, {
      autoAlpha: 0,
      rotateX: -90,
      stagger: 0.04,
      transformOrigin: "bottom center",
      ease: "power3.inOut",
      duration: 0.6,
      scrollTrigger: {
        trigger: el,
        start: "top 70%",
        toggleActions: "restart none none none",
      },
    });
  },

  textAnimation4: (el) => {
    const split = SplitText.create(el, {
      type: "words",
      smartWrap: true,
    });

    gsap.from(split.words, {
      opacity: 0.2,
      stagger: 0.15,
      transformOrigin: "bottom center",
      ease: "none",
      duration: 0.5,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        end: "bottom+=130% bottom",
        toggleActions: "restart none none none",
        scrub: true,
      },
    });
  },

  textAnimation5: (el) => {
    const split = SplitText.create(el, {
      type: "chars",
      smartWrap: true,
    });

    gsap.fromTo(
      split.chars,
      {
        opacity: 0,
        scaleY: 0.3,
        transformOrigin: "bottom center",
      },
      {
        opacity: 1,
        scaleY: 1,
        ease: "back.inOut(2.5)",
        stagger: 0.02,
        duration: 0.5,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
      }
    );
  },
  textAnimation6: (el) => {
    const split = SplitText.create(el, {
      type: "chars",
      smartWrap: true,
      mask: "chars",
    });

    gsap.from(split.chars, {
      opacity: 0,
      filter: "blur(4px)",
      ease: "back.inOut(2.5)",
      stagger: 0.02,
      duration: 0.5,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
    });
  },

  textAnimation7: (el) => {
    const split = SplitText.create(el, {
      type: "chars",
      smartWrap: true,
    });

    gsap.from(split.chars, {
      opacity: 0,
      rotateY: 60,
      ease: "power2.inOut",
      stagger: 0.02,
      duration: 0.5,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
    });
  },

  textAnimation8: (el) => {
    const split = SplitText.create(el, {
      type: "chars",
      smartWrap: true,
    });

    gsap.from(split.chars, {
      opacity: 0,
      ease: "none",
      stagger: {
        each: 0.03,
        amount: 0.03 * split.chars.length,
        grid: "auto",
        from: "random",
      },
      duration: 0.04,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
    });
  },

  textAnimation9: (el) => {
    const split = SplitText.create(el, {
      type: "chars",
      smartWrap: true,
    });

    gsap.from(split.chars, {
      opacity: 0,
      ease: "none",
      stagger: 0.09,
      duration: 0.02,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
    });
  },

  textAnimation10: (el) => {
    const split = SplitText.create(el, {
      type: "chars",
      smartWrap: true,
    });

    gsap.from(split.chars, {
      opacity: 0,
      scale: 1.2,
      filter: "blur(5px)",
      ease: "back.inOut(2)",
      stagger: {
        each: 0.02,
        amount: 0.02 * split.chars.length,
        grid: "auto",
        from: "random",
      },
      duration: 0.4,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
    });
  },

  textAnimation11: (el) => {
    const split = SplitText.create(el, {
      type: "chars",
      smartWrap: true,
      mask: "chars",
    });

    gsap.from(split.chars, {
      xPercent: -100,
      ease: "power2.inOut",
      stagger: {
        each: 0.02,
        amount: 0.02 * split.chars.length,
        grid: "auto",
        from: "random",
      },
      duration: 0.2,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
    });
  },

  textAnimation12: (el) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    const scrambleTextValue = el.getAttribute("data-text");

    const hoverTl = gsap.timeline({ paused: true });

    hoverTl.to(el, {
      duration: 0.6,
      ease: "Power3.inOut",
      scrambleText: {
        text: scrambleTextValue,
        speed: 0.2,
        chars: chars,
      },
    });

    el.addEventListener("mouseenter", () => hoverTl.play());
    el.addEventListener("mouseleave", () => hoverTl.reverse());
  },

  textAnimation13: (el) => {
    const split = SplitText.create(el, {
      type: "chars",
      smartWrap: true,
      mask: "chars",
      charsClass: "double-char",
    });

    split.chars.forEach((charEl) => {
      const text = charEl.innerText;
      charEl.innerHTML = "";
      const ogDiv = document.createElement("div");
      ogDiv.className = "og-char";
      ogDiv.innerText = text;
      const dupDiv = document.createElement("div");
      dupDiv.className = "duplicate-char";
      dupDiv.innerText = text;
      charEl.appendChild(ogDiv);
      charEl.appendChild(dupDiv);
    });

    gsap.from(split.chars, {
      yPercent: -100,
      // ease: "back.inOut(2)",
      ease: "power2.inOut",
      stagger: {
        each: 0.02,
        amount: 0.02 * split.chars.length,
        grid: "auto",
        from: "random",
      },
      duration: 0.5,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        // scrub: true,
      },
    });
  },

  textAnimation14: (el) => {
    const split = SplitText.create(el, {
      type: "chars",
      smartWrap: true,
      mask: "chars",
      charsClass: "double-char",
    });

    split.chars.forEach((charEl) => {
      const text = charEl.innerText;
      charEl.innerHTML = "";
      const ogDiv = document.createElement("div");
      ogDiv.className = "og-char";
      ogDiv.innerText = text;
      const dupDiv = document.createElement("div");
      dupDiv.className = "duplicate-char";
      dupDiv.innerText = text;
      charEl.appendChild(ogDiv);
      charEl.appendChild(dupDiv);
    });

    const hoverTl = gsap.timeline({ paused: true });

    hoverTl.to(split.chars, {
      yPercent: -100,
      stagger: {
        amount: 0.1,
      },
      ease: "power2.inOut",
      duration: 0.35,
    });

    el.addEventListener("mouseenter", () => hoverTl.play());
    el.addEventListener("mouseleave", () => hoverTl.reverse());
  },

  textAnimation15: (el) => {
    const split = SplitText.create(el, {
      type: "lines",
      autoSplit: true,
      onSplit: (self) => {
        return gsap.fromTo(
          self.lines,
          { autoAlpha: 0, xPercent: -10, rotationX: 90 },
          {
            autoAlpha: 1,
            xPercent: 0,
            rotationX: 0,
            duration: 0.85,
            stagger: 0.04,
            // ease: "power2.inOut",
            ease: "back.inOut",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        );
      },
    });
  },

  textAnimation16: (el) => {
    const split = SplitText.create(el, {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit: (self) => {
        return gsap.fromTo(
          self.lines,
          { autoAlpha: 0, yPercent: -100 },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1.1,
            stagger: 0.04,
            ease: "back.inOut(2)",
            // ease: "power3.inOut",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        );
      },
    });
  },
};

function initTextAnimations() {
  document.querySelectorAll("[data-anim]").forEach((el) => {
    gsap.set(el, { visibility: "visible" });
    const animType = el.dataset.anim;
    const animFunc = textAnimations[animType];

    if (animFunc) animFunc(el);
  });
}

document.fonts.ready.then(() => {
  initTextAnimations();
});
