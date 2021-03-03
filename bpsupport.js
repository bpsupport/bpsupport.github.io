async function gettoken() {
const auth = await fetch('https://supporttest5x.brightpattern.com/configapi/v2/oauth/token', {

method: 'POST',
mode: 'same-origin',

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
