import react from "react";

function ToolBox(){
    return(
        <div className="tool-box">
            <div className="logo-text">STORE</div>
            <div className="search-box">
                <div className="field has-addons">
                    <div className="control">
                        <input type="text" className="input search-input" placeholder="Search Product"></input>
                    </div>
                    <div className="control">
                       <button className="button">x</button>
                    </div>
                </div>
            </div>
            <div className="cart-box">
                <i className="fa-solid fa-cart-plus"></i>
                <span className="cart-num">(0)</span>
            </div>
        </div>
    );

}
export default ToolBox;