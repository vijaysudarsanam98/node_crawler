const Crawler = require("crawler");
const website=require('./models/website')
const knex=require('./models/knex')
let siteInsert=require('./models/website');
const index=require('./index')



let obselete = []; // Array of what was crawled already

let c = new Crawler();

module.exports.crawlAllUrls= async function  (url,websiteId) {
    console.log(`Crawling ${url}`);
    console.log(websiteId)
   await website.siteInsert(url,websiteId)
  let update= await website.updateNewSite()
    c.queue({
        uri: url,
        callback:  function (err, res, done) {
            if (err) throw err;
            let $ = res.$;
            try {
                let urls = $("a");
                Object.keys(urls).forEach((item) => {
                    if (urls[item].type === 'tag') {
                        let href = urls[item].attribs.href;
                        if (href && !obselete.includes(href) && href.startsWith(url)) {
                            href = href.trim();
                            obselete.push(href);
                            // Slow down the
                            setTimeout(function() {
                                href.startsWith('http') ? module.exports.crawlAllUrls(href,websiteId,update) : module.exports.crawlAllUrls(`${url}${href}${websiteId}${update}`) 
                            }, 5000)
                        }
                    }
                });
                
            } catch (e) {
                console.error(`Encountered an error crawling ${url}. Aborting crawl.`);
                done()
            }
            done();
        }
    })
    
}

