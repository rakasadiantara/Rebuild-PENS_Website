<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
        function clock() {
          var now = new Date();
          var secs = ('0' + now.getSeconds()).slice(-2);
          var mins = ('0' + now.getMinutes()).slice(-2);
          var hr = now.getHours();
          var Time = hr + ":" + mins + ":" + secs;
          document.getElementById("watch").innerHTML = Time;
          requestAnimationFrame(clock);
        }

        requestAnimationFrame(clock);
    });
</script>