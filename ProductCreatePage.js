import { useNavigate } from "react-router-dom";

export function ProductCreatePage(){
    const navigate = useNavigate();
    return (
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>Új product</h2>
            <form
            onSubmit={(event) => {
            event.persist();
            event.preventDefault();
            fetch(`https://localhost:5001/Product`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    Name: event.target.elements.Name.value,
                    Price: event.target.elements.Price.value,
                    Qty: event.target.elements.Qty.value,
                    Flagimg: event.target.elements.Flagimg.value,
                }),
            })
            .then(() =>
            {
                navigate("/");
            })
            .catch(console.log);
            }}>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">product név:</label>
                <div className="col-sm-9">
                <input type="text" name="Name" className="form-control" />
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Ár:</label>
                <div className="col-sm-9">
                <input type="number" name="Price" className="form-control" />
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">darab:</label>
                <div className="col-sm-9">
                <input type="number" name="Qty" className="form-control" />
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Kép URL-je:</label>
                <div className="col-sm-9">
                <input type="text" name="Flagimg" className="form-control" />
                </div>
            </div>
            <button type="submit" className="btn btn-success">
                Küldés
            </button>
            </form>
        </div>
    );
}
export default ProductCreatePage;