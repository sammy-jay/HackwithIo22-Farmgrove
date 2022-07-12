import confetti from "canvas-confetti";

export const runFireworks = () => {
  var duration = 5 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
};

export const bannerData = [
  {
    discount: "",
    largeText1: "ONIONS",
    largeText2: "",
    saleTime: "",
    smallText: "pepper",
    midText: "Vegies",
    desc: "🧅🧅 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam porro quod omnis ducimus provident laborum, id reiciendis perspiciatis fugit",
    product: "onions",
    buttonText: "Shop Now",
    image:
      "https://images.pexels.com/photos/2280569/pexels-photo-2280569.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    discount: "10% OFF",
    largeText1: "Fine",
    largeText2: "Carrots",
    saleTime: "29 June to 29 July",
    smallText: "Lorem ipsum dolor",
    midText: "Mid year Sale",
    desc: "🥕🥕 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam porro quod omnis",
    product: "carrots",
    buttonText: "Shop Now",
    image:
      "https://images.pexels.com/photos/1150682/pexels-photo-1150682.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export const products = [
  {
    _id: 1001,
    name: "Fresh Cabbage",
    price: 3000,
    image:
      "https://images.pexels.com/photos/212932/pexels-photo-212932.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "cabbage",
    details:
      "🌾 🧅 🥕 🥬 👨🏼‍🌾 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam porro quod omnis ducimus provident laborum, id reiciendis perspiciatis fugit, vero, dicta tenetur harum? Doloremque labore dignissimos alias odio quaerat eum.",
    imageList: [
      "https://images.pexels.com/photos/212932/pexels-photo-212932.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/212932/pexels-photo-212932.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/212932/pexels-photo-212932.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/212932/pexels-photo-212932.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    _id: 1002,
    name: "Carrots",
    price: 4000,
    image:
      "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "carrot",
    details:
      "🌾 🧅 🥕 🥬 👨🏼‍🌾 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam porro quod omnis ducimus provident laborum, id reiciendis perspiciatis fugit, vero, dicta tenetur harum? Doloremque labore dignissimos alias odio quaerat eum.",
    imageList: [
      "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    _id: 1003,
    name: "Potatoes",
    price: 1500,
    image:
      "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "potato",
    details:
      "🌾 🧅 🥕 🥬 👨🏼‍🌾 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam porro quod omnis ducimus provident laborum, id reiciendis perspiciatis fugit, vero, dicta tenetur harum? Doloremque labore dignissimos alias odio quaerat eum.",
    imageList: [
      "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    _id: 1004,
    name: "Corn",
    price: 3900,
    image:
      "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "corn",
    details:
      "🌾 🧅 🥕 🥬 👨🏼‍🌾 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam porro quod omnis ducimus provident laborum, id reiciendis perspiciatis fugit, vero, dicta tenetur harum? Doloremque labore dignissimos alias odio quaerat eum.",
    imageList: [
      "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    _id: 1005,
    name: "Rice",
    price: 14000,
    image:
      "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "rice",
    details:
      "🌾 🧅 🥕 🥬 👨🏼‍🌾 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam porro quod omnis ducimus provident laborum, id reiciendis perspiciatis fugit, vero, dicta tenetur harum? Doloremque labore dignissimos alias odio quaerat eum.",
    imageList: [
      "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    _id: 1006,
    name: "Wheat",
    price: 10000,
    image:
      "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "wheat",
    details:
      "🌾 🧅 🥕 🥬 👨🏼‍🌾 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam porro quod omnis ducimus provident laborum, id reiciendis perspiciatis fugit, vero, dicta tenetur harum? Doloremque labore dignissimos alias odio quaerat eum.",
    imageList: [
      "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    _id: 1007,
    name: "Fresh Cabbage",
    price: 3000,
    image:
      "https://images.pexels.com/photos/212932/pexels-photo-212932.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "cabbage",
    details:
      "🌾 🧅 🥕 🥬 👨🏼‍🌾 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam porro quod omnis ducimus provident laborum, id reiciendis perspiciatis fugit, vero, dicta tenetur harum? Doloremque labore dignissimos alias odio quaerat eum.",
    imageList: [
      "https://images.pexels.com/photos/212932/pexels-photo-212932.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/212932/pexels-photo-212932.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/212932/pexels-photo-212932.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/212932/pexels-photo-212932.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    _id: 1008,
    name: "Carrots",
    price: 4000,
    image:
      "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "carrot",
    details:
      "🌾 🧅 🥕 🥬 👨🏼‍🌾 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam porro quod omnis ducimus provident laborum, id reiciendis perspiciatis fugit, vero, dicta tenetur harum? Doloremque labore dignissimos alias odio quaerat eum.",
    imageList: [
      "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    _id: 1009,
    name: "Potatoes",
    price: 1500,
    image:
      "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "potato",
    details:
      "🌾 🧅 🥕 🥬 👨🏼‍🌾 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam porro quod omnis ducimus provident laborum, id reiciendis perspiciatis fugit, vero, dicta tenetur harum? Doloremque labore dignissimos alias odio quaerat eum.",
    imageList: [
      "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    _id: 1010,
    name: "Corn",
    price: 3900,
    image:
      "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "corn",
    details:
      "🌾 🧅 🥕 🥬 👨🏼‍🌾 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam porro quod omnis ducimus provident laborum, id reiciendis perspiciatis fugit, vero, dicta tenetur harum? Doloremque labore dignissimos alias odio quaerat eum.",
    imageList: [
      "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    _id: 1011,
    name: "Rice",
    price: 14000,
    image:
      "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "rice",
    details:
      "🌾 🧅 🥕 🥬 👨🏼‍🌾 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam porro quod omnis ducimus provident laborum, id reiciendis perspiciatis fugit, vero, dicta tenetur harum? Doloremque labore dignissimos alias odio quaerat eum.",
    imageList: [
      "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    _id: 1012,
    name: "Wheat",
    price: 10000,
    image:
      "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "wheat",
    details:
      "🌾 🧅 🥕 🥬 👨🏼‍🌾 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam porro quod omnis ducimus provident laborum, id reiciendis perspiciatis fugit, vero, dicta tenetur harum? Doloremque labore dignissimos alias odio quaerat eum.",
    imageList: [
      "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
];
