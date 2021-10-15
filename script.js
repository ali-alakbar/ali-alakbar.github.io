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

console.log(bo);

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

// Start Changing Landing color

// Calling body

const body = document.querySelector("body");

// Calling the colors Container.
const bollet = document.querySelector(".bollet");

console.log(bollet);
const landing_content = document.querySelector(".landing-content");
bollet.addEventListener(
  "click",

  (eo) => {
    landing_content.style.transition = "all 0.5s ease";

    switch (eo.target.className) {
      case "red":
        console.log("red");
        body.classList.add("landing-red");
        body.classList.remove("landing-blue");
        body.classList.remove("landing-green");
        body.classList.remove("landing-yellow");

        break;
      case "blue":
        body.classList.remove("landing-red");
        body.classList.remove("landing-green");
        body.classList.remove("landing-yellow");
        body.classList.add("landing-blue");

        break;
      case "green":
        body.classList.remove("landing-blue");
        body.classList.remove("landing-red");
        body.classList.remove("landing-yellow");
        body.classList.add("landing-green");

        break;

      default:
        break;
    }
  }
);

// End Changing Landing color

// Scrolling Effect On Navigation bar

console.log(myUl);
window.scroll(() => {
  if (this.scrollY > 20) {
    navi.style.background = "red";
  }
});

// Read More Functionality

// Call the Read More Btn <a></a> inside (About)

const readMoreBtn = document.querySelector(".readMore-btn");
const text = document.querySelector(".text");

console.log(text);

readMoreBtn.addEventListener(
  "click",

  () => {
    text.classList.toggle("mio");
    console.log("togleed");

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


    console.log(inputs);

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






