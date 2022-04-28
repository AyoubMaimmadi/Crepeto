/* Helper file that will contains functions used by other files and components */

// Make GET requests using passed url and save data
export const getResources = (url, setData) => {
  fetch(`http://localhost:3090${url}`)
    .then((response) => response.json())
    .then((data) => {
      setData(data)
    })
    .catch((err) => console.error(err))
}

// Make POST requests using passed url and data
export const createResource = async (url, body) => {
  await fetch(`http://localhost:3090${url}`, {
    method: 'POST',
    body: JSON.stringify(body),
  }).then((response) => {
    return response.json()
  })
}

// Make DELETE requests using passed url and data
export const deleteResource = async (url, body) => {
  await fetch(`http://localhost:3090${url}`, {
    method: 'DELETE',
    body: JSON.stringify(body),
  }).then((response) => {
    return response.json()
  })
}

// Make UPDATE requests using passed url and data
export const updateResource = async (url, body) => {
  await fetch(`http://localhost:3090${url}`, {
    method: 'UPDATE',
    body: JSON.stringify(body),
  }).then((response) => {
    return response.json()
  })
}
