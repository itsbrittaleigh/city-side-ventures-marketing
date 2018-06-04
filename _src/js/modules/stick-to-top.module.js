function StickToTopModule() {
  if(document.getElementById('container-to-stick') && document.getElementById('relative-anchor-for-stick')) {
    const containerElement = document.getElementById('container-to-stick');
    const relativeAnchorElement = document.getElementById('relative-anchor-for-stick');
    let relativeAnchorToTop = relativeAnchorElement.getBoundingClientRect().top;
    if(relativeAnchorToTop <= 0) {
      addClassToContainer(containerElement);
      updateFooterToTop(containerElement);
    }
    else removeClassFromContainer(containerElement);
  }
}

function addClassToContainer(containerElement) {
  if(!containerElement.classList.contains('stick')) {
    containerElement.classList += ' stick';
  }
}

function removeClassFromContainer(containerElement) {
  if(containerElement.classList.contains('stick')) {
    containerElement.classList.remove('stick');
  }
}

function updateFooterToTop(containerElement) {
  let footerToTop = document.getElementById('footer').getBoundingClientRect().top;
  containerElement.style.height = `${footerToTop}px`;
}

export default StickToTopModule;