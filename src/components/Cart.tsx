import CartItem from "./CartItem"
import CartResult from "./CartResult"

export default function Cart() {
  return(
    <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Tổng Cộng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* CartItem */}
                            <CartItem />
                            {/* CartResult */}
                            <CartResult />
                        </tbody>
                    </table>
                </div>
            </section>
  )
}