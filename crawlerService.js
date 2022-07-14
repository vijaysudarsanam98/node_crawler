const Crawler = require("crawler");
const website=require('./models/website')
const knex=require('./models/knex')
let siteInsert=require('./models/website');
const index=require('./index')


let obselete = []; // Array of what was crawled already

let c = new Crawler();

module.exports.crawlAllUrls= async function  (url) {
    console.log(`Crawling ${url}`);
   await website.siteInsert(url,10)
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
                                href.startsWith('http') ? module.exports.crawlAllUrls(href) : module.exports.crawlAllUrls(`${url}${href}`) // The latter might need extra code to test if its the same site and it is a full domain with no URI
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
    //console.log(url)
    
}

