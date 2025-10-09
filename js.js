
let deferredEvent;
const installButton = document.getElementById('installbtn')
alert("wait")
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
      