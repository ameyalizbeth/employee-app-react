import * as React from 'react'

import { useGetEmployeeQuery } from '../../api-client'
export default function Counter() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetEmployeeQuery()
  console.log(data)
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  
  // render UI based on data and loading state
}