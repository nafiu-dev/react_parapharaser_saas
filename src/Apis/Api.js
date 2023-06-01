import axios from 'axios'

const Api = async text => {
    const options = {
        method: 'POST',
        url: 'https://paraphraser1.p.rapidapi.com/',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'YOUR_API_KEY_HERE',
          'X-RapidAPI-Host': 'paraphraser1.p.rapidapi.com'
        },
        data: {
          input: text
        }
    }
    try {
        const response = await axios.request(options)
        console.log(response.data)
        return response.data
    } catch (err) {
        console.log(err)
    }
}


export default Api