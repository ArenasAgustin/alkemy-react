import axios from "axios"

export default async function getToken(user: { email: string | undefined, password: string | undefined }): Promise<string | undefined> {
    try {
        let response = await axios.post('http://challenge-react.alkemy.org/', user)

        return response.data.token

    }
    catch (error) {
        console.log(error)
    }
}