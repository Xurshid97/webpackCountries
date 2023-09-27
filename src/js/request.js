import loaderToggle from "./loader"

const request = async (api) => {
    loaderToggle(true)
    const req = await fetch(api)
    const data = await req.json()
    loaderToggle(false)
    return data
}

export default request