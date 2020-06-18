// pages/_document.js
import Document, {Head, Main, NextScript} from 'next/document';
import React from 'react';

class CustomDocument extends Document {
		render() {
				return (
						<html lang="en">
							<Head>
							<script src="https://cdn.broadstreetads.com/init-2.min.js" async></script>
							</Head>
							<body>
								<Main />
								<NextScript />
							</body>
						</html>
				);
		}
}

export default CustomDocument;
