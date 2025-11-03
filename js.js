if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/serviceworker.js').then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    }).catch(error => {
      console.error('Service Worker registration failed:', error);
    });
  });
}


  let isToggled = false;

  function handleMotion(event) {
    // Detect strong shake
    if (
      Math.abs(event.rotationRate.alpha) > 256 ||
      Math.abs(event.rotationRate.beta) > 256 ||
      Math.abs(event.rotationRate.gamma) > 256
    ) {
      // Toggle the button color
      const button = document.getElementById('shakebtn');
      if (isToggled) {
        button.style.backgroundColor = 'blue';
        button.style.color = 'white';
      } else {
        button.style.backgroundColor = 'green';
        button.style.color = 'black';
      }
      isToggled = !isToggled;
    }
  }

  // Request permission for motion events on iOS
  const permButton = document.getElementById('requestPermissionButton');
  permButton.addEventListener('click', () => {
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      DeviceMotionEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            window.addEventListener('devicemotion', handleMotion);
            permButton.style.display = 'none'; // Hide permission button after granting
          }
        })
        .catch(console.error);
    } else {
      // Non-iOS or no need to request permission
      window.addEventListener('devicemotion', handleMotion);
      permButton.style.display = 'none';
    }
  });
