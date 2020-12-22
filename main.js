  var x = document.getElementById("ip")
        function show() {
            if (x.type == "password") {
                x.type = "text";
                document.getElementById('hide').style.display = "inline";
                document.getElementById('show').style.display = "none";
            } else {
                x.type = "password";
                document.getElementById('hide').style.display = "none";
                document.getElementById('show').style.display = "inline";
            }
        }
        
