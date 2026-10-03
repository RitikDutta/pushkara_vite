import { useId, useState } from "react";
import Modal from "../../../components/ui/Modal";
import { a2Ghee } from "../product";

export function AmazonLink({ className = "shop-button shop-button--outline" }) {
  return (
    <a href={a2Ghee.amazonUrl} target="_blank" rel="noopener noreferrer" className={className}>
      Buy on Amazon
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M14 3h7v7M21 3 10 14M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function PurchaseButton({ className = "shop-button shop-button--gold", children = "Buy now" }) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const descriptionId = useId();
  const close = () => setIsOpen(false);

  return (
    <>
      <button type="button" className={className} aria-haspopup="dialog" onClick={() => setIsOpen(true)}>
        {children}
      </button>

      {isOpen && (
        <Modal onClose={close} labelledBy={titleId} describedBy={descriptionId}>
          <div className="purchase-panel">
            <button type="button" className="purchase-close" aria-label="Close purchase popup" onClick={close} autoFocus>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            </button>

            <div className="purchase-brand">
              <img src="/logo.png" alt="" width="42" height="42" />
              <span>Pushkara Organic</span>
            </div>
            <div className="purchase-image-wrap">
              <img src={a2Ghee.images[0].src} alt={a2Ghee.images[0].alt} width="1500" height="1500" />
              <span className="purchase-image-line" aria-hidden="true" />
            </div>
            <p className="shop-eyebrow">A new chapter of goodness</p>
            <h2 id={titleId}>Goodness is worth the wait.</h2>
            <div id={descriptionId} className="purchase-copy">
              <p>
                We’re putting the finishing touches on the Pushkara shopping
                experience, with the same care that goes into every jar.
              </p>
              <p>
                Until then, bring a little tradition to your table. Our A2 ghee
                is available on Amazon.
              </p>
            </div>
            <AmazonLink className="shop-button shop-button--gold purchase-amazon" />
            <button type="button" className="purchase-continue" onClick={close}>Keep exploring Pushkara</button>
            <p className="purchase-signoff">Rooted in tradition. Made with care.</p>
          </div>
        </Modal>
      )}
    </>
  );
}
