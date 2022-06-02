import { ProxyState } from "../AppState.js";
import { Otherpokemon } from "../Models/Otherpokemon.js";




const otherApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    timeout: 5000
})



class OtherPokemonsService {
    async getOtherPokemons() {
        const res = await otherApi.get()
        console.log('otherpokemons', res.data);
        ProxyState.otherPokemons = res.data.results.map(p => p)
    }

    async getOtherPokemonsDetails(index) {
        const res = await otherApi.get(index)
        console.log('otherpokemonsdetails', res.data);
        ProxyState.otherPokemonsDetails = new Otherpokemon(res.data)
    }
}


export const otherPokemonsService = new OtherPokemonsService()