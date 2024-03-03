import { useEffect, useState } from "react";



const LoadMore = () => {

    let [products, setProducts] = useState([]);
    let [skip, setSkip] = useState(0);
    let [limit, setLimit] = useState(20);

    const handleClick = () => {
        if (limit !== 100) {
            setSkip(skip + 20);
            setLimit(limit + 20);
        }
    }

    const fetchData = async () => {
        const data = await fetch(`https://dummyjson.com/products?limit=20&skip=${skip}`)
        const json = await data.json();
        console.log(json)
        setProducts((prevProducts) => {
            return [...prevProducts, ...json.products]
        })
    }

    useEffect(() => {
        fetchData();
    }, [skip])

    return (
        <div className="main-container">
            {limit !== 100 ?
                <div className="product-container">
                    {products.map((p) => {
                        return (
                            <div className="product">
                                <img src={p.images[0]} />
                            </div>
                        )
                    })}
                </div> : <div className="end">No More Products to Load!</div>}
            <div className="btn-container">
                <button className={`btn ${limit === 100 ? "btn-disabled" : null}`} onClick={handleClick}>Load More Products</button>
            </div>

        </div>
    )

}

export default LoadMore;