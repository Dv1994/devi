import { useRouter } from "next/router";

const Productdetials = () => {
    const router = useRouter()
    const productId = router.query.productid
    return (
        <div>
           <h1>Details about Product</h1> 
        </div>
    );
}

export default Productdetials;
