const posts_no = 5;

function showRecentPosts(json) {
  for (var i = posts_no - 1; i >= 0; i--) {
    var entry = json.feed.entry[i];
    var post_title = entry.title.$t;
    var post_url, post_content;
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel === 'alternate') {
        post_url = entry.link[k].href;
        break;
      }
    }
    var post_date = entry.published.$t;
    var post_year = post_date.substring(0, 4);
    var post_month = post_date.substring(5, 7);
    var post_day = post_date.substring(8, 10);
    var monthnames = [];
    monthnames[1] = "January";
    monthnames[2] = "February";
    monthnames[3] = "March";
    monthnames[4] = "April";
    monthnames[5] = "May";
    monthnames[6] = "June";
    monthnames[7] = "July";
    monthnames[8] = "August";
    monthnames[9] = "September";
    monthnames[10] = "October";
    monthnames[11] = "November";
    monthnames[12] = "December";
    if ("content" in entry) {
      post_content = entry.content.$t;
    } else if ("summary" in entry) {
      post_content = entry.summary.$t;
    } else post_content = "";
    var re = /<\S[^>]*>/g;
    post_content = post_content.replace(re, "");
    post_content = post_content.substring(0, post_content.indexOf(".") + 1);

    var old_innerHTML = document.getElementById("content").innerHTML;
    document.getElementById("content").innerHTML =
        '<article class="post">' +
        '<header class="entry-header">' +
        '<h2 class="entry-title">' +
        '<a href="' + post_url + '" rel="bookmark" title="Permalink to ' + post_title + '">' + post_title + '</a>' +
        '</h2>' +
        '<div class="entry-meta entry-meta--header">' +
        '<a class="entry-meta--link" href="' + post_url + '" rel="bookmark" title="' + post_date + '">' +
        '<time class="date updated" datetime="' + post_date + '">' + monthnames[parseInt(post_month, 10)] + ' ' + post_day + ', ' + post_year + '</time>' +
        '</a></div></header>' +
        '<div class="entry-content">' +
        '<p>' + post_content + '</p>' +
        '<a class="continue-reading" href="' + post_url + '" rel="bookmark" title="Permalink to ' + post_title + '">Continue Reading</a>' +
        '</div>' +
        '</article>' + old_innerHTML;
  }
}