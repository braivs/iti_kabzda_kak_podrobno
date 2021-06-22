export type CountriesType = {
  id: string
  title: string
}
export type CityType = {
  id: string
  title: string
  pollution: number
}
export type CitiesType = {
  [key: string]: Array<CityType>
}