import React, { Component } from 'react'
import PropTypesDefinitions from 'prop-types'
class Pizza extends Component {
    state = { 
        orderCount: 0
    }
    render() {
        return (
            <div>
                <header>
                    {this.props.pizzaName}
                    <button className="order-button" onClick={(e) => {
                        console.log(this.state.orderCount)
                        this.setState((prevState) => {
                            return {
                                orderCount: prevState.orderCount + 1
                            }
                        })
                    }}>
                        order
                  </button>
                    <p>Order Count = {this.state.orderCount}</p>
                    
                </header>
                <div>
                    {this.props.price}
                </div>
                <div>
                    {this.props.rating}
                </div>
                <div>
                These are the fucking Ingredients
                </div>
                <ul>
                    <li>Pepperoni</li>
                    <li>Pineapple</li>
                    <li>Jalepenos</li>
                    <li>Real Bacon</li>
                </ul>
            </div>
        )
    }

}

Pizza.propTypes = {
    pizzaName: PropTypesDefinitions.string.isRequired,
    price: PropTypesDefinitions.number.isRequired,
    rating: PropTypesDefinitions.number,
    ThumbsUpCountApp: PropTypesDefinitions.number
}

export default Pizza