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
if(web_width<=1025){
   page2_video.src = "./images/Duo Reel--Mobile-reduced.mp4";
   document.querySelector("#main>.page2").removeAttribute("data-scroll-section");
   document.querySelector("#main>.page3").removeAttribute("data-scroll-section");
}else if(web_width>1025){
   page2_video.src = "./images/Duo Reel--Desktop-reduced.mp4";
   document.querySelector("#main>.page2").setAttribute("data-scroll-section" , "");
   document.querySelector("#main>.page3").setAttribute("data-scroll-section" , "");
}
window.addEventListener("resize",()=>{
   if(web_width<=1025){
      page2_video.src = "./images/Duo Reel--Mobile-reduced.mp4";
      document.querySelector("#main>.page2").removeAttribute("data-scroll-section");
      document.querySelector("#main>.page3").removeAttribute("data-scroll-section");
   }else if(web_width>1025){
      page2_video.src = "./images/Duo Reel--Desktop-reduced.mp4";
      document.querySelector("#main>.page2").setAttribute("data-scroll-section" , "");
      document.querySelector("#main>.page3").setAttribute("data-scroll-section" , "");
   }
})
gsap.to(page2_video,{
   width:"100%",
   height:"100%",
   scrollTrigger:{
      trigger:page2_video,
      markers:false,
      start:"0px " + page1_height + "px",
      end:"0% 10%",
      scroller: "#main",
      scrub:1 ,
   },
})

