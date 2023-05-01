    // typing text
    function text_type(){
        let txt='welcome to the  vehicles garage';
        // console.log(txt.length);
        var speed=150;
        let i=0;
        function typeWriter() {

       
            if (i < txt.length) {
                document.querySelector(".home-page .hero-title").innerHTML += txt.charAt(i);
              i++;
              setTimeout(typeWriter, speed);
            }
          }

          typeWriter()

         
  }

text_type();