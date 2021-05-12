const URL =
        "/data.json";
      document.addEventListener("DOMContentLoaded", () => {
        //set up the IntersectionObserver to load more images if the footer is visible.
        //URL - https://gist.githubusercontent.com/prof3ssorSt3v3/1944e7ba7ffb62fe771c51764f7977a4/raw/c58a342ab149fbbb9bb19c94e278d64702833270/infinite.json
        let options = {
          root: null,
          rootMargins: "0px",
          threshold: 0.5
        };
        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(document.querySelector("footer"));
        //an initial load of some data
        getData();
      });
      function handleIntersect(entries) {
        if (entries[0].isIntersecting) {
          console.warn("something is intersecting with the viewport");
          getData();
        }
      }
      function getData() {
        let main = document.querySelector("main");
        console.log("fetch some JSON data");
        fetch(URL)
          .then(response => response.json())
          .then(data => {
            // data.items[].img, data.items[].name
            data.items.forEach(item => {
              let poetryText = document.createElement("div");
              poetryText.classList.add("justify");
              poetryText.textContent = item.name;
              main.appendChild(poetryText);
            });
          });
      }