export const partial = (fn, ...args) => fn.bind(null, ...args)

export const uid = () => Math.random().toString(16).slice(2)

export const findById = (id, list) => list.find(item => item.id === id)
