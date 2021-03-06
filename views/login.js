var userProfile;
$(() => {
  const herokuURL = 'https://gblog-db.herokuapp.com';

  const webAuth = new auth0.WebAuth({
    domain: 'joscelyn-james.auth0.com',
    clientID: 'p9Ckvwt-zR0jR-oU73QZl-uoxycmGDIR',
    responseType: 'token id_token',
    audience: 'https://joscelyn-james.auth0.com/userinfo',
    scope: 'openid profile',
    redirectUri: window.location.href
  });

  const loginBtn = document.getElementById('loginBtn');

  window.setTimeout(() => {
    console.log('go');
    loginBtn.addEventListener('click', function(e) {
      e.preventDefault();
      webAuth.authorize();
    });
  }, 500);

  function setSession(authResult) {
    // Set the time that the access token will expire at
    const scopes = authResult.scope || requestedScopes || '';
    var expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('scopes', JSON.stringify(scopes));
  }

  function logout() {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    displayButtons();
  }

  function isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  function handleAuthentication() {
    webAuth.parseHash(function(err, authResult) {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        setSession(authResult);
      } else if (err) {
        console.log(err);
        alert(
          'Error: ' + err.error + '. Check the console for further details.'
        );
      }
    });
  }

  function getProfile() {
    if (!userProfile) {
      var accessToken = localStorage.getItem('access_token');

      if (!accessToken) {
        console.log('Access token must exist to fetch profile');
      }

      webAuth.client.userInfo(accessToken, function(err, profile) {
        if (profile) {
          userProfile = profile;
          localStorage.setItem('user', JSON.stringify(profile));
          console.log('Success', userProfile);
        }
      });
    } else {
      displayProfile();
    }
  }

  function displayProfile() {
    // display the profile
    document.querySelector('#profile-view .nickname').innerHTML =
      userProfile.nickname;

    document.querySelector(
      '#profile-view .full-profile'
    ).innerHTML = JSON.stringify(userProfile, null, 2);

    document.querySelector('#profile-view img').src = userProfile.picture;
  }

  handleAuthentication();
  window.getProfile = getProfile();

});
