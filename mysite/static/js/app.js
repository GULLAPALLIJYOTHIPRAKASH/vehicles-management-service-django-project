
            //sticky navbar function
        function  sticky_navbar(){ 
                
                //navbar-container  
                let  navbar_container=document.querySelector(".navbar-container");

                // console.log(navbar_container);

                // add event to window to get scroll Y values dynamic very time you scroll
                window.addEventListener("scroll",add_sticky_navbar);

                // event function 
                function add_sticky_navbar(){

                // scrollY value 
                let scroll_up_num=window.scrollY;
                // console.log(scroll_up_num);

                // innerwidth value if  >=992  70  or less 50;
                let screen_innerwidht_num=window.innerWidth >=992 ? 70 :50;
                // console.log(screen_innerwidht_num);

                // if scrollY  >=  innerwidth value  if   70  or  50;
                if(scroll_up_num>=screen_innerwidht_num){

                    // add class to navbarcontainer  nav-sticky
                    navbar_container.classList.add("nav-sticky")
                }

                else{

                    // removed class to navbarcontainer  nav-sticky
                    navbar_container.classList.remove("nav-sticky")

                }

                }
    }
    sticky_navbar();


        // sidebar function
        function sidebar(){

        // sidebar-container
        let sidebar_container=document.querySelector(".sidebar-container");
        // console.log(sidebar_container);

        // sidebar-close 
        let sidebar_close=document.querySelector(".sidebar-close");
        // console.log(sidebar_close);

        // hamburger
        let hamburger=document.querySelector(".hamburger");
        // console.log(hamburger);

        // add events to hamburger and close  
        hamburger.addEventListener("click",show_sidebar);
        sidebar_close.addEventListener("click",close_sidebar);

        // hamburger event
        function show_sidebar(){

            sidebar_container.classList.add("show-sidebar");

        }

        // close event
        function close_sidebar(){

            sidebar_container.classList.remove("show-sidebar");
        }

    }
     sidebar();



    // footer date function
    function footer(){

        let copyright_date=document.querySelector(".copyright-date");
        // console.log(copyright_date);

        let date=new Date();

        copyright_date.innerText=date.getFullYear()+1;
    }
     footer();







 


   