import React, { useEffect } from "react";

export default function Product() {
  useEffect(() => {
    let cancelled = false;
    const containerId = "product-component-1768747552395";

    const resetContainer = () => {
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = "";
      }
      return container;
    };

    resetContainer();

    /*<![CDATA[*/
    (function () {
      var scriptURL =
        "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        if (cancelled) {
          return;
        }

        var existingScript = document.querySelector(
          'script[src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"]'
        );
        if (existingScript) {
          if (window.ShopifyBuy && window.ShopifyBuy.UI) {
            ShopifyBuyInit();
            return;
          }
          existingScript.addEventListener("load", ShopifyBuyInit, {
            once: true,
          });
          return;
        }

        var script = document.createElement("script");
        script.async = true;
        script.src = scriptURL;
        (
          document.getElementsByTagName("head")[0] ||
          document.getElementsByTagName("body")[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        if (cancelled) {
          return;
        }

        var container = document.getElementById(containerId);
        if (!container) {
          return;
        }

        var client = window.ShopifyBuy.buildClient({
          domain: "ej81da-26.myshopify.com",
          storefrontAccessToken: "bd81a95bfda893b9f37acc9d43c5bfe6",
        });
        window.ShopifyBuy.UI.onReady(client).then(function (ui) {
          if (cancelled) {
            return;
          }

          var target = document.getElementById(containerId);
          if (!target) {
            return;
          }

          ui.createComponent("product", {
            id: "8802515550268",
            node: target,
            moneyFormat: "Rs.%20%7B%7Bamount%7D%7D",
            options: {
              product: {
                styles: {
                  product: {
                    "@media (min-width: 601px)": {
                      "max-width": "100%",
                      "margin-left": "0",
                      "margin-bottom": "50px",
                    },
                    "text-align": "left",
                  },
                  title: {
                    "font-size": "26px",
                  },
                  price: {
                    "font-size": "18px",
                  },
                  compareAt: {
                    "font-size": "15.299999999999999px",
                  },
                  unitPrice: {
                    "font-size": "15.299999999999999px",
                  },
                },
                layout: "horizontal",
                contents: {
                  img: false,
                  imgWithCarousel: true,
                  description: true,
                },
                width: "100%",
                text: {
                  button: "Add to cart",
                },
              },
              productSet: {
                styles: {
                  products: {
                    "@media (min-width: 601px)": {
                      "margin-left": "-20px",
                    },
                  },
                },
              },
              modalProduct: {
                contents: {
                  img: false,
                  imgWithCarousel: true,
                  button: false,
                  buttonWithQuantity: true,
                },
                styles: {
                  product: {
                    "@media (min-width: 601px)": {
                      "max-width": "100%",
                      "margin-left": "0px",
                      "margin-bottom": "0px",
                    },
                  },
                  title: {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "bold",
                    "font-size": "26px",
                    "color": "#4c4c4c",
                  },
                  price: {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "18px",
                    "color": "#4c4c4c",
                  },
                  compareAt: {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "15.299999999999999px",
                    "color": "#4c4c4c",
                  },
                  unitPrice: {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "15.299999999999999px",
                    "color": "#4c4c4c",
                  },
                },
                text: {
                  button: "Add to cart",
                },
              },
              option: {},
              cart: {
                text: {
                  total: "Subtotal",
                  button: "Checkout",
                },
              },
              toggle: {},
            },
          });
        });
      }
    })();
    /*]]>*/

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#fff8e8] text-[#3b2318]">
      <div
        id="product-component-1768747552395"
        className="min-h-screen w-full"
      />
    </main>
  );
}
