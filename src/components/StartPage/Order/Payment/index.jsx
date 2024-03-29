import React from 'react'

import logoSVG from './../../../../assets/images/logo.svg'

import './Payment.scss'

export default function Payment() {
	return (
		<div className="payment">
			<div className="payment__container">
				<div className="payment__title">
					<h3>Способ оплаты</h3>
				</div>

				<div className="payment__list">
					<label>
						<input type="radio" name="delivery" />
						<span className="rad_button"></span>
						<div className="payment__list__wrapper">
							<p className="payment__list__top">
								<span className="dpayment__list__top__left">
									Оплата при получении
							</span>
							</p>

						</div>
					</label>
					<label>
						<input type="radio" name="delivery" />
						<span className="rad_button"></span>
						<div className="payment__list__wrapper">
							<p className="payment__list__top">
								<span className="dpayment__list__top__left">
									Яндекс.Касса
							</span>

							</p>
							<p className="payment__list__bottom">
								<span className="payment__list__bottom__left">
									Сбербанк, оплата картой без комиссии, Яндекс деньги, Киви кошелек
							</span>

							</p>
						</div>
					</label>
					<label>
						<input type="radio" name="delivery" />
						<span className="rad_button"></span>
						<div className="payment__list__wrapper">
							<p className="payment__list__top">
								<span className="dpayment__list__top__left">
									Оплата через сервис Сбербанка
							</span>

							</p>
							<p className="payment__list__bottom">
								<span className="payment__list__bottom__left">
									Возможна оплата картой любого банка
							</span>

							</p>
						</div>
					</label>
				</div>
				<div className="payment__buttons">
					<div className="payment__buttons__prew">
						<div>
							<span>Назад</span>
							<div>
								<svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.333149 8.0853L7.00834 14.7604C7.16273 14.9149 7.36882 15 7.58858 15C7.80833 15 8.01443 14.9149 8.16882 14.7604L8.6604 14.2689C8.98027 13.9487 8.98027 13.4282 8.6604 13.1084L3.05508 7.50311L8.66662 1.89157C8.82101 1.73706 8.90625 1.53108 8.90625 1.31145C8.90625 1.09158 8.82101 0.885602 8.66662 0.730968L8.17504 0.239632C8.02053 0.0851201 7.81455 -9.54393e-08 7.5948 -1.14651e-07C7.37504 -1.33862e-07 7.16895 0.08512 7.01456 0.239631L0.333149 6.9208C0.178394 7.0758 0.093395 7.28274 0.0938832 7.50274C0.0933949 7.72359 0.178394 7.93042 0.333149 8.0853Z" fill="#008CE6" />
								</svg>
							</div>
						</div>
					</div>
					<div className="payment__buttons__next">
						<div>
							<span>Далее</span>
							<div>
								<svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M8.66685 6.9147L1.99166 0.239632C1.83727 0.0851213 1.63118 0 1.41142 0C1.19167 0 0.985572 0.0851213 0.831183 0.239632L0.339602 0.731092C0.0197263 1.05133 0.0197263 1.57182 0.339602 1.89157L5.94492 7.49689L0.333382 13.1084C0.178993 13.2629 0.09375 13.4689 0.09375 13.6885C0.09375 13.9084 0.178993 14.1144 0.333382 14.269L0.824964 14.7604C0.979475 14.9149 1.18545 15 1.4052 15C1.62496 15 1.83105 14.9149 1.98544 14.7604L8.66685 8.0792C8.82161 7.9242 8.90661 7.71725 8.90612 7.49726C8.90661 7.2764 8.82161 7.06958 8.66685 6.9147Z" fill="white" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		
		</div>
	)
}
