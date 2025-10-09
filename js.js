if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/serviceworker.js').then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    }).catch(error => {
      console.error('Service Worker registration failed:', error);
    });
  });
}



let deferredEvent;
const installButton = document.getElementById('installbtn')

window.addEventListener('beforeinstallprompt', (e) => {
  // prevent the browser from displaying the default install dialog
  e.preventDefault();
  
  // Stash the event so it can be triggered later when the user clicks the button
  deferredEvent = e;
});

installButton.addEventListener('click', () => {
  // if the deferredEvent exists, call its prompt method to display the install dialog
  if(deferredEvent) {
    deferredEvent.prompt();
  }
});
      