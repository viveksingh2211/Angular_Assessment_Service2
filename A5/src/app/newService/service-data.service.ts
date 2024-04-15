import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ServiceDataService {
  products = [
    {
      id: '1',
      name: 'Shirt',
      image:
        'https://assets.ajio.com/medias/sys_master/root/20240329/Zd69/66067b1105ac7d77bbe332ce/-473Wx593H-467143510-brown-MODEL.jpg',
      price: 15,
      discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit iste itaque repellendus ipsa reprehenderit dolores. Earum debitis eum necessitatibus, quasi quos sunt voluptatem quis sint quisquam quas, recusandae sapiente?'
    },
    {
      id: '2',
      name: 'Backpack',
      image:
        'https://ogioindia.com/cdn/shop/files/5921132og-ac-og-renegade-pro-bkpk-hthr-gry-22-right.jpg?v=1689664486',
      price: 30,
      discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit iste itaque repellendus ipsa reprehenderit dolores. Earum debitis eum necessitatibus, quasi quos sunt voluptatem quis sint quisquam quas, recusandae sapiente?'
    },
    {
      id: '3',
      name: 'Shoe',
      image:
        'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/107341/01/fnd/IDN/fmt/png/Varion-II-Unisex-Indoor-Sports-Shoes',
      price: 21,
      discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit iste itaque repellendus ipsa reprehenderit dolores. Earum debitis eum necessitatibus, quasi quos sunt voluptatem quis sint quisquam quas, recusandae sapiente?'
    },
    {
      id: '4',
      name: 'Headphones',
      image:
        'https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw176cd05e/1.JBL_Tune_770NC_Product%20Image_Hero_Blue.png?sw=535&sh=535',
      price: 50,
      discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit iste itaque repellendus ipsa reprehenderit dolores. Earum debitis eum necessitatibus, quasi quos sunt voluptatem quis sint quisquam quas, recusandae sapiente?'
    },
    {
      id: '5',
      name: 'Wallet',
      image: 'https://m.media-amazon.com/images/I/71smoRJEX+L._SX679_.jpg',
      price: 18,
      discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit iste itaque repellendus ipsa reprehenderit dolores. Earum debitis eum necessitatibus, quasi quos sunt voluptatem quis sint quisquam quas, recusandae sapiente?'
    },
    {
      id: '6',
      name: 'Watch',
      image:
        'https://justintime.in/cdn/shop/products/AX2440.jpg?v=1681998275&width=1426',
      price: 80,
      discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit iste itaque repellendus ipsa reprehenderit dolores. Earum debitis eum necessitatibus, quasi quos sunt voluptatem quis sint quisquam quas, recusandae sapiente?'
    },
    {
      id: '7',
      name: 'Sunglasses',
      image:
        'https://www.eyewearlabs.com/cdn/shop/products/1_bdf85000-4db4-49da-a9b8-22b6e5c6540b.png?v=1705318307&width=3000',
      price: 25,
      discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit iste itaque repellendus ipsa reprehenderit dolores. Earum debitis eum necessitatibus, quasi quos sunt voluptatem quis sint quisquam quas, recusandae sapiente?'
    },
    {
      id: '8',
      name: 'Jeans',
      image:
        'https://m.media-amazon.com/images/I/61SRj3IzD1L._AC_UL800_FMwebp_QL65_.jpg',
      price: 35,
      discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit iste itaque repellendus ipsa reprehenderit dolores. Earum debitis eum necessitatibus, quasi quos sunt voluptatem quis sint quisquam quas, recusandae sapiente?'
    },
    {
      id: '9',
      name: 'Smartphone',
      image:
        'https://letsmobideal.com/wp-content/uploads/2023/01/i12-600x600.gif',
      price: 300,
      discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit iste itaque repellendus ipsa reprehenderit dolores. Earum debitis eum necessitatibus, quasi quos sunt voluptatem quis sint quisquam quas, recusandae sapiente?'
    },
  ];

  constructor(private router:Router) {}
  getOneProductDetail(id:string){
    return this.products.find((p)=>(p.id === id))
  }
}
