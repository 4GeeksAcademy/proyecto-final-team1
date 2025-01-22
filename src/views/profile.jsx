import { useContext, useState } from "react";
import { Context } from "../store/AppContext";


export const Profile = () => {
    const { store, actions } = useContext(Context);
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        localization: '',
        registration_date: '',
        description: '',
        favorites: ''

    });


    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = (e) => {
        e.preventDefault();

        setIsEditing(false);
    };





    return (
        <div className="container d-flex justify-content-center">
            <div className="card mb-5 mt-5 w-50 p-5">
                <div className="row g-0">
                    <div className="col-md-4 mt-3">
                        <img src="https://cdn-icons-png.flaticon.com/512/4794/4794936.png" className="img-fluid rounded-start" alt="Foto" />
                        {/* <p> className="card-title">email@email.com</p> */}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">

                            {isEditing ? (
                                <form onSubmit={handleSave}>
                                    <input className="form-control mb-3" placeholder="Nombre" type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                                    <input className="form-control mb-3" placeholder="Email" type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                    <input className="form-control mb-3" placeholder="Localización" type="text" value={user.localization} onChange={(e) => setUser({ ...user, localization: e.target.value })} />

                                    <div className="text-end mt-5">
                                        <button onClick={handleSave} type='submit' className="btn btn-outline-primary">GUARDAR</button>
                                    </div>


                                </form>
                            ) : (
                                <div className="cuadro">
                                   
                                    <p className="card-title">Nombre: {store.user.fullname}</p>
                                    <p className="card-title">Email: {store.user.email}</p>
                                    <p className="card-title">Localización: </p>
                                    <p className="card-title">Fecha registro: {store.user.date_at} </p>

                                    <div className="text-end mt-5">
                                        <button type="submit" className="btn btn-outline-primary ml-5 "><i className="fa-solid fa-heart-circle-check"></i></button>
                                        <button onClick={handleEdit} type='submit' className="btn btn-outline-primary">EDITAR</button>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

