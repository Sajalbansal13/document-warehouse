
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript eCommerce</title>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      integrity="sha512-Avb2QiuDEEvB4bZJYdft2mNjVShBftLdPG8FJ0V7irTLQ8Uo0qcPxh4Plq7G5tGm0rU+1SPhVotteLpBERwTkw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Jost:wght@300;400;500;700&family=Poppins:wght@200;300;400;600&family=Quicksand:wght@300;400;500;600;700&family=Urbanist:wght@300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- ========== Start Navbar ========== -->
    <header class="section-navbar">
      <section class="top_txt">
        <div class="head container">
          <div class="head_txt">
            <p>Free shipping, 30-day return or refund guarantee.</p>
          </div>
          <div class="sing_in_up">
            <a href="# ">SIGN IN</a>
            <a href="# ">SIGN UP</a>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="navbar-brand">
          <a href="index.html">
            <img
              src="./images/log.png"
              alt="thapa eCommerce logo"
              class="logo"
              width="80%"
              height="auto"
            />
          </a>
        </div>
        <nav class="navbar">
          <ul>
            <li class="nav-item">
              <a href="/" class="nav-link">Home </a>
            </li>
            <li class="nav-item">
              <a href="about.html" class="nav-link">about</a>
            </li>
            <li class="nav-item">
              <a href="products.html" class="nav-link">products</a>
            </li>
            <li class="nav-item">
              <a href="contact.html" class="nav-link">contact</a>
            </li>
            <li class="nav-item">
              <a
                href="addToCart.html"
                class="nav-link add-to-cart-button"
                id="cartValue"
              >
                <i class="fa-solid fa-cart-shopping"></i> 0</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <!-- ========== End Navbar ========== -->

    <section class="addToCartElement">
      <div class="container">
        <section>
          <div id="productCartContainer"></div>
        </section>

        <section class="productCartTotalElem">
          <div class="productCartTotalElement">
            <p>Selected Offer Summary</p>
            <div class="productOrderTotal">
              <div>
                <p>Sub Total:</p>
                <p class="productSubTotal">0</p>
              </div>
              <div>
                <p>Tax:</p>
                <p class="productTax">₹50</p>
              </div>
              <hr />
              <div>
                <p>Final Total:</p>
                <p class="productFinalTotal">0</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <!-- Template for a product -->
    <template id="productCartTemplate">
      <div class="cards" id="cardValue">
        <article class="information [ card ]">
          <div>
            <span class="category"></span>
          </div>
          <div class="imageContainer">
            <img class="productImage" src="" alt="" />
          </div>

          <h2 class="productName"></h2>

          <p class="productPrice"></p>

          <div class="stockElement">
            <button class="cartIncrement">+</button>
            <p class="productQuantity" data-quantity="1">1</p>
            <button class="cartDecrement">-</button>
          </div>

          <!-- <button class="add-to-cart-button">Add To Cart</button> -->
          <button class="add-to-cart-button remove-to-cart-button">
            Remove
          </button>
        </article>
      </div>
    </template>

    <!-- ========== Start footer Section ========== -->
    <footer class="section-footer">
      <div class="footer-container container">
        <div class="content_1">
          <img src="./images/logo.png" alt="logo" />
          <p>
            Welcome to Thapa EcomStore, your ultimate destination for
            cutting-edge gadgets!
          </p>
          <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
        </div>
        <div class="content_2">
          <h4>SHOPPING</h4>
          <a href="#">Computer Store</a>
          <a href="#">Laptop Store</a>
          <a href="#">Accessories</a>
          <a href="#">Sales & Discount</a>
        </div>
        <div class="content_3">
          <h4>Experience</h4>
          <a href="./contact.html">Contact Us</a>
          <a href="" target="_blank">Payment Method</a>
          <a href="" target="_blank">Delivery</a>
          <a href="" target="_blank">Return and Exchange</a>
        </div>
        <div class="content_4">
          <h4>NEWSLETTER</h4>
          <p>Be the first to know about new<br />arrivals, sales & promos!</p>
          <div class="f-mail">
            <input type="email" placeholder="Your Email" />
            <i class="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
      <div class="f-design">
        <div class="f-design-txt">
          <p>Design and Code by Thapa Technical</p>
        </div>
      </div>
    </footer>
    <!-- ========== End footer Section ========== -->

    <script type="module" src="showAddToCartCards.js"></script>
  </body>
</html>
