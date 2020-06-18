import Link from 'next/link'
import React from 'react'

export const HTML = ({type, className, html}) => {
	return React.createElement(type ?? 'div', {
		className,
		dangerouslySetInnerHTML: {__html: html}
	})
}

export const NavLink = ({
	href = '/[page]',
	as,
	className,
	children,
	title
}) => (
	<Link href={href} as={as}>
		<a className={className}>
			{children ?? title}
		</a>
	</Link>
)
