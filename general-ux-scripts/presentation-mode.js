function wait(callback) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}

function execute(html) {
  html.find(".clickableImage").each((i, div) => {
    div.addEventListener("click", getImageSource, false);
  });
}

function setEventListeners(html) {
  wait().then(execute.bind(null, html));
}

function getImageSource(ev) {
  let element = ev.currentTarget;
  let type = element.nodeName;
  let url;

  if (type == "IMG") {
    url = element.getAttribute("src");
    let popout = new ImagePopout(url).render(true);
    popout.shareImage();
  }
}

const makeClick = (app, html, options) => {
  if (game.user.isGM) {
    html.find("img").attr("class", "clickableImage");
    html.find("video").attr("class", "clickableImage");
    html.find(".lightbox-image").each((i, div) => {
      div.classList.add("clickableImage");
    });
    setEventListeners(html);
  }
};

Hooks.on("renderJournalSheet", makeClick);

Hooks.off("renderJournalSheet", makeClick);
