import React from "react";
export function onRenderBody(
  { setHeadComponents }) {
  setHeadComponents([
    <script
      dangerouslySetInnerHTML={{
        __html:`
        if(window.navigator && navigator.serviceWorker) {
          navigator.serviceWorker.getRegistrations()
          .then(function(registrations) {
            for(let registration of registrations) {
              console.log('Unregistering service worker')
              registration.unregister();
            }
          });
        }
   	 `
      }}
    />,
  ]);
}
