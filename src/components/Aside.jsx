import React, { useState } from "react";

function HomePage() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentTrending, setCurrentTrending] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState(null);
   const [sidebarOpen, setSidebarOpen] = useState(false);

  const moreCategories = [
    "Automotives",
    "Mobile & Accessories",
    "Electronics",
    "Sports, Fitness & Outdoor",
    "Computers & Gaming",
    "Books, Media & Music",
    "Hobbies",
  ];

  const categories = [
    {
      name: "Men’s Fashion",
      img: "https://cdn.shopify.com/s/files/1/0598/1070/9672/files/vjvnow-1_8089e9a6-d4dd-41c1-bc5c-c9d7c3d5965a_480x480.jpg?v=1723104002",
      subcategories: [
        "Shirts",
        "Pants",
        "Trousers",
        "Suits",
        "T-Shirts",
        "Jackets",
        "Shorts",
        "Sweaters",
        "Footwear",
      ],
    },
    {
      name: "Women’s Fashion",
      img: "https://www.ethnicrang.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-02-at-2.52.38-PM-2-570x713.jpeg",
      subcategories: [
        "Dresses",
        "Tops",
        "Skirts",
        "Sarees",
        "T-Shirts",
        "Jumpsuits",
        "Kurtis",
        "Leggings",
        "Footwear",
        "Accessories",
      ],
    },
    {
      name: "Home & Kitchen",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQn3BJMounDv2j60qC5kX0wAJjRDrgwIwxw&s",
      subcategories: [
        "Furniture",
        "Cookware",
        "Decor",
        "Bedding",
        "Storage",
        "Kitchen Appliances",
      ],
    },
    {
      name: "Toys, Kids' Fashion & more",
      img: "https://cdn.firstcry.com/education/2022/11/06094158/Toy-Names-For-Kids.jpg",
      subcategories: [
        "Toys",
        "Kids Clothing",
        "School Supplies",
        "Baby Care",
        "Kids Footwear",
      ],
    },
    {
      name: "Beauty, Health & Daily Needs",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmFFQyxQM9jmvvcbK-w1INUkSBNYrqUpOgA&s",
      subcategories: [
        "Skincare",
        "Healthcare",
        "Daily Essentials",
        "Makeup",
        "Haircare",
        "Personal Care",
      ],
    },
  ];

  const bannerSlides = [
    {
      image: "https://g.sdlcdn.com/imgs/a/b/c/sdtv/bob_page_main_banner.png",
      title: "BOB CARD",
    },
    {
      image:
        "https://www.shutterstock.com/image-vector/sport-shoes-banner-website-button-260nw-2167767027.jpg",
      title: "Sports Footwear",
    },
    {
      image: "https://zola.in/cdn/shop/articles/wear_banner.jpg?v=1686815762",
      title: "ETHNIC WEAR",
    },
    {
      image:
        "https://entail-assets.com/egnition/fit-in/700x700/Create_Custom_Sort_Rules_for_Shopify_Product_Variants-1719996704730.jpg",
      title: "LAPTOPS & COMPUTERS",
    },
    {
      image:
        "https://hips.hearstapps.com/hmg-prod/images/best-of-the-best-beauty-awards-1568047627.jpg?resize=640:*",
      title: "BEAUTY & PERSONAL CARE",
    },
    {
      image:
        "https://tecnosoluciones.com/wp-content/uploads/2024/05/Crear-un-Sitio-Web-para-una-Tienda-de-Accesorios-de-Cocina.webp",
      title: "KITCHENWARE",
    },
  ];

  const trendingProducts = [
    {
      image:
        "https://g.sdlcdn.com/imgs/j/d/1/Aadi-Black-Casual-Shoes-SDL461191496-3-fa710.jpeg?w=310&h=363",
      title: "Aadi Black Casual Shoes",
      rating: 4,
      originalPrice: 999,
      discountedPrice: 449,
      discount: 55,
    },
    {
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfbSQAq0l2ucRWCYQmKoPud40q7UDXJnY8ufiBWCqZKhr0ZGFL6rIW6JkNX43P00V4x3gM3wynTCSsmJ0PUwS0XlXw-VTHZ0RO7kTM-HU",
      title: "Redmi Note 14 Pro 5G",
      rating: 5,
      originalPrice: 25490,
      discountedPrice: 21990,
      discount: 20,
    },
    {
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_PidpAym1l7V__3u_OCXwtQL5HnDTVkFo6slW5ymqnh34Zf98-_od9kzhwYSP3Do8_cxSFVP0zK2d2zY3Oy0_z4T2dNWkxCe84TmchIhhsnYqv_2-CfMC",
      title: "boAt Nirvana Space TWS Earbuds",
      rating: 5,
      originalPrice: 2298,
      discountedPrice: 1800,
      discount: 30,
    },
    {
      image:
        "https://g.sdlcdn.com/imgs/k/w/k/Bentag-kitchenware-Vegetable-Fruit-Clever-SDL841893040-1-1e2e8.jpg?w=310&h=363",
      title: "Bentag kitchenware Vegetable Cutter",
      rating: 4,
      originalPrice: 499,
      discountedPrice: 132,
      discount: 74,
    },
    {
      image:
        "https://g.sdlcdn.com/imgs/i/n/r/bhawna-collection-Loard-Shiv-Trishul-SDL890408077-1-86933.jpeg?w=310&h=363",
      title: "Shiv Trishul Damru Locket with Rudraksha Mala",
      rating: 4,
      originalPrice: 499,
      discountedPrice: 135,
      discount: 73,
    },
    {
      image:
        "https://g.sdlcdn.com/imgs/k/5/k/Vi-John-Matte-Liquid-For-SDL044634149-1-46921.jpg?w=310&h=363",
      title: "Vi-John Matte Liquid Foundation",
      rating: 4,
      originalPrice: 270,
      discountedPrice: 159,
      discount: 41,
    },
    {
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQHAKB-FHFmHnBKWlmVypa2S7BHID64ljFmn3Ks4l-VbCHLsltZgC8cZOadAqgJ03nRTyOnzzHGYuFEz5WTj0N2prm5P7wKEuobby7caBg",
      title: "Makeup Combo Kit for Women",
      rating: 3,
      originalPrice: 2500,
      discountedPrice: 1999,
      discount: 25,
    },
  ];

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const nextBanner = () => {
    setCurrentBanner((currentBanner + 1) % bannerSlides.length);
  };

  const prevBanner = () => {
    setCurrentBanner(
      (currentBanner - 1 + bannerSlides.length) % bannerSlides.length
    );
  };

  const nextTrending = () => {
    if (currentTrending + 3 < trendingProducts.length) {
      setCurrentTrending(currentTrending + 1);
    } else {
      setCurrentTrending(0); // loop back to start
    }
  };

  const prevTrending = () => {
    if (currentTrending > 0) {
      setCurrentTrending(currentTrending - 1);
    } else {
      setCurrentTrending(trendingProducts.length - 3); // go to last set
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen p-6 gap-6">
      {/* Sidebar */}
       <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen p-4 gap-6 relative">
      {/* Mobile toggle button */}
      <button
        className="md:hidden bg-white px-4 py-2 border shadow-md rounded-md self-start mb-4"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? "Close Menu" : "☰ Menu"}
      </button>

      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-64 p-4 bg-white border rounded-md shadow-md overflow-y-auto`}
      >
        {/* Top Categories */}
        <h3 className="text-xs font-semibold text-gray-500 mb-2">
          TOP CATEGORIES
        </h3>
        <ul className="space-y-2">
          {categories.map((category, idx) => (
            <li key={idx} className="flex flex-col">
              <div
                className="flex items-center gap-10 hover:bg-gray-100 p-2 rounded-md cursor-pointer"
                onClick={() => toggleCategory(idx)}
              >
                <span className="flex gap-2">
                  <img
                    src={category.img}
                    alt="Category"
                    className="w-6 h-6 object-cover"
                  />
                </span>
                <span className="text-sm font-medium text-gray-700">
                  {category.name}
                </span>
              </div>
              {expandedCategory === idx && (
                <ul className="ml-4 mt-1 space-y-1">
                  {category.subcategories.map((sub, subIdx) => (
                    <li
                      key={subIdx}
                      className="text-xs text-black-900 hover:underline cursor-pointer"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* More Categories */}
        <h3 className="text-xs font-semibold text-gray-500 mt-6 mb-2">
          MORE CATEGORIES
        </h3>
        <ul className="space-y-2">
          {moreCategories.map((cat, idx) => (
            <li
              key={idx}
              className="text-sm text-gray-700 hover:underline cursor-pointer"
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      
     
    </div>

      {/* Right side - Banners + Trending Products */}
      <div className="flex-1 flex flex-col  w-230 gap-8">
        {/* Main Banner Slider */}
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <img
            src={bannerSlides[currentBanner].image}
            alt={bannerSlides[currentBanner].title}
            className="w-full object-cover h-64"
          />
          <button
            onClick={prevBanner}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            ←
          </button>
          <button
            onClick={nextBanner}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            →
          </button>
        </div>

        {/* Trending Products Slider */}
        <div className="bg-white p-4 rounded-lg shadow-md w-full">
          <h2 className="text-lg font-semibold mb-4">TRENDING PRODUCTS</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={prevTrending}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              ←
            </button>

            <div className="flex overflow-hidden gap-6 h-80 w-full">
              {trendingProducts
                .slice(currentTrending, currentTrending + 4)
                .map((product, idx) => (
                  <div key={idx} className="w-70 flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-40 object-contain mb-2"
                    />
                    <h3 className="text-sm font-medium">{product.title}</h3>
                    <div className="flex items-center text-yellow-400 text-xs mb-1">
                      {"★".repeat(product.rating)}
                      {"☆".repeat(5 - product.rating)}
                    </div>
                    <div className="text-xs text-gray-500 line-through">
                      Rs {product.originalPrice}
                    </div>
                    <div className="text-sm font-bold text-green-600">
                      Rs {product.discountedPrice}
                    </div>
                    <div className="text-xs text-red-500">
                      {product.discount}% OFF
                    </div>
                  </div>
                ))}
            </div>

            <button
              onClick={nextTrending}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
