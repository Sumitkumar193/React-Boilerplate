import { useParams } from "react-router-dom";

export default function Product() {
    const {id} = useParams();
    console.log(id);
    return (
        <>
            Product ID = {id}
        </>
    )
}