import fetch from 'isomorphic-unfetch'

const apiURL = 'https://gwpadmin.codewrangler.io/api/gwp/v1';

export default class WordpressService {

	async fetchWhitepapers(
			items,
			offset,
			topics = [],
			tags = [],
			format = '',
			agencies = [],
			search = '',
			start_date = '',
			end_date = '',
			sort_by = 'relevance',
			user_id = '',
			organization_id = ''
		)
	{
		const res = await fetch(`${apiURL}/whitepapers/?items=${items}&offset=${offset}&topics=${topics}&tags=${tags}&format=${format}&agencies=${agencies}&s=${search}&start_date=${start_date}&end_date=${end_date}&sort_by=${sort_by}&user_id=${user_id}&organization_id=${organization_id}`)
		const whitepapers = await res.json()

		return whitepapers;
	}

	async fetchSavedSearch(id) {
		const res = await fetch(`${apiURL}/saved-search/${id}`)
		const search = await res.json()
		return search;
	}

	async fetchSavedSearches( user_id, access_token ) {
		const url = `${apiURL}/saved-searches/`

		const json = JSON.stringify({
			"access_token": access_token,
			"user_id": user_id,
		});

		const res = await fetch(url, {
			method: 'post',
			body: json,
			headers: {
				"Content-Type": "application/json"
			},
		});

		const saved_searches = await res.json()

		return saved_searches;
	}

	async fetchWhitepaper(slug) {
		const res = await fetch(`${apiURL}/whitepapers/${slug}`)
		const whitepaper = await res.json()
		return whitepaper;
	}

	async fetchPosts(items,offset,search = '') {
		const res = await fetch(`${apiURL}/posts/?items=${items}&offset=${offset}&s=${search}`)
		const posts = await res.json()

		return posts;
	}

	async fetchSlides() {
		const res = await fetch(`${apiURL}/slides`)
		const slides = await res.json()

		return slides;
	}

	async fetchPost(slug) {
		const res = await fetch(`${apiURL}/posts/${slug}`)
		const post = await res.json()
		return post;
	}

	async fetchPage(slug) {
		const res = await fetch(`${apiURL}/pages/${slug}`)
		const page = await res.json()
		return page;
	}

	async fetchFormats() {
		const res = await fetch(`${apiURL}/formats/`)
		const formats = await res.json()

		return formats;
	}

	async fetchTopics() {
		const res = await fetch(`${apiURL}/topics/`)
		const topics = await res.json()

		return topics;
	}

	async fetchTopic(slug) {
		const res = await fetch(`${apiURL}/topic/${slug}`)
		const topic = await res.json()
		return topic;
	}

	async fetchTags() {
		const res = await fetch(`${apiURL}/tags/`)
		const tags = await res.json()

		return tags;
	}

	async fetchStats() {
		const res = await fetch(`${apiURL}/fetch-stats/`)
		const stats = await res.json()

		return stats;
	}

	async fetchTeam() {
		const res = await fetch(`${apiURL}/team/`)
		const team = await res.json()

		return team;
	}

	async fetchAgencies(parent) {
		let res;
		if( parent == '' ) {
			res = await fetch(`${apiURL}/agencies/?orderby=name`)
		} else {
			res = await fetch(`${apiURL}/agencies/?parent=${parent}`)
		}
		const agencies = await res.json()

		return agencies;
	}

	async searchOrganizations(search, items = 10) {
		if( search == '' ) {
			return []
		}
		const res = await fetch(`${apiURL}/organizations/?search=${search}&items=${items}`)
		const orgs = await res.json()

		return orgs;
	}

	async fetchOrganization(id) {
		if( id == '' ) {
			return false;
		}
		const res = await fetch(`${apiURL}/organizations/${id}`)
		const org = await res.json()

		return org;
	}

	async fetchFavorites(access_token,items,offset) {

		const url = `${apiURL}/favorites/`

		const json = JSON.stringify({
			"access_token": access_token,
			"items": items,
			"offset": offset
		});

		const res = await fetch(url, {
			method: 'post',
			body: json,
			headers: {
				"Content-Type": "application/json"
			},
		});

		const whitepapers = await res.json()

		return whitepapers;
	}

	async fetchOrganizationMembers(access_token) {

		const url = `${apiURL}/organization-members/`
		const json = JSON.stringify({
			"access_token": access_token,
		});

		const res = await fetch(url, {
			method: 'post',
			body: json,
			headers: {
				"Content-Type": "application/json"
			},
		});

		const members = await res.json()

		return members;
	}

	async checkFavorite(id,token) {
	//	const res = await fetch(`${apiURL}/is-favorite/`)
		const url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/is-favorite';
		const json = JSON.stringify({
			"ID": id,
			"access_token": token
		});

		const res = await fetch(url, {
			method: 'post',
			body: json,
			headers: {
				"Content-Type": "application/json"
			},
		});

		const r = await res.json()

		return r;
	}

	async getUser(token) {

		if( !token ) {
			return false;
		}

		const url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/user';
		const json = JSON.stringify({
			"access_token": token
		});

		const res = await fetch(url, {
			method: 'post',
			body: json,
			headers: {
				"Content-Type": "application/json"
			},
		});

		const r = await res.json()

		return r;
	}

	// async fetchHomeSlides() {
	// 	const res = await fetch(`${apiURL}/home-slides?items=4`)
	// 	const slides = await res.json()
	//
	// 	return slides
	// }

}
