
import UseProducts from '../Hooks/UseProducts';

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
        <div>
            <div className='container'>
                <div className='items-section row'>
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;