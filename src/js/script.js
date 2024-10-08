document.querySelectorAll(".copy-span").forEach((span) => {
  const copyTargetId = span.getAttribute("data-copy");

  span.addEventListener("click", function () {
    const copyTarget = document.getElementById(copyTargetId);
    const textToCopy = copyTarget.textContent;

    document.querySelectorAll(".copy-span").forEach((otherSpan) => {
      if (otherSpan !== this && otherSpan.textContent === "copied") {
        otherSpan.textContent = "copy";
        otherSpan.style.backgroundColor = "transparent";
      }
    });

    if (this.textContent === "copy") {
      // Copy the text to the clipboard
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          this.textContent = "copied";
          this.style.backgroundColor = "blue";
        })
        .catch((err) => {
          console.error("Error copying text: ", err);
        });
    }
  });
});
