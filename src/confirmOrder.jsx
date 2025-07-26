import orderConfirmIcon from '/images/icon-order-confirmed.svg'

function ConfirmOrder({ cart, onClose, onStartNewOrder }) {
    const isEmpty = cart.count === 0;
    if (isEmpty) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">

                <div className="modal-header">
                    <div className="success-icon">
                        <img src={orderConfirmIcon} alt="order confirm" />
                    </div>
                    <h2 className="modal-title">Order Confirmed</h2>
                    <p className="modal-subtitle">We hope you enjoy your food!</p>
                </div>

                <div className="modal-items">
                    {Object.values(cart.items).map((item) => (
                        <div key={item.name} className="modal-item">
                            <div className="modal-item-image">
                                <img src={item.image.thumbnail} alt={item.name} />
                            </div>
                            <div className="modal-item-details">
                                <div className="modal-item-info">
                                    <span className="modal-item-quantity">{item.quantity}x</span>
                                    <span className="modal-item-price">@ ${item.price.toFixed(2)}</span>
                                </div>
                                <div className="modal-item-total">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="modal-total">
                    <span>Order Total</span>
                    <span className="modal-total-amount">${cart.total}</span>
                </div>

                <button className="start-new-order-button" onClick={onStartNewOrder}>
                    Check out
                </button>
            </div>
        </div>
    );
}

export default ConfirmOrder;