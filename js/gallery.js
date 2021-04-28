$(".lightbox-gallery").magnificPopup({
  delegate: "a", // child items selector, by clicking on it popup will open
  type: "image",
  gallery: { enabled: true },
  zoom: { enabled: true, duration: 300 },
});
