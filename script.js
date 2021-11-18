// Start Link Slid

//Calling the bar Icon
const list = document.querySelector(".list");
//Calling the <ul> as To Enable It
const myUl = document.getElementById("myUl");
//Calling the Links Inside The <ul>, And Save Them Withing An Array
const mylink = document.querySelectorAll(".my_link");

//When I Click On list-icon
list.addEventListener(
  "click",

  (eo) => {
    //A CSS class Will Be Added On the HTML Element < ul class="myUl" >
    myUl.classList.toggle("click");

    mylink.forEach(
      //Take the collection/Array Of HTML Element "mylink" And Execute The Coming Code
      (item) => {
        item.classList.toggle("for_link");
      }
    );
  }
);
// End Link Slid

// Start Adding Pic

// Calling the Button
const more = document.querySelector(".more");

// Calling The HTML Images As An Array
const bo = document.querySelectorAll(".bo");


// Calling The HTML Element Where I Will Put the btn In
const special_content = document.querySelector(".special-content");

more.addEventListener(
  "click",

  (eo) => {
    // Get All The Iamges and add them to "appear" Class Below
    bo.forEach((item) => {
      item.classList.toggle("appear");
    });

    // Below Is Changing the btn Text
    if (more.innerText == "SHOW MORE") {
      more.innerText = "SHOW LESS";
    } else {
      more.innerText = "SHOW MORE";
    }
  }
);

// End Adding Pic

// End Filtering The Pic



// Scrolling Effect On Navigation bar

window.scroll(() => {
  if (this.scrollY > 20) {
    navi.style.background = "red";
  }
});

// Read More Functionality

// Call the Read More Btn <a></a> inside (About)

const readMoreBtn = document.querySelector(".readMore-btn");
const text = document.querySelector(".text");


readMoreBtn.addEventListener(
  "click",

  () => {
    text.classList.toggle("mio");

    if (readMoreBtn.innerText == "Read More") {
      readMoreBtn.innerText = "Read Less";
    } else if (readMoreBtn.innerText == "Read Less") {
      readMoreBtn.innerText = "Read More";
    }
  }
);

// Start Scroll up

const scrollUp = document.querySelector(".scrollUp");
const pic = document.getElementById(".pic");
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 400) {
    scrollUp.classList.add("active");
  } else {
    scrollUp.classList.remove("active");
  }
});

// End Scroll up





//  ===========================  Start PopUp Window  ===========================





const btn = document.querySelector(".submitting"); //Button
let inputs = document.querySelectorAll("input"); //inputs



btn.addEventListener("click",    

() => {
    // eo.preventDefault();


        empty = 0;

        for (var i = 0; i < inputs.length; ++i) {
        if (inputs[i].value == "") {
            ++empty;
        }
        }
        if (empty !== 0 && empty !== inputs.length) {
            alert("Please enter a value");
        }
        else{




                // Calling the pop Up Window (fade)
                const fade = document.getElementById("myModal");
                fade.style.display = "block";

                // fade.classList.taggle="block";

                // Calling button of pop up window
                const click = document.querySelector(".click-me");

                click.addEventListener("click", () => {

                    fade.style.display = "none";
            });

        }


        


    

    


    });







//  ===========================  Start Scrolling Effects  ===========================


// Call the elements inside services section
const sample = document.querySelectorAll(".sample");

// Calling the image inside the design section
const image = document.getElementById("myImg");

// Calling elements inside the design section
const elements = document.querySelector(".design_content");


// Call the elements inside portfolio as an array
const sections = document.querySelectorAll(".section");



// Call the elements inside video section as an array
const video = document.querySelectorAll(".forHidden");



// Call the elements inside about section as an array(left side)
const leftHidden = document.querySelectorAll(".sectionForHiddenleft");



// Call the elements inside about section (right side)
const rightHidden = document.querySelector(".sectionForHiddenright");


// Call the elements inside about section 2
const text_in_about = document.querySelector(".text-and-info");


// Call the elements inside about section 2
const img_in_about = document.querySelector(".imgAboutInfo");


// Call the elements inside contact section
const texts = document.querySelector(".hints");
const myInputs = document.querySelector(".user-info");


// Call element in footer section
const myfooter = document.querySelector(".footerHidden");

window.addEventListener(
  "scroll",

  () => {



    sample.forEach((e) => {
      if (window.pageYOffset >= 700) {
        e.classList.add("active");
      }
    });
  

  if (window.pageYOffset >= 1600) {
    
    image.classList.add("active");
  }


  if (window.pageYOffset >= 1600) {
    elements.classList.add("active2");
  }

    sections.forEach((e) => {
      if (window.pageYOffset >= 2200) {
        e.classList.add("active");
      }
    });


      video.forEach((e) => {
        if (window.pageYOffset >= 3000) {
          e.classList.add("active");
        }
      });


      leftHidden.forEach((e) => {
        if (window.pageYOffset >= 3600) {
          e.classList.add("active");
        }
      });

  
  if (window.pageYOffset >= 3600) {
    rightHidden.classList.add("active2");
  }

  if (window.pageYOffset >= 4100) {
    text_in_about.classList.add("active2");
  }

  if (window.pageYOffset >= 4100) {
    img_in_about.classList.add("active");
  }



  if (window.pageYOffset >= 4800) {
    myInputs.classList.add("active2");
  }

  if (window.pageYOffset >= 4800) {
    texts.classList.add("active");
  }


  if (window.pageYOffset >= 5800) {
    myfooter.classList.add("active");
  }


  }
);

//  ===========================  End Scrolling Effects  ===========================



// =========================== Start Creating Slider ===========================

// Call the images as an array and set a length
let images = Array.from( document.querySelectorAll("#home .imgContainer div") );
let imagesLength = images.length;

// Set the Current Slide
let currentSlide=1;

// Call the left and right arrows
let leftBtn = document.querySelector("#home .container #leftBtn");
let rightBtn = document.querySelector("#home .container #rightBtn");

let myUL = document.createElement("ul");
myUL.setAttribute("class", "bollet");
let colorContent = document.createElement("div");
colorContent.setAttribute("class", "color-content");

// ====== Start Creating custom <ul> bullets ======

for (let i = 1; i <= imagesLength; i++) {
  let myLI = document.createElement("li");
  myLI.setAttribute('my-index',i)
  myUL.appendChild(myLI);
  colorContent.appendChild(myUL)
  let homeSection = document.querySelector("#home .container");
  homeSection.appendChild(colorContent);
}

// ====== End Creating custom <ul> bullets ======

// Start Activate Next & Previous Buttons
rightBtn.onclick = function () {
  if (currentSlide == imagesLength) {
    currentSlide=1;
    check();

}else{

  currentSlide++;
  check();

};
}

leftBtn.onclick = function () {
  if (currentSlide == 1) {
    currentSlide = imagesLength;
    check();
  } else {
    currentSlide--;
    check();
  }
};
// End Activate Next & Previous Buttons
// Start Activate Click on bullets

let myLI = Array.from(
  document.querySelectorAll("#home .container .color-content ul li ")
);

for (let i = 0; i < myLI.length; i++) {
  myLI[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("my-index"));
    check();
  };
}

// End Activate Click on bullets
// Start Automatical change for slide

setInterval(() => {
  
  if (currentSlide == imagesLength) {
    currentSlide=1;
    check()
  } else {
    currentSlide++;
    check();
  }
  
}, 8500);


// End Automatical change for slide
// Start Functions
// Create a Function To Set The Current Image and Bullet
check();

function check() {

  remove();

  // Current Image
  images[ currentSlide - 1 ].classList.add('active')

  // Current Bullet
  let newUL = document.querySelector(
    "#home .container .color-content ul "
  );
  newUL.children[ currentSlide -1 ].classList.add('active')
}

// Create A Removing Function 



function remove() {
  images.forEach( image => {
    image.classList.remove('active')
  });


    var newLI = Array.from(
      document.querySelectorAll("#home .container .color-content .bollet li")
    );
  newLI.forEach( bollet => {
    bollet.classList.remove("active");
  });
}
// End Functions



// =========================== End Creating Slider ===========================
