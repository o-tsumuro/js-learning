const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

// 要件
// btnをクリックでvideoを表示, videoをクリックで再生開始,boxをクリックで動画を非表示

// 以下のコードでは動画の再生(videoクリック時)と同時に非表示になってしまう
// -> box(div)はvideoの親要素であるためバブリングによってboxのクリックも呼び出される
// btn.addEventListener("click", () => box.classList.remove("hidden"));
// video.addEventListener("click", () => video.play());
// box.addEventListener("click", () => box.classList.add("hidden"));

// stopPropagation()でこの問題を修正(バブリングするのを防ぐ)
btn.addEventListener("click", () => box.classList.remove("hidden"));

video.addEventListener("click", (event) => {
  event.stopPropagation();
  video.play();
});

box.addEventListener("click", () => box.classList.add("hidden"));