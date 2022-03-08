export const getFakeRecipe = (params?: Partial<{ uuid: string }>) => {
  return {
    uuid: `${new Date().getTime()}-0001`,
    name: 'Foobar',
    description: 'Lorem ipsum dolar sit amet',
    ...(params || {}),
  }
}
