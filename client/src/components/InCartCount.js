import { useEffect, useState } from 'react'

function InCartCount(props){

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`/api/cart/count/${props.id}`)
        .then((res) => res.json())
        .then((data) => setData(data))
    }, []);

    return(
        <>
            <p>In Cart: {!data ? 'Loading...': data}</p>
        </>
    )
}
export default InCartCount