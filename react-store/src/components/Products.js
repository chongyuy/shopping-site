import React from 'react'
import ToolBox from './ToolBox';
import Product from './Product';
class Products extends React.Component{
    products = [{
        id: 1,
        name: 'Air Jordan 4',
        image:'images/2.jpg',
        tags: '45 Colors',
        price: 59440,
        status: 'avaliable'
        
    },
    {
        id: 2,
        name: 'Air Jordan 4',
        image:'images/3.jpg',
        tags: '45 Colors',
        price: 59440,
        status: 'avaliable'
        
    },
    {
        id: 3,
        name: 'Air Jordan 4',
        image:'images/4.jpg',
        tags: '45 Colors',
        price: 59440,
        status: 'avaliable'
        
    },
    {
        id: 4,
        name: 'Air Jordan 4',
        image:'images/5.jpg',
        tags: '45 Colors',
        price: 59440,
        status: 'avaliable'
        
    },
    {
        id: 5,
        name: 'Air Jordan 4',
        image:'images/6.jpg',
        tags: '45 Colors',
        price: 59440,
        status: 'unavaliable'
        
    }]

    render(){
        return (
            <div>
            <ToolBox></ToolBox>

            <div className='products'>
                <div className="columns is-multiline is-desktop">

                    {
                        this.products.map(p => {
                            return(
                            <div className="column is-3" key={p.id}>
                                <Product product={p}></Product>
                            </div>
                            )
                        })
                    }

                        
                </div>
            </div>
            </div>
        )
    }
}
export default Products;