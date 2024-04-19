export interface IDestino {
    title: string,
    description: string,
    distance: string,
    travelTime: string,
    image: string
}

export interface ICrew {
    cargo: string,
    nome: string,
    description: string,
    image: string,
    id: number
}

export interface ITechnology {
    titulo: string
    id: number
    descricao: string
    image: string
}