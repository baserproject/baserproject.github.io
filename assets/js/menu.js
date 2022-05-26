// スクロールに応じてメニューにクラスを付与

window.onload = function () {
  setMenuEvent();
}

function setMenuEvent() {
  let menuLinks = document.querySelectorAll('.toc a');

  // 見出し一覧取得
  let heads = [];
  for (let i = 0; i < menuLinks.length; i++) {
    let href = menuLinks[i].getAttribute('href');
    let id = href.replace(/^#/, '');

    heads.push({
      id: href.replace(/^#/, ''),
      headElement: document.getElementById(id),
    });
  }

  // スクロール時にスクロール位置と見出し要素の位置を判定してメニューにクラスを付与
  window.onscroll = function() {
    let headerPosition = window.getComputedStyle(document.querySelector('header')).getPropertyValue('position');
    if (headerPosition !== 'fixed') {
      return false;
    }

    let scrollPosition = window.pageYOffset;
    let currentHead = heads[0];
    for (let i = 0; i < heads.length; i++) {
      if (scrollPosition >= scrollPosition + heads[i].headElement.getBoundingClientRect().top - 20) {
        currentHead = heads[i];
      }
    }

    let currents = document.querySelectorAll('.toc-current');
    for (let i = 0; i < currents.length; i++) {
      currents[i].classList.remove('toc-current');
    }
    let currentHeadElement = document.querySelector('.toc a[href="#' + currentHead['id'] + '"]');
    currentHeadElement.classList.add('toc-current');
    currentHeadElement.scrollIntoView(true);
  };
}
