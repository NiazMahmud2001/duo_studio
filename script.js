gsap.registerPlugin(ScrollTrigger , CustomEase);

  var locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"), //give main wrapper tag name
    smooth: true,
    smoothMobile: true,
   
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    //give main wrapper tag name
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed", //give main wrapper tag name
  });
   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
   ScrollTrigger.refresh();

//cursor anim: ======================================================
var cursor_anim = document.querySelector(".cursor_anim");
var cursor_img_anim = document.querySelector(".pg6_hover_anim");
var cursor_img_anim_ss = document.querySelector(".pg6_hover_anim>img");

var win_width = document.querySelector("#main").offsetWidth;

if(win_width>1024){
   window.addEventListener("mousemove" , (e)=>{
      gsap.to(cursor_anim , {
         translateY: e.clientY - 10, 
         translateX: e.clientX - 10,
         duration: 0.5,
      })
      gsap.to(cursor_img_anim , {
         translateY: e.clientY - 110, 
         translateX: e.clientX - 100,
         duration: 0.5,
      })
   });
}else{
   cursor_anim.style.display = "none";
}

//start page1 :======================================================
//>>>>start page1 navbar animation:=====
var page1_height = document.querySelector("#main>.page1").offsetHeight;
var web_width = document.querySelector("body").offsetWidth;
var menu_toggle_click = 0;
var resize_menu = () => {
   web_width = document.querySelector("body").offsetWidth;
   page1_height = document.querySelector("#main>.page1").offsetHeight;
  var man = document.querySelector("#main>.page0>nav>.menu_wrapper>.menu");
  var man1 = document.querySelector("#main>.page0>nav>.menu_wrapper>.menu1");
  var cir = document.querySelector("#main>.page0>nav>.menu_wrapper>.circle");
  //console.log("", web_width);
   var nav_svg_color= [
      document.querySelector("#Rectangle_22124"),
      document.querySelector("#Path_47690"),
      document.querySelector("#Path_47691"),
      document.querySelector("#Path_47692"),
      document.querySelector("#main>.page0>nav>.menu_wrapper>.menu1>svg"),
   ];

  if (web_width <= 1025) {
    man.style.display = "initial";
    man1.style.display = "none";
    document
      .querySelector("#main>.page0>nav>.links")
      .classList.add("link_lessThan_1025");
    document.querySelector(".link_lessThan_1025").style.display = "none";

    var ancs = document.querySelectorAll(".ancor_comm");
    ancs.forEach(element=> { 
      element.classList.remove("more_1025");
      element.classList.add("less_1025");
    });
    nav_svg_color.forEach(element=> {
      element.style.fill="#fbf4fd";
    })
    document.querySelector(".border_toggle_comm").classList.remove("border_toggle_more");
    document.querySelector(".border_toggle_comm").classList.add("border_toggle_less");
    //toggling between buttons if web_width less than 1025px
    man.addEventListener("click", () => {
      locoScroll.stop();

      /*document.querySelector("#main").style.height="100vh";
      document.querySelector("#main").style.overflow="hidden";*/

      man.style.display = "none";
      man1.style.display = "initial";
      //showing the full screen menu bar=============
      document.querySelector(".link_lessThan_1025").style.display = "flex";
      document.querySelector(".page0").style.height = "100vh";
      nav_svg_color.forEach(element=> {
         element.style.fill="#000000";
       })
    });
    man1.addEventListener("click", () => {
      locoScroll.start();

      /*document.querySelector("#main").style.height="auto";
      document.querySelector("#main").style.overflow="hidden";*/

      man1.style.display = "none";
      man.style.display = "initial";
      //removing the full screen menu bar=============
      document.querySelector(".link_lessThan_1025").style.display = "none";
      document.querySelector(".page0").style.height = "65px";
      nav_svg_color.forEach(element=> {
         element.style.fill="#fbf4fd";
       })
    });

    cir.style.display = "none";

  } else if (web_width > 1025) {
    //under toggling the svg and circle
    man.style.display = "none";
    man1.style.display = "none";
    cir.style.display = "initial";
    //under toggling links
    document
      .querySelector("#main>.page0>nav>.links")
      .classList.remove("link_lessThan_1025");
    document.querySelector("#main>.page0>nav>.links").style.display = "flex";

    var ancs = document.querySelectorAll(".ancor_comm");
    ancs.forEach(element=> { 
      element.classList.add("more_1025");
      element.classList.remove("less_1025");
    });
    document.querySelector(".border_toggle_comm").classList.add("border_toggle_more");
    document.querySelector(".border_toggle_comm").classList.remove("border_toggle_less");
    nav_svg_color.forEach(element=> {
      element.style.fill="#fbf4fd";
    })
  }
};
resize_menu();
window.addEventListener("resize", () => {
  resize_menu();
});
//>>>>end page1 navbar animation:=====
var page1_upper_text = document.querySelectorAll("#main>.page1>.txt>.txt_top>.txt_upper>.page1_hover_hidden");
var page1_lower_text = document.querySelectorAll("#main>.page1>.txt>.txt_top>.txt_lower>.page1_hover_hidden");

gsap.to(page1_upper_text , {
   rotateZ: "0deg" ,
   delay:0,
   duration: 1,
})
gsap.to(page1_lower_text , {
   rotateZ: "0deg" ,
   delay:0.1,
   duration: 1,
})

//page1 to page2 transition animation on page1 ==>>>==
var page1_tl = gsap.timeline({
   scrollTrigger:{
      trigger: ".page2",
      markers: false,
      start: "0px " + page1_height + "px" ,
      end: "0% 30%",
      scroller:"#main",
      scrub: true,
   }
});
page1_tl.to("#main>.page1>.txt>.txt_top>.txt_upper", {
   x: -200 ,
   duration: 2, 
},"page1_same_anim");

page1_tl.to("#main>.page1>.txt>.txt_top>.txt_lower",{
   x: 200 , 
   duration: 2,
},"page1_same_anim");

page1_tl.to("#main>.page1>.txt" ,{
   filter:"blur(3px)",
},"page1_same_anim");

//page2: ===================================================================

var page2_video = document.querySelector(".page2>video");

var page2_setVideo = ()=>{
   if(web_width<=1025){
      page2_video.src = "./images/Duo Reel--Mobile-reduced.mp4";
   }else if(web_width>1025){
      page2_video.src = "./images/Duo Reel--Desktop-reduced.mp4";
   }
};

page2_setVideo();
window.addEventListener("resize",()=>{
   page2_setVideo();
});
if(web_width>=500){
   
}
gsap.to(page2_video,{
   width:"90%",
   height:"100%",
   scrollTrigger:{
      trigger:page2_video,
      markers:false,
      start:"0px " + page1_height + "px",
      end:"0% 10%",
      scroller: "#main",
      scrub:0.2 ,
   },
})
//page3 animation: ================================================

var page3_body = document.querySelector(".page3");
gsap.to(["#main" , ".page2" , ".page3"] , {
   scrollTrigger:{
      trigger: page3_body , 
      scroller:"#main" , 
      markers: false , 
      start : "0% 70%" , 
      end: "0% 60%",
      scrub:true,
   },
   backgroundColor: "white",
})

//"#Rectangle_22124" , "#Path_47690" , "#Path_47691","#Path_47692" , "#main>.page0>nav>.menu_wrapper>.menu1>svg" , "#main>.page0>nav>.menu_wrapper>.menu>svg"
gsap.to(["#Path_47690" , "#Path_47691","#Path_47692" , "#main>.page0>nav>.menu_wrapper>.menu1>svg" , "#main>.page0>nav>.menu_wrapper>.menu>svg" , "#main>.page0>nav>.menu_wrapper>.circle" , "#main>.page0>nav>.links>h3>.more_1025"] , {
   scrollTrigger:{
      trigger: page3_body , 
      scroller:"#main" , 
      markers: false , 
      start : "0% 70%" , 
      end: "0% 60%",
      scrub:true,
   },
   fill:"black",
   color:"black",
})
gsap.to([ "#main>.page0>nav>.menu_wrapper>.circle"] , {
   scrollTrigger:{
      trigger: page3_body , 
      scroller:"#main" , 
      markers: false , 
      start : "0% 70%" , 
      end: "0% 60%",
      scrub:true,
   },
   backgroundColor:"black",
})

//==>> page3image change blur animation <<==
var page3_promotion = [document.querySelector(".page3>.page3_center>.page3_center_txt>.page3_center_txt1"),
                        document.querySelector(".page3>.page3_center>.page3_center_txt>.page3_center_txt2"),
                        document.querySelector(".page3>.page3_center>.page3_center_txt>.page3_center_txt3")
];

var page3_img_promotion =[document.querySelector(".page3>.page3_center>.page3_center_img>.page3_center_img_cont>.page3_center_img1"),
                           document.querySelector(".page3>.page3_center>.page3_center_img>.page3_center_img_cont>.page3_center_img2"),
                           document.querySelector(".page3>.page3_center>.page3_center_img>.page3_center_img_cont>.page3_center_img3")
];

for(let page3_loop=0 ; page3_loop<3 ; page3_loop++){
   page3_promotion[page3_loop].addEventListener("mouseenter" , ()=>{
      //getting css property using js : =================
      var page3_ind1 = page3_img_promotion[page3_loop];
      var page3_style = window.getComputedStyle(page3_ind1);
      var page3_zindex = page3_style.getPropertyValue('z-index');
      console.log("sss" + page3_zindex);
      
      if(page3_zindex != 10000){
         gsap.to(".page3>.page3_center>.page3_center_img>.page3_center_img_cont" , {
            filter:"blur(20px)",
            duration: 0.3 ,
            delay: 0,
         })
         page3_img_promotion[page3_loop].style.zIndex = 10000;
         page3_img_promotion[(page3_loop+1)%3].style.zIndex = 10;
         page3_img_promotion[(page3_loop+2)%3].style.zIndex = 100;
         console.log("" + page3_zindex);
         gsap.to(".page3>.page3_center>.page3_center_img>.page3_center_img_cont", {
            filter:"blur(0px)",
            duration: 0.3 ,
            delay: 0.3,
         })
         document.querySelector(".page3>.page3_center>.page3_center_img>.page3_center_img_cont").style.filter = "none";
      };
   });
}

var page3_img_resizer = ()=>{
   var pg3_img_container =document.querySelector("#main>.page3>.page3_center>.page3_center_img");
   var pg3_img_show = [
      document.querySelector(".page3_center_txt1>img"),
      document.querySelector(".page3_center_txt2>img"),
      document.querySelector(".page3_center_txt3>img")
   ]; 

   var pg3_center_txt = document.querySelector(".page3_center_txt");
   var pg3_center_txt0 = document.querySelector(".page3_center_txt0");
   var pg3_center_txt1 = document.querySelector(".page3_center_txt1");
   var pg3_center_txt2 = document.querySelector(".page3_center_txt2");
   var pg3_center_txt3 = document.querySelector(".page3_center_txt3");

   var pg3_center_bottom = [
      document.querySelector(".page3_center_txt1_bottom"),
      document.querySelector(".page3_center_txt2_bottom"),
      document.querySelector(".page3_center_txt3_bottom")
   ];

   var pg3_txt_h2 = [
      document.querySelector(".page3_center_txt1>h2"),
      document.querySelector(".page3_center_txt2>h2"),
      document.querySelector(".page3_center_txt3>h2"),
   ]
   var pg3_txt_h4 = [
      document.querySelector(".page3_center_txt1_bottom>h4"),
      document.querySelector(".page3_center_txt2_bottom>h4"),
      document.querySelector(".page3_center_txt3_bottom>h4"),
   ]
   var pg3_change_height = document.querySelector(".page3");
   var pg3_heading_border = document.querySelector(".page3_top");
   var pg3_center_height = document.querySelector(".page3_center");

   if(web_width<=1025 && web_width>=800){

      pg3_heading_border.style.paddingBottom = "15px";
      pg3_heading_border.style.marginBottom = "25px";
      pg3_heading_border.style.borderBottom = "1px solid black";

      pg3_center_height.style.height = "auto";

      //pg3_change_height.style.minHeight = "100vh";
      pg3_img_container.style.display = "none";
      for(var io=0 ; io<3 ; io++){
         pg3_img_show[io].style.display = "initial";
         pg3_center_bottom[io].classList.add("page3_center_txt_bottom_res");
         pg3_txt_h2[io].style.fontSize = "2vw";
         pg3_txt_h4[io].style.fontSize = "1.5vw";
      }

      pg3_center_txt.classList.add("page3_center_txt_res");
      pg3_center_txt0.classList.add("page3_center_txt0_res");
      pg3_center_txt1.classList.add("page3_center_txt1_res");
      pg3_center_txt2.classList.add("page3_center_txt2_res");
      pg3_center_txt3.classList.add("page3_center_txt3_res");


   }else if(web_width<=799 && web_width>=550){

      pg3_heading_border.style.paddingBottom = "15px";
      pg3_heading_border.style.marginBottom = "25px";
      pg3_heading_border.style.borderBottom = "1px solid black";

      pg3_center_height.style.height = "auto";

      //pg3_change_height.style.minHeight = "120vh";
      pg3_img_container.style.display = "none";
      for(var io=0 ; io<3 ; io++){
         pg3_img_show[io].style.display = "initial";
         pg3_center_bottom[io].classList.add("page3_center_txt_bottom_res");
         pg3_txt_h2[io].style.fontSize = "23px";
         pg3_txt_h4[io].style.fontSize = "13px";
      }

      pg3_center_txt.classList.add("page3_center_txt_res");
      pg3_center_txt0.classList.add("page3_center_txt0_res");
      pg3_center_txt1.classList.add("page3_center_txt1_res");
      pg3_center_txt2.classList.add("page3_center_txt2_res");
      pg3_center_txt3.classList.add("page3_center_txt3_res");
   }else if(web_width<549 ){
      pg3_heading_border.style.paddingBottom = "15px";
      pg3_heading_border.style.marginBottom = "25px";
      pg3_heading_border.style.borderBottom = "1px solid black";

      pg3_center_height.style.height = "auto";

      //g3_img_container.style.display = "none";
      for(var io=0 ; io<3 ; io++){
         pg3_img_show[io].style.display = "initial";
         pg3_center_bottom[io].classList.add("page3_center_txt_bottom_res");
         pg3_txt_h2[io].style.fontSize = "23px";
         pg3_txt_h4[io].style.fontSize = "13px";
      }
      pg3_center_txt.classList.add("page3_center_txt_res");
      pg3_center_txt0.classList.add("page3_center_txt0_res");
      pg3_center_txt1.classList.add("page3_center_txt1_res");
      pg3_center_txt2.classList.add("page3_center_txt2_res");
      pg3_center_txt3.classList.add("page3_center_txt3_res");

   }else if(web_width>1025){
      pg3_change_height.style.minHeight = "120vh";
      pg3_img_container.style.display = "initial";
      for(var io=0 ; io<3 ; io++){
         pg3_img_show[io].style.display = "none";
         pg3_center_bottom[io].classList.remove("page3_center_txt_bottom_res");
         pg3_txt_h2[io].style.fontSize = "1.6vw";
         pg3_txt_h4[io].style.fontSize = "1.3vw";
      }
      pg3_center_txt.classList.remove("page3_center_txt_res");
      pg3_center_txt0.classList.remove("page3_center_txt0_res");
      pg3_center_txt1.classList.remove("page3_center_txt1_res");
      pg3_center_txt2.classList.remove("page3_center_txt2_res");
      pg3_center_txt3.classList.remove("page3_center_txt3_res");
   }
}
page3_img_resizer();
window.addEventListener("resize", function(e){
   page3_img_resizer();
});
//page4:=======================================================

gsap.to(".page4>.page4_border_top", {
   scrollTrigger:{
      trigger: ".page4" , 
      scroller:"#main" , 
      markers: false, 
      start : "0% 90%" , 
      end: "0% 85%",
      scrub:false,
   },
   width:"100vw",
   duration: 0.8,
})

//page5: ======================================================
var page5_tt = document.querySelector(".page5");
var page4_tt = document.querySelector(".page4");

//page4 and page5 border anim: ===...
gsap.to(["#main" ,
      ".page4" , 
      ".page5",
      ".page4_top_left>.page4_top_left_bottom>a>.page4_inner_txt",
      ".page4_bottom>.page4_bottom_left>.page4_bottom_left_together>.page4_inner_txt" ,
      ".page4_bottom_right_top>.page4_bottom_right_together>.page4_inner_txt",
      ".page4_bottom_right>.page4_bottom_right_bottom>a"] , {
   scrollTrigger:{
      trigger: page5_tt , 
      scroller:"#main" , 
      markers: false , 
      start : "0% 50%" , 
      end: "0% 40%",
      scrub:true,
   },
   color: "white",
   backgroundColor: "black",
})
gsap.to(".page5>.page5_border_top", {
   scrollTrigger:{
      trigger: page5_tt , 
      scroller:"#main" , 
      markers: false , 
      start : "0% 50%" , 
      end: "0% 40%",
      scrub:true,
   },
   backgroundColor: "white",
})
gsap.to(".page5>.page5_border_top", {
   scrollTrigger:{
      trigger: page5_tt , 
      scroller:"#main" , 
      markers: false , 
      start : "0% 95%" , 
      end: "0% 90%",
      scrub:false,
   },
   width:"100vw",
   duration: 0.8,
})
gsap.to(["#Path_47690" , "#Path_47691","#Path_47692" , "#main>.page0>nav>.menu_wrapper>.menu1>svg" , "#main>.page0>nav>.menu_wrapper>.menu>svg" , "#main>.page0>nav>.menu_wrapper>.circle" , "#main>.page0>nav>.links>h3>.more_1025"], {
   scrollTrigger:{
      trigger: page5_tt , 
      scroller:"#main" , 
      markers: false , 
      start : "0% 50%" , 
      end: "0% 40%",
      scrub:true,
   },
   fill:"white",
   color:"white",
})
gsap.to([ "#main>.page0>nav>.menu_wrapper>.circle"] , {
   scrollTrigger:{
      trigger: page5_tt , 
      scroller:"#main" , 
      markers: false , 
      start : "0% 50%" , 
      end: "0% 40%",
      scrub:true,
   },
   backgroundColor:"white",
})
//page5 animation:===========================================================

//page5 circle anim:==>>>>
var pg5_cir_cont = document.querySelector(".page5>.page5_top>.page5_top_right")
var pg5_cir = document.querySelector(".page5>.page5_top>.page5_top_right>.page5_top_circle");
var pg5_cir_txt = document.querySelector(".page5>.page5_top>.page5_top_right>.page5_top_circle>.page5_top_circle_txt");

pg5_cir_cont.addEventListener("mousemove", function(e){
   var rect = pg5_cir_cont.getBoundingClientRect();
   //console.log(pg5_cir_cont.offsetTop);
   //console.log(rect);
   //console.log(e);
   var x = e.clientX - rect.x - (rect.width/2); 
   var y = e.clientY - rect.y - (rect.height/2); 

   var x_abs = Math.abs(x/(rect.width*0.8));
   var y_abs = Math.abs(y/(rect.height*0.8));
   //console.log(x_abs + " " + y_abs);

   var ratio_x = 1 - x_abs; 
   var ratio_y = 1 - y_abs;

   //console.log(x + " " + y);
   gsap.to(pg5_cir, {
      translateX: (x * ratio_x * 0.8)+ "px",
      translateY: (y * ratio_y * 0.8)+ "px",
      duration: 1 ,
   })
   gsap.to(pg5_cir_txt, {
      translateX: (x * ratio_x * 0.1)+ "px",
      translateY: (y * ratio_y * 0.1)+ "px",
      duration: 1 ,
   })
   
})
pg5_cir_cont.addEventListener("mouseleave", function(e){
   gsap.to(pg5_cir, {
      translateX: "0px",
      translateY: "0px",
      duration: 1 ,
      ease: Elastic.easeOut.config(1, 0.3),
   })
   gsap.to(pg5_cir_txt, {
      translateX: "0px",
      translateY: "0px",
      duration: 1 ,
      ease: Elastic.easeOut.config(1, 0.3),
   })
})

//page5 slide anim:: ==>>====
/*
//grab and slide animation====

   const slider = document.querySelector(".page5_bottom");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.computedStyleMap.cursor = "grabbing";
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.computedStyleMap.cursor = "grab";
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.computedStyleMap.cursor = "grab";
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; //controls scroll-fast

    gsap.to(slider, {
      duration: 0.3,
      ease:Power1.easeInOut,
      scrollLeft: scrollLeft - walk,
    });
  });
*/
var inner = document.querySelector(".page5");
const scroll = document.querySelector('.page5_bottom_cont');

var pg5_bottom_width = document.querySelector(".page5>.page5_bottom>.page5_bottom_cont").width;
var pg5__width = inner.width;
ScrollTrigger.create({
   scroller: '#main',
   trigger: inner,
   start: 'center center',
   //end: () => `+=${scroll.clientWidth}`,
   end:"bottom -250%",
   markers: false,
   pin: inner,
   pinType: 'transform',     
})
    
    
//moving from left to right
gsap.to(scroll, {
  x: () => `${-(scroll.clientWidth-(scroll.clientWidth*0.25))}px`,
   ease:Power1.easeInOut,
  scrollTrigger: {
    trigger: scroll,
    scroller: '#main',
    start: 'center center',
    //end: () => `=${inner.scrollWidth}`,
    markers:false,
    end: "top -300%",
    scrub: true,
  }
});


//page6 animation:=====================================

var pg6_img = [
   "./images/page6_img/home-mentions-verizon.webp",
   "./images/page6_img/home-mentions-awwwards-honorablemention.webp",
   "./images/page6_img/home-mentions-awwwards-mobile.webp",
   "./images/page6_img/home-mentions-mindsparkle.webp",
   "./images/page6_img/home-mentions-orpetron.webp",
   //pg_bottom
   "./images/page6_img/client-amparo.webp", 
   "./images/page6_img/client-apollo.webp",
   "./images/page6_img/client-cruefilms.webp",
   "./images/page6_img/client-finturity.webp",
   "./images/page6_img/client-gata.webp"
];

var pg6_bottom_part = document.querySelectorAll(".page6_bottom_inner")
if(win_width>1024){
   for(let iip=0 ; iip<10 ; iip++){
      pg6_bottom_part[iip].addEventListener("mouseenter", (e) => {
         cursor_img_anim_ss.src = pg6_img[iip];
         cursor_img_anim.style.opacity = 1 ;
         cursor_img_anim.style.display = "initial";
      })
      pg6_bottom_part[iip].addEventListener("mouseleave", (e) => {
         cursor_img_anim_ss.src = "av";
         cursor_img_anim.style.opacity = 0 ;
         cursor_img_anim.style.display = "none";
      });
   
      //page6 image rotation anim===>>>>==
      var pg6_prevX = 0 ;
      pg6_bottom_part[iip].addEventListener("mousemove",(e)=>{
            var pg6_currX = e.offsetX - pg6_prevX ; 
            var pg6_tempX = (pg6_currX/125)*200;
   
            var pg6_clampX = gsap.utils.clamp(-45 , 45 , pg6_tempX)
   
            pg6_prevX = e.offsetX;  
   
            gsap.to(cursor_img_anim , {
               rotateZ: pg6_clampX + "deg",
               duration: 0.5 ,
            })
         })
         var temp_pg6_x = 0;
         setInterval(function(){
            if(pg6_prevX == temp_pg6_x){
               gsap.to(cursor_img_anim , {
                  rotateZ:"0deg",
                  duration: 0.5 ,
               })
            }
            temp_pg6_x = pg6_prevX; 
         } , 50)
   }

}

//view client button:========================================
var pg6_client_butt = document.querySelector(".page6_top_right");
var pg6_bottom = document.querySelector(".page6_bottom");
var pg6_bottom1 = document.querySelector(".page6_bottom1");

var pg6_faltu1 = document.querySelector(".pg6_faltu1");
var pg6_faltu2 = document.querySelector(".pg6_faltu2");

var pg6_click = 0;
pg6_client_butt.addEventListener("click",(e)=>{
   if(pg6_click%2 == 0){
      var pg6_tl = gsap.timeline();
      pg6_tl.to(pg6_bottom , {
         opacity: 0 , 
         duration: 0.5,
         delay: 0,
      });
      pg6_tl.to(pg6_bottom , {
         display:"none",
         duration: 0,
         delay: 0,
      })
      pg6_tl.to(pg6_bottom1 , {
         display: "initial",
         duration: 0,
         delay: 0,
      });
      pg6_tl.to(pg6_bottom1 , {
         opacity: 1 , 
         duration: 0.5,
         delay: 0,
      });

      //mentions client animation: ==>>==
      gsap.to(pg6_faltu1 , {
         paddingTop: "20%" , 
         duration: 0.4 ,
         delay: 0 , 
      })
      gsap.to(pg6_faltu1 , {
         opacity: 0,
         duration: 0 ,
         delay: 0.4 , 
         color:"rgb(202, 163, 217)",
      })
      gsap.to(pg6_faltu1 , {
         paddingBottom: "20%" , 
         paddingTop: "0%",
         duration: 0 ,
         delay: 0.41 , 
      })
      gsap.to(pg6_faltu1 , { 
         opacity: 1,
         duration: 0 ,
         delay: 0.42 , 
      })
      gsap.to(pg6_faltu1 , {
         paddingBottom: "0%" , 
         duration: 0.4 ,
         delay: 0.42 , 
      })


      gsap.to(pg6_faltu2 , {
         paddingBottom: "20%" , 
         duration: 0.4 ,
         delay: 0 , 
      })
      gsap.to(pg6_faltu2 , {
         opacity: 0,
         duration: 0 ,
         color:"white",
         delay: 0.41 , 
      })
      gsap.to(pg6_faltu2 , {
         paddingTop: "20%" , 
         paddingBottom:"0%",
         duration: 0 ,
         delay: 0.42 , 
      })
      gsap.to(pg6_faltu2 , { 
         opacity: 1,
         duration: 0 ,
         delay: 0.42 , 
      })
      gsap.to(pg6_faltu2 , {
         paddingTop: "0%" , 
         opacity: 1,
         duration: 0.4 ,
         delay: 0.42 , 
      })

   }else if(pg6_click%2 == 1){
      var pg6_tl1 = gsap.timeline();
      pg6_tl1.to(pg6_bottom1 , {
         opacity: 0 , 
         duration: 0.5,
         delay: 0,
      });
      pg6_tl1.to(pg6_bottom1, {
         display:"none",
         duration: 0,
         delay: 0,
      })
      pg6_tl1.to(pg6_bottom , {
         display: "initial",
         duration: 0,
         delay: 0,
      });
      pg6_tl1.to(pg6_bottom , {
         opacity: 1 , 
         duration: 0.5,
         delay: 0,
      });

      //mentions client animation: ==>>==
      gsap.to(pg6_faltu1 , {
         paddingTop: "20%" , 
         duration: 0.4 ,
         delay: 0 , 
      })
      gsap.to(pg6_faltu1 , {
         opacity: 0,
         duration: 0 ,
         delay: 0.4 , 
         color:"white",
      })
      gsap.to(pg6_faltu1 , {
         paddingBottom: "20%" , 
         paddingTop: "0%",
         duration: 0 ,
         delay: 0.41 , 
      })
      gsap.to(pg6_faltu1 , { 
         opacity: 1,
         duration: 0 ,
         delay: 0.42 , 
      })
      gsap.to(pg6_faltu1 , {
         paddingBottom: "0%" , 
         duration: 0.4 ,
         delay: 0.42 , 
      })


      gsap.to(pg6_faltu2 , {
         paddingBottom: "20%" , 
         duration: 0.4 ,
         delay: 0 , 
      })
      gsap.to(pg6_faltu2 , {
         opacity: 0,
         duration: 0 ,
         color:"rgb(202, 163, 217)",
         delay: 0.41 , 
      })
      gsap.to(pg6_faltu2 , {
         paddingTop: "20%" , 
         paddingBottom:"0%",
         duration: 0 ,
         delay: 0.42 , 
      })
      gsap.to(pg6_faltu2 , { 
         opacity: 1,
         duration: 0 ,
         delay: 0.42 , 
      })
      gsap.to(pg6_faltu2 , {
         paddingTop: "0%" , 
         opacity: 1,
         duration: 0.4 ,
         delay: 0.42 , 
      })
   };

   pg6_click++;
})

//page7a animation: =========================================
var pg7_rec = document.querySelector(".pg7_cont>.pg7_top>.pg7_top_right");
var pg7_cir = document.querySelector(".pg7_cont>.pg7_top>.pg7_top_right>.pg7_top_circle");
var pg7_cir_txt = document.querySelector(".pg7_cont>.pg7_top>.pg7_top_right>.pg7_top_circle>.pg7_top_circle_txt");

pg7_rec.addEventListener("mousemove" , (e)=>{
   var pg7_rect = pg7_rec.getBoundingClientRect();


   var pg7_x = e.clientX - pg7_rect.x - (pg7_rect.width/2); 
   var pg7_y = e.clientY - pg7_rect.y - (pg7_rect.height/2); 
   ///console.log(pg7_x  + " " + pg7_y);

   var pg7_x_abs = Math.abs(pg7_x/(pg7_rect.width*0.8));
   var pg7_y_abs = Math.abs(pg7_y/(pg7_rect.height*0.8));
   //console.log(x_abs + " " + y_abs);

   var pg7_ratio_x = 1 - pg7_x_abs; 
   var pg7_ratio_y = 1 - pg7_y_abs;

   //console.log(x + " " + y);
   gsap.to(pg7_cir, {
      translateX: (pg7_x * pg7_ratio_x * 0.8)+ "px",
      translateY: (pg7_y * pg7_ratio_y * 0.8)+ "px",
      duration: 1 ,
   })
   gsap.to(pg7_cir_txt, {
      translateX: (pg7_x * pg7_ratio_x * 0.1)+ "px",
      translateY: (pg7_y * pg7_ratio_y * 0.1)+ "px",
      duration: 1 ,
   })
   
})
pg7_rec.addEventListener("mouseleave", function(e){
   gsap.to(pg7_cir, {
      translateX: "0px",
      translateY: "0px",
      duration: 1 ,
      ease: Elastic.easeOut.config(1, 0.3),
   })
   gsap.to(pg7_cir_txt, {
      translateX: "0px",
      translateY: "0px",
      duration: 1 ,
      ease: Elastic.easeOut.config(1, 0.3),
   })
})




















