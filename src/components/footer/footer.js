import React from 'react';

export default ({ footerData }) => (
	<footer>
		{console.log(footerData)}
		<div className="container">
			<div className="flex">
				<div className="colmn-box">
					<a href={footerData.footerLogo.url} className="footer-brand">{footerData.footerLogo.title}</a>
				</div>
				<div className="colmn-box">
					<ul>
						{footerData.footerNavigation.map((item, key) => <li key={key}><a href={item.url}>{item.title}</a></li>)}
					</ul>
				</div>
			</div>
			<div className="flex">
				<div className="colmn-box">
					<p>{footerData.copyright}</p>
				</div>
				<div className="colmn-box">
					<ul className="privacy-nav">
						{footerData.seconderyNavigation.map((item, key) => <li key={key}><a href={item.url}>{item.title}</a></li>)}
					</ul>
				</div>
			</div>
		</div>
	</footer>

)
