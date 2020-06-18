import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import headerStyles from '../public/styles/modules/header.module.css';

export default ({ href, children }) => {
	const router = useRouter()

	let className = children.props.className || ''
	if (router.pathname === href) {
		className = `${className} ${headerStyles.active}`
	} else if ( router.pathname == '/blog/[post]' && href == '/blog' ) {
		className = `${className} ${headerStyles.active}`
	} else if ( router.pathname == '/whitepapers/[whitepaper]' && href == '/find' ) {
		className = `${className} ${headerStyles.active}`
	} else if ( router.pathname == '/topic/[topic]' && href == '/find' ) {
		className = `${className} ${headerStyles.active}`
	}

	return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}
