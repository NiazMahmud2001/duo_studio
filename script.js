gsap.registerPlugin(ScrollTrigger , CustomEase);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"), //give main wrapper tag name
    smooth: true,
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

//start page1 :======================================================
//>>>>start page1 navbar animation:=====
var page1_height = document.querySelector("#main>.page1").offsetHeight;
var web_width = document.querySelector("body").offsetWidth;
var menu_toggle_click = 0;
var resize_menu = () => {
   web_width = document.querySelector("body").offsetWidth;
   page1_height = document.querySelector("#main>.page1").offsetHeight;
  var man = document.querySelector("#main>.page1>nav>.menu_wrapper>.menu");
  var man1 = document.querySelector("#main>.page1>nav>.menu_wrapper>.menu1");
  var cir = document.querySelector("#main>.page1>nav>.menu_wrapper>.circle");
  //console.log("", web_width);
   var nav_svg_color= [
      document.querySelector("#Rectangle_22124"),
      document.querySelector("#Path_47690"),
      document.querySelector("#Path_47691"),
      document.querySelector("#Path_47692"),
      document.querySelector("#main>.page1>nav>.menu_wrapper>.menu1>svg"),
   ];

  if (web_width <= 1025) {
    man.style.display = "initial";
    man1.style.display = "none";
    document
      .querySelector("#main>.page1>nav>.links")
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
      //ScrollTrigger.addEventListener("refresh", () => locoScroll.stop());
      //ScrollTrigger.refresh();
      locoScroll.stop();
      man.style.display = "none";
      man1.style.display = "initial";
      //showing the full screen menu bar=============
      document.querySelector(".link_lessThan_1025").style.display = "flex";
      nav_svg_color.forEach(element=> {
         element.style.fill="#000000";
       })
    });
    man1.addEventListener("click", () => {
      //ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      //ScrollTrigger.refresh();
      locoScroll.start();
      man1.style.display = "none";
      man.style.display = "initial";
      //removing the full screen menu bar=============
      document.querySelector(".link_lessThan_1025").style.display = "none";
      nav_svg_color.forEach(element=> {
         element.style.fill="#fbf4fd";
       })
    });

    cir.style.display = "none";

  } else if (web_width > 1025) {
   //ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
   //ScrollTrigger.refresh();
   locoScroll.start();
    //under toggling the svg and circle
    man.style.display = "none";
    man1.style.display = "none";
    cir.style.display = "initial";
    //under toggling links
    document
      .querySelector("#main>.page1>nav>.links")
      .classList.remove("link_lessThan_1025");
    document.querySelector("#main>.page1>nav>.links").style.display = "flex";

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
   x: -100 , 
},"page1_same_anim");

page1_tl.to("#main>.page1>.txt>.txt_top>.txt_lower",{
   x: 100 , 
},"page1_same_anim");

page1_tl.to("#main>.page1>.txt" ,{
   filter:"blur(3px)",
},"page1_same_anim");

//page2: ===================================================================

var page2_video = document.querySelector(".page2>video");

var page2_setVideo = ()=>{
   if(web_width<=1025){
      page2_video.src = "./images/Duo Reel--Mobile-reduced.mp4";
      document.querySelector("#main>.page1").removeAttribute("data-scroll-sticky");
      document.querySelector("#main>.page1").setAttribute("data-scroll-section" , "");
   }else if(web_width>1025){
      page2_video.src = "./images/Duo Reel--Desktop-reduced.mp4";
      document.querySelector("#main>.page1").setAttribute("data-scroll-sticky" , "");
      document.querySelector("#main>.page1").removeAttribute("data-scroll-section");
   }
};

page2_setVideo();
window.addEventListener("resize",()=>{
   page2_setVideo();
});

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
})

//page4 animation:======================================================

var page4_hei = document.querySelector("#main>.page4");
//ctrl height
var page4_top = document.querySelector("#main>.page4>.page4_top");
//ctrl height and margin and flex-direction:column
var page4_bottom = document.querySelector("#main>.page4>.page4_bottom");
//ctrl height and margin and flex-direction:column

//=== content1
var page_4_top_left = document.querySelector(".page4>.page4_top>.page4_top_left");
//ctrl width
var page4_left_bottom = document.querySelector(".page4>.page4_top>.page4_top_left");
//ctrl width and height
var page4_content_1 = document.querySelector(".page4_top_left>.page4_top_left_bottom>a>.page4_img_cont");
//ctrl width and height

var page4_content_1_txt = document.querySelector(".page4_top_left>.page4_top_left_bottom>a>.page4_inner_txt");
var page4_content_1_txt1 = document.querySelector(".page4_top_left>.page4_top_left_bottom>a>.page4_inner_txt>h2");
var page4_content_1_txt2 = document.querySelector(".page4_top_left>.page4_top_left_bottom>a>.page4_inner_txt>h4");
//up txt: ctrl : font size and its container(_1_txt)

//=== content2 
var page_4_top_right = document.querySelector(".page4>.page4_top>.page4_top_right");
//ctrl width
var page4_right_div = document.querySelector(".page4>.page4_top>.page4_top_right>div");
//ctrl width and height
var page4_content_2 = document.querySelector(".page4_top_right_together>.page4_top_right_video");
//ctrl width and height

var page4_content_2_txt = document.querySelector(".page4_top_right>div>.page4_top_right_together>.page4_inner_txt");
var page4_content_2_txt1 = document.querySelector(".page4_top_right_together>.page4_inner_txt>h2");
var page4_content_2_txt2 = document.querySelector(".page4_top_right>div>.page4_top_right_together>.page4_inner_txt>h4");
//up txt: ctrl : font size and its container(_1_txt)

//=== content3 
var page_4_bottom_left = document.querySelector(".page4_bottom>.page4_bottom_left");
//ctrl width
var page4_bottom_left_together = document.querySelector(".page4_bottom>.page4_bottom_left>.page4_bottom_left_together");
//ctrl width and height
var page4_content_3 = document.querySelector(".page4_bottom>.page4_bottom_left>.page4_bottom_left_together>.page4_bottom_left_together_video");
//ctrl width and height

var page4_content_3_txt = document.querySelector(".page4_bottom>.page4_bottom_left>.page4_bottom_left_together>.page4_inner_txt");
var page4_content_3_txt1 = document.querySelector(".page4_bottom>.page4_bottom_left>.page4_bottom_left_together>.page4_inner_txt>h2");
var page4_content_3_txt2 = document.querySelector(".page4_bottom>.page4_bottom_left>.page4_bottom_left_together>.page4_inner_txt>h4");
//up txt: ctrl : font size and its container(_1_txt)

//=== content4 
var page_4_bottom_right = document.querySelector(".page4_bottom>.page4_bottom_right");
//ctrl width
var page4_bottom_right_top = document.querySelector(".page4_bottom>.page4_bottom_right>.page4_bottom_right_top");
//ctrl width and height
var page4_content_4 = document.querySelector(".page4_bottom>.page4_bottom_right>.page4_bottom_right_top>.page4_bottom_right_together");
//ctrl width and height

var page4_content_4_txt = document.querySelector(".page4_bottom_right_top>.page4_bottom_right_together>.page4_inner_txt");
var page4_content_4_txt1 = document.querySelector(".page4_bottom_right_top>.page4_bottom_right_together>.page4_inner_txt>h2");
var page4_content_4_txt2 = document.querySelector(".page4_bottom_right_top>.page4_bottom_right_together>.page4_inner_txt>h4");
//up txt: ctrl : font size and its container(_1_txt)


//=== content5
var page4_content5_txt = document.querySelector(".page4_bottom_right>.page4_bottom_right_bottom");
var page4_content5_txt1 = document.querySelector(".page4_bottom_right>.page4_bottom_right_bottom>h3");
var page4_content5_txt2 = document.querySelector(".page4_bottom_right>.page4_bottom_right_bottom>a");
