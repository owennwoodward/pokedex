

export class Otherpokemon {
    constructor(data) {
        this.id = data.index || data.id
        this.name = data.name
        this.abilities = data.abilities
        this.base_experience = data.base_experience
        this.forms = data.forms
        this.game_indices = data.game_indices
        this.height = data.height
        this.held_items = data.held_items
        this.item = data.item
        this.version_details = data.version_details
        this.is_default = data.is_default
        this.location_area_encounters = data.location_area_encounters
        this.moves = data.moves
        this.order = data.order
        this.past_types = data.past_types
        this.species = data.species
        this.sprites = data.sprites
        this.stats = data.stats
        this.types = data.types
        this.weight = data.weight
    }

    static ListTemplate(otherpokemons) {
        return ` <h4 class="selectable" onclick="app.otherPokemonsController.getOtherPokemonsDetails('${otherpokemons.index}')"> ${otherpokemons.name}</h4>
        `
    }
}