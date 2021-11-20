export interface IProduct {
  id: number;
  name: string;
  img: string;
  description: string;
  price: number;
  inventory: number;
}

let  initialState : IProduct[]= [
  {
    id: 1,
    name: "IP7 Plus",
    img: "",
    description: "Sản phẩm do Apple sản xuất",
    price: 7000000,
    inventory: 3,
  },
  {
    id: 2,
    name: "IP8 Plus",
    img: "",
    description: "Sản phẩm do Apple sản xuất",
    price: 8000000,
    inventory: 13,
  },
  {
    id: 3,
    name: "IP9 Plus",
    img: "",
    description: "Sản phẩm do Apple sản xuất",
    price: 9000000,
    inventory: 31,
  },
];

function products(state: IProduct[] = initialState, action: "") {
  // switch (action.type) {
  //   case value:

  //     break;

  //   default:
  //     return state;
  // }
  return state;
}
export default products;
