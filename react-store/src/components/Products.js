import React from 'react'
import ToolBox from './ToolBox';
import Product from './Product';
import { useState, useEffect }from "react";
import Axios from 'axios';
function Products (){
    const [listOfProducts, setListOfProducts] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3001/getProducts").then((response) => {
            setListOfProducts(response.data)
        })
    }, [])
    console.log(listOfProducts)
        return (
            <div>
            <ToolBox></ToolBox>

            <div className='products'>
                <div className="columns is-multiline is-desktop">

                    {
                        listOfProducts.map(p => {
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
export default Products;