import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";

export function ProductsModPage(){
    const params=useParams();
    const id=params.productsId;
    const navigate=useNavigate();
    const[products,setProducts] = useState([]);
    const [modprice,setModprice]=useState('');
    const [modqty,setModqty]=useState('');
    const [modkepurl,setModkepurl]=useState('');
    const [modname,setModname]=useState('');
    useEffect(() => {
        (async () => {
            try {
        const res= await fetch(`https://localhost:5001/Product/${id}`)
            const products = await res.json();
            setProducts(products);
            setModname(products.Name);
            console.log(modname);
            setModprice(products.Price);
            console.log(modprice);
            setModqty(products.Qty);
            console.log(modqty);
            setModkepurl(products.Flagimg);
            console.log(modkepurl);
        }
        catch(error) {
            console.log(error);
        }
    })
    ();
 }, [id,modname,modprice,modqty,modkepurl]);
 const modName=event=>{
    setModname(event.target.value);
 }
 const modPrice=event=>{
    setModprice(event.target.value);
 }
 const modQty=event=>{
    setModqty(event.target.value);
 }
 const modKepurl=event=>{
    setModkepurl(event.target.value);
 }
    return (
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>Products modósítás</h2>
            <form
            onSubmit={(event) => {
            event.persist();
            event.preventDefault();
            fetch(`https://localhost:5001/Product`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    Id: event.target.elements.id.value,
                    Name: event.target.elements.name.value,
                    Price: event.target.elements.price.value,
                    Qty: event.target.elements.qty.value,
                    Flagimg: event.target.elements.flagimg.value,
                }),
            })
            .then(() =>
            {
                navigate("/");
            })
            .catch(console.log);
            }}>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Id:</label>
                <div className="col-sm-9">
                <input type="text" name="id" className="form-control" value={products.Id}/>
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Products név:</label>
                <div className="col-sm-9">
                <input type="text" name="name" className="form-control" defaultValue={products.Name} onChange={modName}/>
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Ár:</label>
                <div className="col-sm-9">
                <input type="number" name="price" className="form-control" defaultValue={products.Price} onChange={modPrice}/>
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">darab:</label>
                <div className="col-sm-9">
                <input type="number" name="qty" className="form-control" defaultValue={products.Qty} onChange={modQty}/>
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Kép URL-je:</label>
                <div className="col-sm-9">
                <input type="text" name="flagimg" className="form-control" defaultValue={products.Flagimg} onChange={modKepurl}/>
                <br/>
                <img src={products.Flagimg} height="200px" alt={products.Name}></img></div>
            </div>
            <button type="submit" className="btn btn-success">
                Küldés
            </button>
            </form>
        </div>
    );
}
export default ProductsModPage;