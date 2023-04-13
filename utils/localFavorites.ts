
const funcFoggleFavorite = (id:number) => {

    console.log('toggleFavorite llamado');
    //Crear variable para almacer el arreglo de string de id de pokemons
    let favoritos: number[] = JSON.parse(localStorage.getItem('favorites') || '[]' );

    if(favoritos.includes(id)){
        //Se excluye todos los pokemon que tengan ese Id
        //filter regresa un nuevo arreglo sin el pokemon id
        favoritos = favoritos.filter( pokeId => pokeId !== id);
    }
    else{
        //Si el arreglo no incluye este id se lo inserta
        favoritos.push(id);
    }
    //Se guarda el localStorage y 
    //se convierte el objeto a su representacion de string json
    localStorage.setItem('favorites', JSON.stringify(favoritos));

}

const existeEnFavoritos = (id:number):boolean => {
    //Esto se verifica del lado del servidor  
    if(typeof window === 'undefined') return false;

    const favoritos: number [] = JSON.parse(localStorage.getItem('favorites') || '[]' );
    return favoritos.includes(id);
}

const pokemonsEnLocalStorage = (): number [] =>{
    //Se debe vereficar del lado del servidor
    //la variable window para saber si existe
    //la variable localStorage creada
    //Se verficara el useEffect -----------------

    return JSON.parse(localStorage.getItem('favorites') || '[]' );
}

//Se exporta la funcion, de modo de exportacion
//Con nombre de propiedad, que apunte a la funcion
export default{
    toggleFavorite: funcFoggleFavorite,
    existeEnFavoritos,
    pokemonsEnLocalStorage
}