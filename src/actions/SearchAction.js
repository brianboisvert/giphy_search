const base = "http://api.giphy.com/v1/gifs/search?q="
const api_key="&api_key=A8AYgCnGZ2In4p22hNsyA7mXsrjPMoYf"
// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=A8AYgCnGZ2In4p22hNsyA7mXsrjPMoYf

export default function fetchGifs(term) {
  return (dispatch) => {
    fetch(`${base}${term.term}${api_key}`)
      .then(res => res.json())
      .then(data => {
        dispatch({type: 'ALL_GIFS', payload: data})
      })
  }
}
