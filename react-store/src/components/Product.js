import react from "react";
import formatPrice from "commons/helper";
function Product(props){
    const status = props.product.status
    const _pClass = {
        avaliable: 'product',
        unavaliable: 'product out-stock'
    }
    return(
        
        <div className={_pClass[status]}>
            <div className="p-content">
                <div className="img-wrapper">
                    <div className="out-stock-text">Out of Stock</div>
                    <figure className="image is-4by3">
                        <img src={props.product.image} alt={props.product.name} />
                    </figure>
                </div>                    
                <p className="p-tags">{props.product.tags}</p>
                <p className="p-name">{props.product.name}</p>
            </div>
            <div className="p-footer">
                <p className="price">{formatPrice(props.product.price)}</p>
                <button className="add-cart" disabled={status==='unavaliable'}>
                    <i className="fas fa-shopping-cart"></i>
                    <i className="fas fa-exclamation"></i>
                </button>
            </div>
        </div>
    );

}
export default Product;