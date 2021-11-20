import { useSelector } from "react-redux";
import Product from "./Product";
import {RootState} from "../store"
import { Key } from "react";
import { IProduct } from "../reducers/products"
export default function Products() {

    const products = useSelector((state: RootState) => state.products)
    console.log('State products', products);
    
    const showProducts = (products: IProduct[]) => {
        var result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product key= {index} {...product}/>
            })
        }
        return result
    }

    return (
        <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
                {/* Product */}
                {showProducts(products)}
                
            </div>
        </section>
    )
}