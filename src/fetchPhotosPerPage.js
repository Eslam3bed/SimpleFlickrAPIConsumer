export default ({page ,searchText})=>{
  const RequestUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=${searchText || 'natural space'}&api_key=67a036cb7e9dacab26666a4054b1760a&format=json&per_page=10&nojsoncallback=1&page=${page || 0}`;
  const RequestOptions= {
    headers:{
      "Accept": "application/json"
    }
  }
  return fetch(RequestUrl , RequestOptions)
}
