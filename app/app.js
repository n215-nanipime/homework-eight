
var homeContent = `<div class="home"></div>
<div class="banner">
  <div class="hero-text">
    <h1>Los Caribeños Restaurant</h1>
    <p>
      Come dine-in or order online to treat your tastebuds with our wonderful Dominican cuisine.
    </p>
    <button>ORDER ONLINE</button>
  </div>
</div>
<br />

<!-- offers begin -->
<section class="offers">
  <div class="offer">
    <div class="hero-image">
      <img src="images/food-example1.png" alt="food" />
      <div class="hero-text">
        <h2>Delicious Entrees</h2>
        <button>VIEW ENTREES</button>
      </div>
    </div>
  </div>

  <div class="offer">
    <div class="hero-image">
      <img src="images/drink-example1.jpg" alt="food" />
      <div class="hero-text">
        <h2>Tropical Drinks and Soft Drinks</h2>
        <button>VIEW DRINKS</button>
      </div>
    </div>
  </div>

  <div class="offer">
    <div class="hero-image">
      <img src="images/dessert-example1.jpg" alt="food" />
      <div class="hero-text">
        <h2>Tasty Desserts</h2>
        <button>VIEW DESSERTS</button>
      </div>
    </div>
  </div>
</section>`;
var aboutContent = `<div class="about">
<div class="about-header">
  <h1 class="about-header-title">ABOUT:</h1>
  <div class="border-bottom"></div>
  <img src="images/Dominican-flag.jpg" alt="flag" />
  <p>
    We bring to you the best and most affordable Dominican food you can find in Indy and throughout an 50-mile radius. We have been serving our community since 2021 and are proud to be representing our country and its culture with our food. We originate from the Dominican Republic, as our flag shows above, and we are proud to say so! You can find most of the cultural Dominican plates on our menu, as well as some splended tropical drinks, and some of our desserts.
  </p>
  <p> Come try us out! I promise you will not regret it.</p>
</div>
</div>`;
var menuContent = `<div class="menu">
<div class="about-menu-posts">
  <p class="menu-title">Our Menu:</p>
  <div class="border-bottom-two"></div>
  <div class="menu-box">
    <img src="images/food-example2.jpg" alt="" />
    <div class="menu-content">
      <h2>La Bandera (The Flag) <span>$14</span></h2>
      <p>
        One of our traditional plates. It is named as so because every
        item on the plate represents a color on the flag.
      </p>
      <button>Add to Cart</button>
    </div>
  </div>

  <div class="menu-box">
    <img src="images/drink-example2.jpg" alt="" />
    <div class="menu-content">
      <h2>Morir Soñando <span>$3</span></h2>
      <p>
        Literally translates to "Die Dreaming" and that perfectly
        describes what you will feel when drinking it. This popular
        drink can be served either with or without alcohol.
      </p>
      <button>Add to Cart</button>
    </div>
  </div>

  <div class="menu-box">
    <img src="images/dessert-example2.jpg" alt="" />
    <div class="menu-content">
      <h2>Flan <span>$2.50</span></h2>
      <p>
        A vastly popular dessert characterized by its creamy, caramelly
        deliciousness.
      </p>
      <button>Add to Cart</button>
    </div>
  </div>
</div>
</div>`;
var contactContent = `<div class="contact">
<div class="about-contact">
  <p class="contact-title">CONTACT US:</p>
  <div class="border-bottom-two"></div>
  <div class="contact-box">
    <div class="contact-image-address">
      
      <p class="contact-address">
        Come find us at the address: <br>
        1234 University Blvd. Indianapolis, IN 46202
        <br><br>
        You can also contact us at:
        (123)456-7890<br>loscaribenos@hotmail.com
      </p>
    </div>

    <div class="contact-form">
      <p class="contact-address">Or contact us by using the form below...</p>
    <input
        type="text"
        id="name"
        class="contact-box"
        placeholder="Your name..."
      />
      <input
        type="text"
        id="email"
        class="contact-box"
        placeholder="Email Address..."
      />
      <textarea class="message-box" placeholder="Message..."></textarea>

      <p>
        <span class="read-btn">SEND MESSAGE</span>
      </p>
    </div>
  </div>
</div>
</div>`;

function addButtonListeners() {
    $("nav a").click(function(e) {
        // the most common for the above event are "e", "evt", and "event"
        let btnId = e.currentTarget.id;
        let contentName = btnId + "Content";
        console.log(contentName);
        $("#app").html(eval(contentName));
    });
    
}

function init() {
    $("#app").html(homeContent);
    addButtonListeners();

}

$(document).ready(function () {
    init();
});