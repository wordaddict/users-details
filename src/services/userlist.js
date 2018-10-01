const getUsers = () => {
    return fetch('https://randomapi.com/api/?key=UNJ1-YXHU-PCZG-9PBR&ref=8j0xdm8o&results=20')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            return myJson;
        });
}

export default getUsers;