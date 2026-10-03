import { useState } from "react";
import { Link } from "react-router-dom";
import PurchaseButton, { AmazonLink } from "../../features/products/components/PurchaseButton";
import { a2Ghee } from "../../features/products/product";

const highlights = [
  { number: "01", title: "Native Gir cow milk", text: "Goodness that begins at the source." },
  { number: "02", title: "Traditional bilona", text: "Cultured, churned, and patiently slow-cooked." },
  { number: "03", title: "A golden everyday ritual", text: "Rich aroma. Nutty flavour. A comforting finish." },
];

export default function Product() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = a2Ghee.images[activeIndex];

  return (
    <main className="shop-page">
      <div className="shop-container">
        <nav aria-label="Breadcrumb" className="shop-breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">The Pushkara Shop</span>
        </nav>

        <header className="shop-intro">
          <p className="shop-eyebrow">From our tradition to your table</p>
          <h1>A little tradition.<br className="sm:hidden" /> A lot of goodness.</h1>
          <p>Discover the signature taste of Pushkara, one golden spoonful at a time.</p>
        </header>

        <section className="shop-product" aria-labelledby="product-title">
          <div className="shop-gallery">
            <div className="shop-image-stage">
              <span className="shop-image-badge">The Pushkara signature</span>
              <span className="shop-image-halo" aria-hidden="true" />
              <img
                key={activeImage.src}
                src={activeImage.src}
                alt={activeImage.alt}
                width="1500"
                height="1500"
                className="shop-main-image"
                fetchPriority="high"
              />
              <p className="shop-image-caption">Rooted in tradition. Made with care.</p>
            </div>
            <div className="shop-thumbnails" role="group" aria-label="Product images">
              {a2Ghee.images.map((image, index) => (
                <button
                  type="button"
                  key={image.src}
                  aria-label={`View ${image.label.toLowerCase()}`}
                  aria-pressed={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                  className="shop-thumbnail"
                >
                  <img src={image.src} alt="" width="76" height="76" loading="lazy" />
                  <span>{image.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="shop-product-copy">
            <p className="shop-eyebrow">Pushkara Organic</p>
            <h2 id="product-title">{a2Ghee.name}</h2>
            <p className="shop-product-subtitle">Slow-crafted. Full of flavour. Steeped in tradition.</p>
            <div className="shop-product-tags">
              <span>A2 Gir cow milk</span>
              <span>Bilona crafted</span>
              <span>Small batches</span>
            </div>
            <p className="shop-description">
              Made from the milk of native Gir cows using the traditional bilona
              method, our A2 ghee brings a rich, nutty aroma and golden warmth to
              your kitchen. From a spoonful over hot dal to a freshly made roti,
              make the everyday a little more special.
            </p>

            <div className="shop-price-row">
              <span className="shop-price">{a2Ghee.price}</span>
              <span className="shop-price-note">A jar of everyday goodness</span>
            </div>

            <div className="shop-purchase-actions">
              <PurchaseButton />
              <AmazonLink />
            </div>
            <p className="shop-purchase-note">Find pack options and the latest price on Amazon.</p>

            <div className="shop-product-details">
              <details open>
                <summary>What makes it special <span aria-hidden="true">+</span></summary>
                <p>
                  Cultured curd is churned into butter, then gently heated to
                  create our signature ghee. A time-honoured process for a rich
                  taste and beautifully aromatic finish.
                </p>
              </details>
              <details>
                <summary>Make it part of your day <span aria-hidden="true">+</span></summary>
                <p>
                  Drizzle over warm rice and dal, brush onto rotis, or use in your
                  favourite family recipes. A little spoonful goes a long way
                  in adding flavour.
                </p>
              </details>
              <details>
                <summary>Care for your jar <span aria-hidden="true">+</span></summary>
                <p>
                  Store in a cool, dry place away from direct sunlight. Keep the
                  lid tightly closed and always use a clean, dry spoon. Follow
                  the storage and best-before guidance on your jar.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="shop-craft" aria-label="The Pushkara promise">
          {highlights.map((highlight) => (
            <div className="shop-craft-item" key={highlight.number}>
              <span className="shop-craft-number">{highlight.number}</span>
              <div><h3>{highlight.title}</h3><p>{highlight.text}</p></div>
            </div>
          ))}
        </section>

        <div className="shop-story-link">
          <p>Every jar has a story. Ours begins with tradition.</p>
          <Link to="/about">Discover the Pushkara story <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </main>
  );
}
