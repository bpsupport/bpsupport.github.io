//mouse

$(document).mousemove(function(event) {
  windowWidth = $(window).width();
  windowHeight = $(window).height();
  
  mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
  mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
  
  $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #3498db, #9b59b6)');
});


//token

async function gettoken() {
const auth = await fetch('https://supporttest5x.brightpattern.com/configapi/v2/oauth/token', {

method: 'POST',
mode: 'no-cors',

headers: {

'Content-Type': 'application/x-www-form-urlencoded',
'Accept':'*/*'

},
body: new URLSearchParams({
client_id: 'matthew.simpson',
client_secret: '7MMBYB1PdlgCP6ivTkyxC3mUjvc3sqGeiXvTn8soCYveZrj6R8suzSkLROpjfpVX',
scope: 'supporttest5x.brightpattern.com',
grant_type: 'client_credentials'
    })

})
  return auth.json();
}

// auth = await resp.json()
//alert( auth.toString() )

gettoken()
.then(data => {
    console.log(data);
  });