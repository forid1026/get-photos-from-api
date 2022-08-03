fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(data => getPhotos(data))


function getPhotos(data){
    const mainDiv = document.getElementById("main-div");
    for (const photos of data) {
        console.log(photos);
        const photo = document.createElement('div');
        photo.classList.add('photo');
        mainDiv.appendChild(photo);
        const title = document.createElement('h3'); 
        const image = document.createElement('img');
        image.src= photos.url;
        title.innerText = photos.title;
        photo.appendChild(title);
        photo.appendChild(image);


    }
}