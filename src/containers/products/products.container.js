import React, { useState, useEffect } from 'react'
import {
    connect,
    useDispatch,
    useSelector
} from 'react-redux'


// // internal import
import { actionsServices } from '../../services'
import { setIsLoading } from '../../redux/actions'


const ListProducts = (props) => {

    const [listItems, setListItems] = useState([])
    const [count, setCount] = useState(0)

    const dispatch = useDispatch();

    const productsItems = () => {
        dispatch(setIsLoading(true))
        actionsServices.POST({ url: `/catalogue/master/list/0/10` })
        .then(result => {
            // console.log('result', result)
            dispatch(setIsLoading(false))
            setListItems(result.items);
            setCount(result.count);
        }).catch(err => {
            dispatch(setIsLoading(false))
            if (err) console.log('[err]', err)
        })
    }

    useEffect(() => {
        productsItems();
    }, [])

    // console.log('user', user)

    return (
        <div className="container mt-3">
            <h4>Daftar Products</h4>
            <table>
                <tbody>
                    {listItems.map( items => {
                        return <tr key={items._id}>
                            <td>{items.sku}</td>
                            <td>{items.name}</td>
                            <td>{items.price}</td>
                            <td>{items.original_price}</td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default connect()(ListProducts)