console.assert(MM.Item.prototype.getLinkType("www.douban.com") == "豆瓣")
console.assert(MM.Item.prototype.getLinkType("www.zhihu.com") == "知乎")
console.assert(MM.Item.prototype.getLinkType("www.weibo.com") == "微博")
console.assert(MM.Item.prototype.getLinkType("www.blah.com/a.jpg") == "IMG")