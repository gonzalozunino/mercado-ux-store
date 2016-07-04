function qS (selector) {
  return document.querySelector(selector);
};

// Quantity Menu
var quantityMenu = new ch.Menu(qS('.quantity-content'));

// Quantity Dropdown
var quantityDropdown = new ch.Dropdown(qS('.quantity-dropdown'));


// Payment Menu
var paymentMenu = new ch.Menu(qS('.payment-content'));

// Quantity Dropdown
var paymentDropdown = new ch.Dropdown(qS('.payment-dropdown'));

// More products
var moreProducts = new ch.Carousel(qS("#moreproducts"), {"pagination": true});

// Comment tabs
var comments = new ch.Tabs(qS(".marketing-comment-tabs"));
