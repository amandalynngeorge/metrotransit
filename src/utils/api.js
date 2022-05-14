const apiURL = 'http://svc.metrotransit.org/NexTrip'

async function client(
    endpoint,
  ) {
    const config = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
        'Access-Controll-Allow-Origin': '*'
      }
    }
  
    return fetch(`${apiURL}/${endpoint}`, config).then(async response => {
      const data = await response.json()
      if (response.ok) {
          console.log('fetch', data)
        return data
      } else {
        return Promise.reject(data)
      }
    })
  }
  
  export {client}