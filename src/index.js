const subscriptionKey = ''

const headers = new Headers({
  'Ocp-Apim-Subscription-Key': subscriptionKey,
})

const requestOptions = {
  method: 'GET',
  headers: headers,
}

const apiUrl = 'https://api-extern.systembolaget.se/site/V2/Agent'

async function fetchData() {
  try {
    const response = await fetch(apiUrl, requestOptions)

    if (!response.ok) {
      throw new Error('Something went wrong with the response')
    }

    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

fetchData()

