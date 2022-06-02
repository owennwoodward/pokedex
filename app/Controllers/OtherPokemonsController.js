import { ProxyState } from "../AppState.js";
import { Otherpokemon } from "../Models/Otherpokemon.js";
import { otherPokemonsService } from "../Services/OtherPokemonsService.js";
import { Pop } from "../Utils/Pop.js";



function _draw() {
    let pokemons = ProxyState.otherPokemons
    let template = ''
    pokemons.forEach(p => template += Otherpokemon.ListTemplate(p))
    document.getElementById('pokemons').innerHTML = template
}

function _drawOtherPokemonsDetails() {
    let otherpokemons = otherPokemonsDetails
    document.getElementById('otherdetails').innerHTML = otherpokemons.DetailsTemplate
}


export class OtherPokemonsController {
    constructor() {
        console.log('other controller', ProxyState.otherPokemons);
        ProxyState.on('otherPokemons', _draw)
        ProxyState.on('otherPokemonsDetails', _drawOtherPokemonsDetails)
        _draw()
        this.getOtherPokemonsDetails()
    }

    async getOtherPokemons() {
        try {
            await otherPokemonsService.getOtherPokemons()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }

    async getOtherPokemonsDetails(index) {
        try {
            await otherPokemonsService.getOtherPokemonsDetails(index)
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }
}