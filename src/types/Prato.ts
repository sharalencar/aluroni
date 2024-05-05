import cardapio from "data/cardapio.json";

export type Carpadio = typeof cardapio;

export type Prato = (typeof cardapio)[0];
