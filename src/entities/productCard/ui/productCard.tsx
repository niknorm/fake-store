import { useGetProductsQuery } from "../api/productApi";


export function Products() {
    const {data, isLoading, error} = useGetProductsQuery(undefined)

    if(isLoading) return <div>blalablbla</div>
    if(error) return <div>adfhgdsg</div>
    console.log(data)
    return (
        <ul>
            {data?.map((product) => (
                <li key={product.id}>{product.title}</li>
            ))}
        </ul>
    )
}