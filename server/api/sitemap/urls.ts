import { serverQueryContent } from '#content/server'

export default defineSitemapEventHandler(async (event) => {
	const contentList = await serverQueryContent(event).find()

	const sitemapResult = contentList.map((post) => asSitemapUrl({
		loc: post._path,
		lastmod: post.lastModified,
	}))

	return sitemapResult
})
