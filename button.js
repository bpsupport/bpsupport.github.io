<link type="text/css" rel="stylesheet" href="https://supporttest5x.brightpattern.com/clientweb/chat-client-v4/css/form.css">
<script type="text/javascript">
    SERVICE_PATTERN_CHAT_CONFIG = {
        appId: '97508d420276497384eafac1d69985cf',
        apiUrl: 'https://supporttest5x.brightpattern.com/clientweb/api/v1',
        tenantUrl: 'supporttest5x.brightpattern.com',
        chatPath: 'https://supporttest5x.brightpattern.com/clientweb/chat-client-v4/'
    };
</script>
<script src="https://supporttest5x.brightpattern.com/clientweb/chat-client-v4/js/init.js"></script> 
<button class="js-opens-chat">Chat</button>
<script type="text/javascript">
  ;(function() {
    var targetSelector = '.js-opens-chat';
    var targets = document.querySelectorAll(targetSelector);
    [].forEach.call(targets, function(target)
 {
      target.addEventListener('click', function(e) {
        e.preventDefault();
        var widget = document.querySelector('#sp-chat-widget')
        widget && widget.click();
      });
    });
  })();
</script>