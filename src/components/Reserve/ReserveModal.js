import { Modal, Button } from "react-bootstrap";
import { CURRENT_SLOT, leadTimeFor } from "../../config/queue";

/**
 * Shown the first time a visitor reserves a build slot, so nobody reaches
 * checkout expecting a speaker to ship next week. Accepting is what puts the
 * speaker in the cart — there is no way past it.
 */
function ReserveModal({ show, onHide, onConfirm, productName }) {
  return (
    <Modal show={show} onHide={onHide} centered className="sb-modal">
      <Modal.Body className="p-4 p-md-5">
        <span className="sb-eyebrow">Before you reserve</span>
        <h3 className="fw-bold mb-3">Handcrafted to order</h3>

        <p className="text-muted">
          Every pair of speakers is individually built by hand in our workshop —
          from timber selection and cabinet joinery through to acoustic
          calibration.
        </p>
        <p className="text-muted">
          Because we do not mass-produce, your build slot enters the workshop
          queue the moment you order. We are currently booking completion slots
          for <strong className="text-body">{CURRENT_SLOT}</strong>
          {productName && (
            <>
              , and the {productName} takes{" "}
              <strong className="text-body">{leadTimeFor(productName)}</strong>{" "}
              to craft, test and crate
            </>
          )}
          .
        </p>
        <p className="text-muted mb-4">
          You will receive updates at each stage as your speakers move from raw
          wood to finished sound.
        </p>

        <div className="d-grid">
          <Button
            variant="primary"
            className="btn-rounded py-2 fw-bold"
            onClick={onConfirm}
          >
            I understand — reserve my build slot
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ReserveModal;
