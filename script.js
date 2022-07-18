const videoCardContainer = document.querySelector('.video-container');

// <!-- https://developers.google.com/youtube/code_samples?hl=en#youtube-live-streaming-api -->



let api_key = "your api key";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

async function yt1(){
    let item = await fetch(video_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 50,
        regionCode: 'IN'
    }))
    let res = await res.json();
    let data= await data.items.forEach(item => {
        getChannelIcon(item);
    }
    )

}
yt1();



const getChannelIcon = async function yt2 (video_data) 
{
   let items =await fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    }))
    let res = await res.json();
    let data=await 
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        makeVideoCard(video_data);
}
yt2 ();

// fetch(video_http + new URLSearchParams({
//     key: api_key,
//     part: 'snippet',
//     chart: 'mostPopular',
//     maxResults: 50,
//     regionCode: 'IN'
// }))
// .then(res => res.json())
// .then(data => {
//     data.items.forEach(item => {
//         getChannelIcon(item);
//     })
// })
// .catch(err => console.log(err));

// const getChannelIcon = (video_data) => {
//     fetch(channel_http + new URLSearchParams({
//         key: api_key,
//         part: 'snippet',
//         id: video_data.snippet.channelId
//     }))
//     .then(res => res.json())
//     .then(data => {
//         video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
//         makeVideoCard(video_data);
//     })
// }

const makeVideoCard = (data) => {
    videoCardContainer.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
            <img src="${data.channelThumbnail}" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${data.snippet.title}</h4>
                "<p class="channel-name">${data.snippet.channelTitle}</p>"
                </div>
        </div>
    </div>
    `;
}

// search bar

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})