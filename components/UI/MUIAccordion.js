import React from "react";
import {
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const items = [
	{
		title: "بهترین روش سرمایه گذاری در بورس چیست؟",
		desc:
			"اگر قصد افزایش و یا حفظ سرمایه تان را داشته باشید و بخواهیدجایی سرمایه گذاری کنید، اولین گزینه پیشنهادی همه یا خرید طلا وسکه و ارز است یا زمین و خانه و خودرو! احتمالا خیلی کم پیشبیاید که یکی از اطرافیان‌مان با روش سرمایه گذاری در بورس آشناباشد و آن را پیشنهاد کند.",
		isExpanded: true,
	},
	{
		title: "کارگزاری بورس چیست و چگونه بهترین کارگزاری را انتخاب کنیم؟",
		desc:
			"اگر قصد افزایش و یا حفظ سرمایه تان را داشته باشید و بخواهید جایی سرمایه گذاری کنید، اولین گزینه پیشنهادی همه یا خرید طلا وسکه و ارز است یا زمین و خانه و خودرو! احتمالا خیلی کم پیش بیاید که یکی از اطرافیان‌مان با روش سرمایه گذاری در بورس آشناباشد و آن را پیشنهاد کند.",
		isExpanded: false,
	},
	{
		title: "بازده بورس چیست و چگونه محاسبه می شود؟",
		desc:
			"اگر قصد افزایش و یا حفظ سرمایه تان را داشته باشید و بخواهیدجایی سرمایه گذاری کنید، اولین گزینه پیشنهادی همه یا خرید طلا وسکه و ارز است یا زمین و خانه و خودرو! احتمالا خیلی کم پیشبیاید که یکی از اطرافیان‌مان با روش سرمایه گذاری در بورس آشناباشد و آن را پیشنهاد کند.",
		isExpanded: false,
	},
	{
		title: "صف خرید و فروش سهام در بازار بورس چیست؟",
		desc:
			"اگر قصد افزایش و یا حفظ سرمایه تان را داشته باشید و بخواهیدجایی سرمایه گذاری کنید، اولین گزینه پیشنهادی همه یا خرید طلا وسکه و ارز است یا زمین و خانه و خودرو! احتمالا خیلی کم پیشبیاید که یکی از اطرافیان‌مان با روش سرمایه گذاری در بورس آشناباشد و آن را پیشنهاد کند.",
		isExpanded: false,
	},
];

const MUIAccordion = () => {
	return items.map(({title, desc, isExpanded}) =>
		<Accordion key={title} defaultExpanded={isExpanded}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon color="primary" style={{fontSize: 40}} />}>
				<Typography variant="h5">
					{title}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>
					{desc}
				</Typography>
			</AccordionDetails>
		</Accordion>
	);
};

export default MUIAccordion;
