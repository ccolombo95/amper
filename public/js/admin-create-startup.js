document.addEventListener("DOMContentLoaded", () => {
  const bannerInput = document.querySelector('input[name="banner"]');
  const photo1Input = document.querySelector('input[name="photo1"]');
  const photo2Input = document.querySelector('input[name="photo2"]');

  const bannerContainer = document.querySelector(".FormImage.banner");
  const photo1Container = document.querySelector(
    '.FormImage input[name="photo1"]'
  ).parentElement;
  const photo2Container = document.querySelector(
    '.FormImage input[name="photo2"]'
  ).parentElement;

  const showImage = (input, container) => {
    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        container.style.backgroundImage = `url(${e.target.result})`;
      };
      reader.readAsDataURL(file);
    }
  };

  bannerInput.addEventListener("change", () => {
    showImage(bannerInput, bannerContainer);
  });

  photo1Input.addEventListener("change", () => {
    showImage(photo1Input, photo1Container);
  });

  photo2Input.addEventListener("change", () => {
    showImage(photo2Input, photo2Container);
  });
});
