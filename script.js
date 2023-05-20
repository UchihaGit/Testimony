var rbtn = document.querySelector(".btn2");
var lbtn = document.querySelector(".btn1");
var qtxt = document.querySelector(".quote");
var islide = document.querySelector(".images");

const quotes = [
  {
    quote:
      "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
    author: " Life"
  },
  {
    quote:
      "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
    author: "John Kenneth Galbraith"
  },
  {
    quote:
      "God save me from my friends. I can protect myself from my enemies.",
    author: "Claude Louis Hector de Villars "
  },
  {
    quote: "The price of anything is the amount of life you exchange for it.",
    author: "David Thoreau"
  },
  {
    quote:
      "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
    author: "Charles Lindbergh"
  },
  {
    quote:
      "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
    author: " Tyne Daly"
  }
];

const imgslider = ["customer-0.jpg","customer-1.jpg","customer-2.jpg","customer-3.jpg","customer-4.jpg","customer-5.jpeg"];

var i = 0;

rbtn.addEventListener("click", function() {
    /*let random = Math.floor(Math.random()*quotes.length);
    console.log(random);
    qtxt.textContent = quotes[random].quote; */

    /*if(i<=quotes.length-1){
    console.log(i);
    qtxt.textContent = quotes[i].quote;
    ++i;
  }else{
    i=0;
  }*/


  qtxt.textContent = quotes[i].quote;
  document.slide.src = imgslider[i];
  i = i < quotes.length-1 ? ++i : 0;
  console.log(i);
});

lbtn.addEventListener("click", function () {
  /*if (i==-1) {
    i=quotes.length-1;
  }
  console.log(i);
  --i;
  console.log(i);
  qtxt.textContent = quotes[i].quote;
  document.slide.src = imgslider[i]; */

  i= i ==0 ? quotes.length-1 : --i;
  console.log(i);
  qtxt.textContent = quotes[i].quote;
  document.slide.src = imgslider[i];
})
