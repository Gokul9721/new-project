

  var tabLabels = document.querySelectorAll("#tabs .lnk");
  var tabPanes = document.querySelectorAll(".tab-cont");

  function activateTabHref() {

      let tabLink = getTabID()

      if (tabLink== null) return;

      let tabId = tabLink.slice(1);

      // Deactivate all tabs
      tabLabels.forEach(function (label) {
          label.parentElement.classList.remove("active");

          if (label.getAttribute('href') == tabLink) {
            label.parentElement.classList.add('active');
          }
      });
    tabPanes.forEach(function (panel) {
        panel.classList.remove("active");
    });
    if(document.getElementById(tabId) != null) {
    document.getElementById(tabId).classList.add('active');
}
  }

  function getTabID() {
    return window.location.hash;
  }


  document.addEventListener('DOMContentLoaded', activateTabHref)