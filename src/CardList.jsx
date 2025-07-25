import dessertData from '../data.json'
import Card from './Card'

const List = ({ addToCart, removeFromCart, cart }) => {
    return (
        <div>
            {dessertData.map((dessert, index) => (
                <Card key={index} dessert={dessert} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />
            ))}
        </div>
    )
}

export default List