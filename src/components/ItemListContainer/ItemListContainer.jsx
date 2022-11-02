import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/Loader'
import { db } from '../../config/GetFireStoreApp'

function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()

    useEffect(() => {

        if (idCategory) {
            const queryCollectionCategory = query(collection(db, 'items'), where('category', '==', idCategory))
            getDocs(queryCollectionCategory)
                .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .finally(() => setLoading(false))
        } else {
            const queryCollection = collection(db, 'items')
            getDocs(queryCollection)
                .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .finally(() => setLoading(false))
        }
    }, [idCategory])

    return (
        <div>
            <h2 className="text-center"> {greeting} </h2>
            <div className="container">
                <div className="row">
                    {loading
                        ?
                        <Loader />
                        :
                        <ItemList products={products} />
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer