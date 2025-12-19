// This file loads the Google Identity Services script for use in the signup page.
export function loadGoogleScript() {
  if (document.getElementById('google-identity')) return;
  const script = document.createElement('script');
  script.src = 'https://accounts.google.com/gsi/client';
  script.async = true;
  script.defer = true;
  script.id = 'google-identity';
  document.body.appendChild(script);
}
