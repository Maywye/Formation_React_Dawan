const ShowForm = ({create}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const user = {};
        for (let i = 1; i < form.length-1; i++) { //-1 => On exclus le dernier input(buton)
            const input = form[i];
            user[input.id] = input.value;


        }
        console.log(user);
        create(user);
}

        return (
            <>
                
                <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Ajouter un nouvel utilisateur.trice</legend>
                            <p>
                                <label htmlFor="name">Nom</label>
                                <br/>
                                <input id="name" name="name"></input>
                            </p>
                            <p>
                                <label htmlFor="email">Adresse mail</label>
                                <br/>
                                <input id="email" name="email"></input>
                            </p>
                            <p>
                                <button type="submit">Créer</button>
                            </p>
                        </fieldset>
                    </form>
            </>
        )
    
}

export default ShowForm;