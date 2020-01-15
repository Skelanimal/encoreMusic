var videoIndex = 1;
showVideos(videoIndex);

function plusVideos(m) {
  showVideos((videoIndex += n));
}

function currentVideo(m) {
  showVideos((videoIndex = m));
}

function showVideos(m) {
  var j;
  var videos = document.getElementsByClassName("videos");
  var vid_dots = document.getElementsByClassName("vid_dot");
  if (m > videos.length) {
    videoIndex = 1;
  }
  if (m < 1) {
    videoIndex = videos.length;
  }
  for (j = 0; j < videos.length; j++) {
    videos[j].style.display = "none";
  }
  for (i = 0; i < vid_dots.length; i++) {
    vid_dots[i].className = vid_dots[i].className.replace(" active", "");
  }
  videos[videoIndex - 1].style.display = "block";
  vid_dots[videoIndex - 1].className += " active";
}
