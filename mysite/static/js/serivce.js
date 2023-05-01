//   service images

function slider_img(){

    let car_img_container=document.querySelector(".car-img-container img");
    // console.log(car_img_container);
    
    let up_btn=document.querySelector(".btn-up");
    let down_btn=document.querySelector(".btn-down");
    // console.log(up_btn);
    // console.log(down_btn);
    
    
    // let period_txt=document.getElementById("period");
    // let period_img=document.getElementById("period-img");
    // console.log(period_txt,period_img);
    
    // let ac_repair_txt=document.getElementById("ac-repair");
    // let ac_repair_img=document.getElementById("ac-repair-img");
    // console.log(ac_repair_img,ac_repair_txt);
    
    
    // let battery_txt=document.getElementById("battery");
    // let battery_img=document.getElementById("battery-img");
    // console.log(battery_img,battery_txt);
    
    // let body_txt=document.getElementById("body");
    // let body_img=document.getElementById("body-img");
    // console.log(body_img,body_txt);
    
    
    
    let images_all=[
    
        "/static/assets/services-bg.png",
        "/static/assets/bullet-bike.avif",
        "/static/assets/indian-bike.png",
        "/static/assets/benz-car.jpg",
        "/static/assets/triumph-bike.png",
        "/static/assets/bmw-car.jpeg",
        "/static/assets/jawa-bike.jpg",
    ]
    
    let images_all_length=images_all.length-1;
    
    // console.log(images_all_length);
    

    
    up_btn.addEventListener("click",show_up);
    down_btn.addEventListener("click",show_down);
    
    function starting_img() {
    
        car_img_container.setAttribute("src",images_all[0]);
    
        
    }
    
    let  count=0;
    
    function show_up(){
    
        if(count==0){
    
            starting_img();
    
        }
    
        count++;
    
        if(count<=images_all_length){
    
            car_img_container.setAttribute("src",images_all[count]);
           
    
    
        }
    
        else{
    
            count=count-1;
    
        }
    
        
    }
    
    
    
    function show_down(){
    
        count=count-1;
    
        if(count<=-1){
    
            count=count+1;
        }
    
        else{
    
            car_img_container.setAttribute("src",images_all[count]);
    
    
        }
    }
    
    
    }
    
    slider_img();