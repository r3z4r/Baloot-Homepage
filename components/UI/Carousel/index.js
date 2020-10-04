import React from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import Frame from "./Frame";

const Carosel = props => {
	const items = [
		{
			imgURL: "/images/homepage/carousel/Intersection 1.png",
			title: "آشنایی با انواع روش های کسب سود در بورس",
			desc: "آشنایی با انواع روش های کسب سود در بورس",
		},
		{
			imgURL: "/images/homepage/carousel/Intersection 2.png",
			title: "آشنایی با آلفا و بتای صندوق های سرمایه گذاری",
			desc: "آشنایی با آلفا و بتای صندوق های سرمایه گذاری",
		},
		{
			imgURL: "/images/homepage/carousel/Intersection 3.png",
			title: "سئوالات متدوال احراز هویت سجام",
			desc: "سئوالات متدوال احراز هویت سجام",
		},
		{
			imgURL: "/images/homepage/carousel/Intersection 4.png",
			title: "تحلیل تکنیکال نماد دماوند",
			desc: "تحلیل تکنیکال نماد دماوند",
		},
	];

	return (
		<>
			<Swiper spaceBetween={20} slidesPerView={props.slidesPerView} navigation>
				{items.map(({imgURL, title, desc}) =>
					<SwiperSlide key={`id+${title}`}>
						<Frame imgURL={imgURL} title={title} desc={desc} />
					</SwiperSlide>
				)}
			</Swiper>
		</>
	);
};

export default Carosel;
