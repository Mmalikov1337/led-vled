import React from 'react'

import logoSVG from '../../../assets/images/logo.svg'
import phoneSVG from './../../../assets/images/phone.svg'
import cartSVG from './../../../assets/images/cart.svg'

import './StartPageHeader.scss';

export default function StartPageHeader() {
	const [productQuantity, setProductQuantity] = React.useState(1);
	return (
		<div className="sp-header">
			{/* <div className="container"> */}
			<div className="sp-header__logo">
				<img src={logoSVG} alt="logoSVG" />
			</div>
			<div className="sp-header__links">
				<ul>
					<li className="sp-header__links__link">Состав</li>
					<li className="sp-header__links__link">Каталог</li>
					<li className="sp-header__links__link">Партнерам</li> {/* в макете написано: "Парнерам", мб ошибка, мб так надо, пока правильно написал */}
					<li className="sp-header__links__link">Контакты</li>
				</ul>
				{/* <a href="" className="sp-header__links__link">Состав</a>
					<a href="" className="sp-header__links__link"> Каталог</a>
					<a href="" className="sp-header__links__link">Партнерам</a>
					<a href="" className="sp-header__links__link">Контакты</a> */}
			</div>
			<div className="sp-header__buttons">
				<div className="sp-header__buttons__phone">

					<div>
						<img src={phoneSVG} alt="phoneSVG" />
					</div>

					<span>
						8 800 <span>854 - 12 - 34</span>
					</span>

				</div>
				<div className="sp-header__buttons__cart">
					<div className="sp-header__buttons__cart__button">
						<img src={cartSVG} alt="cartSVG" />

					</div>
					{
						productQuantity > 0 ?
							<div className="circle">
								<div>
									<span>
										{productQuantity}

									</span>

								</div>
							</div> :
							""
					}
				</div>

			</div>
			{/* </div> */}
		</div>
	)
}
