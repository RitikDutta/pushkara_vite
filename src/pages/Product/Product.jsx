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
                    "font-family":
                      "Cormorant Garamond, Palatino Linotype, Book Antiqua, serif",
                    color: "#3b2318",
                  },
                  price: {
                    "font-size": "18px",
                    "font-family":
                      "Alegreya Sans, Trebuchet MS, sans-serif",
                    color: "#3b2318",
                  },
                  compareAt: {
                    "font-size": "15.299999999999999px",
                    "font-family":
                      "Alegreya Sans, Trebuchet MS, sans-serif",
                    color: "#7a521e",
                  },
                  unitPrice: {
                    "font-size": "15.299999999999999px",
                    "font-family":
                      "Alegreya Sans, Trebuchet MS, sans-serif",
                    color: "#7a521e",
                  },
                  description: {
                    color: "#7a521e",
                    "font-family":
                      "Alegreya Sans, Trebuchet MS, sans-serif",
                  },
                  button: {
                    "font-family":
                      "Alegreya Sans, Trebuchet MS, sans-serif",
                    ":hover": {
                      "background-color": "#4a2a1c",
                    },
                    "background-color": "#3b2318",
                    ":focus": {
                      "background-color": "#4a2a1c",
                    },
                    color: "#fef6e9",
                    "border-radius": "14px",
                    "padding-left": "44px",
                    "padding-right": "44px",
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
                  button: {
                    "font-family":
                      "Alegreya Sans, Trebuchet MS, sans-serif",
                    ":hover": {
                      "background-color": "#4a2a1c",
                    },
                    "background-color": "#3b2318",
                    ":focus": {
                      "background-color": "#4a2a1c",
                    },
                    color: "#fef6e9",
                    "border-radius": "14px",
                    "padding-left": "42px",
                    "padding-right": "42px",
                  },
                  title: {
                    "font-family":
                      "Cormorant Garamond, Palatino Linotype, Book Antiqua, serif",
                    "font-weight": "bold",
                    "font-size": "26px",
                    color: "#3b2318",
                  },
                  price: {
                    "font-family":
                      "Alegreya Sans, Trebuchet MS, sans-serif",
                    "font-weight": "normal",
                    "font-size": "18px",
                    color: "#3b2318",
                  },
                  compareAt: {
                    "font-family":
                      "Alegreya Sans, Trebuchet MS, sans-serif",
                    "font-weight": "normal",
                    "font-size": "15.299999999999999px",
                    color: "#7a521e",
                  },
                  unitPrice: {
                    "font-family":
                      "Alegreya Sans, Trebuchet MS, sans-serif",
                    "font-weight": "normal",
                    "font-size": "15.299999999999999px",
                    color: "#7a521e",
                  },
                },
                text: {
                  button: "Add to cart",
                },
              },
              option: {},
              cart: {
                styles: {
                  button: {
                    "font-family":
                      "Alegreya Sans, Trebuchet MS, sans-serif",
                    ":hover": {
                      "background-color": "#4a2a1c",
                    },
                    "background-color": "#3b2318",
                    ":focus": {
                      "background-color": "#4a2a1c",
                    },
                    color: "#fef6e9",
                    "border-radius": "999px",
                  },
                },
                text: {
                  total: "Subtotal",
                  button: "Checkout",
                },
              },
              toggle: {
                styles: {
                  toggle: {
                    "font-family":
                      "Alegreya Sans, Trebuchet MS, sans-serif",
                    "background-color": "#3b2318",
                    ":hover": {
                      "background-color": "#4a2a1c",
                    },
                    ":focus": {
                      "background-color": "#4a2a1c",
                    },
                    color: "#fef6e9",
                  },
                },
              },
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
    <main className="relative min-h-screen overflow-hidden bg-[#fff8e8] text-[#3b2318]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-120px] h-[360px] w-[360px] rounded-full bg-[#f6cf57]/30 blur-3xl" />
        <div className="absolute left-[-120px] top-28 h-[320px] w-[320px] rounded-full bg-[#d9a96f]/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(59,35,24,0.12)_0.6px,transparent_0.6px)] [background-size:4px_4px] opacity-40" />
      </div>

      <div className="relative z-10 w-full px-4 py-12 sm:py-16 lg:py-20">
        <header className="mb-10 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#7a521e]">
            Pushkara Organics
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-[#3b2318] sm:text-4xl lg:text-5xl">
            Pure ghee, crafted for everyday rituals
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#7a521e]/80 sm:mx-0 sm:text-base">
            Slow-cooked in small batches for a nutty aroma, golden finish, and
            rich taste. Bring home the signature jar that elevates every meal.
          </p>
        </header>

        <div
          id="product-component-1768747552395"
          className="min-h-screen w-full"
        />
      </div>
    </main>
  );
}
