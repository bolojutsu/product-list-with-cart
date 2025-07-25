import emptyCartImg from './assets/images/illustration-empty-cart.svg';

function Sidebar({ cart, removeFromCart }) {
    const isEmpty = cart.count === 0;

    let content;
    if (isEmpty) {
        content = (
            <div className="empty-cart">
                <img src={emptyCartImg} alt="Empty cart" style={{ width: '100%', maxWidth: 200, margin: '0 auto', display: 'block' }} />
                <p style={{ textAlign: 'center', color: '#888', marginTop: 16 }}>Your added items will appear here</p>
            </div>
        );
    } else {
        content = (
            <>
                {Object.values(cart.items).map((item) => (
                    <div key={item.name} className="items-in-cart">
                        <div className="item-name">{item.name}</div>
                        <div className="item-background">
                            <div className="item">
                                <div className="item-info quantity">
                                    {item.quantity}x
                                </div>
                                <div className="item-info price">
                                    <p className="price-text">@</p>
                                    <p>${item.price.toFixed(2)}</p>
                                </div>
                                <div className="item-info cost">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                            <button className="delete-button" onClick={() => removeFromCart(item.name)}><img src="src/assets/images/icon-remove-item.svg" alt="" /></button>
                        </div>
                        <hr />
                    </div>
                ))}
                <div className="sidebar-end-section">
                    <div className="total-background">
                        <p className="p-text">Order Total</p>
                        <p className="p-numeric">${cart.total}</p>
                    </div>
                    <div className="sidebar-end-text"><img src="src/assets/images/icon-carbon-neutral.svg" alt="" />This is a <strong>carbon-natural</strong> delivery</div>
                    <button className="confirm-order-button">Confirm Order</button>
                </div>
            </>
        );
    }

    return (
        <div className="sidebar">
            <h3 className="sidebar-header">Your Cart ({cart.count})</h3>
            {content}
        </div>
    );
}

export default Sidebar;