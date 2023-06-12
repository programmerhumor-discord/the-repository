import axios from "axios";
import { load } from "cheerio";

let data = {
  fetch(subreddit) {
    let url = `https://www.reddit.com/r/${subreddit}`

    return new Promise((resolve, reject) => {
      axios({
        url: url,
        method: "get"
      })
      .then((res) => {
        let html = res.data;
        resolve(html);
      });
    });
  },

  getPosts(html) {
    let data = [];
    let $ = load(html);

    $("[data-testid=post-container]").each(function() {
      let type = "img";
      let title = $(this).find("h3")[0].children[0].data;
      if (!$(this).toString().toLowerCase().includes("promoted") && !$(this).toString().toLowerCase().includes("discount")) {
        let href = "https://www.reddit.com" + $(this).find("a").attr("href");
        let src =  $(this).find("a").find("img").attr("src");
        let author = $(this).find("a").attr("style", "color: rgb(129, 131, 132);");
        console.log(author);
        if (!src) {
          type = "video";
          src = $(this).find("video").find("source").attr("src");
        }
        
        data.push({
          "title": title,
          "href": href,
          "src": src,
          "type": type
        })
      }
    })
    return data;
  }
}

export default data;