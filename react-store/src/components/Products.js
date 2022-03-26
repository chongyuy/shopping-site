import React from 'react'
import ToolBox from './ToolBox';
import Product from './Product';
import { useState, useEffect }from "react";
import Axios from 'commons/axios';
function Products (){
    const [listOfProducts, setListOfProducts] = useState([]);
    const [sourceProducts, setsourceProducts] = useState([]);
    useEffect(() => {
        Axios.get("/getProducts").then((response) => {
            setListOfProducts(response.data)
            setsourceProducts(response.data)
        })
    }, [])
    //search
    function search(text){
        //Get new array
        let _products = [...sourceProducts]
        _products = _products.filter(p => {
            //name: Abcd test: ab ===>['Ab']
            //text: '' ==> ["", "", "", ""]
        const matchArray = p.name.match(new RegExp(text, 'gi'))
        // console.log(matchArray)
        return !!matchArray
        });
        setListOfProducts(_products)
    }
        return (
            <div>
            <ToolBox search={search}></ToolBox>

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