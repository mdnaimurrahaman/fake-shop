
import UseProducts from '../Hooks/UseProducts';
import './Products.css'

import Product from '../Product/Product';
import Loading from '../Shared/Loading';

const Products = () => {

    // const [items, setItems] = useItems();
    const [products, setProducts] = UseProducts([]);
    console.log(products)
    if(products.length === 0){
        return <Loading></Loading>
    }

    return (
        <div className='all__products'>
            <div className='container'>
              <h1 className='fw-bold text-center title'>Latest Products</h1>
                <div className='items-section row my-4'>
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;