import React from 'react';
import TwitterIcon from '../../icons/twitter.svg';
import InstagramIcon from '../../icons/instagram.svg';
import LinkedinIcon from '../../icons/linkedin.svg';
import WhatsappIcon from '../../icons/whatsapp.svg';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from "./theme";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiIconButton-root':{
            margin: theme.spacing(0, 2)
        }
    },
    joinUs:{
        margin: theme.spacing(4, 6),
        display: 'flex',
        '& p':{
            color: customTheme.palette.primary.main,
            fontSize: 30
        }
    },
    socialMedias:{
        margin: theme.spacing(0, 6),
    },
    menu:{
        display: 'flex',
        padding: theme.spacing(6, 8),
        background: customTheme.palette.background.primary,
        '& #col1':{
            flexGrow: '2',
            color: customTheme.palette.text.transparent
        },
        '& #col2':{
            flexGrow: '1',
            color: customTheme.palette.text.transparent
        },
        '& #col3':{
            flexGrow: '1',
            color: customTheme.palette.text.transparent
        },
    }
}));


function Footer() {
    const classes = useStyles({});


    return (
        <div className={classes.root}>
            <div className={classes.joinUs}>
                <p>به ما به پیوندید…</p>
                <div className={classes.socialMedias}>
                    <IconButton>
                        <LinkedinIcon/>
                    </IconButton>
                    <IconButton>
                        <InstagramIcon/>
                    </IconButton>
                    <IconButton>
                        <TwitterIcon/>
                    </IconButton>
                    <IconButton>
                        <WhatsappIcon/>
                    </IconButton>
                </div>
            </div>
            <div className={classes.menu}>
                <div id={'col1'}>
                    <h4>تماس با ما</h4>
                    <p>
                        آدرس: بلوار آفریقا، بالاتر از چهارراه جهان کودک،
                        نبش دیدار شمالی
                    </p>
                    <p>
                        کدپستی : ۴۳۳۱۱-۱۵۱۸۹
                    </p>
                    <p>
                        شماره : ۸۱۹۰۲-۰۲۱
                    </p>
                    <p>
                        ایمیل: support@bambo.app
                    </p>
                </div>
                <div id={'col2'}>
                    <h4>پس انداز</h4>
                    <h4>سرمایه گذاری</h4>
                    <p>سبد های بهینه</p>
                    <p>سهام عدالت</p>
                    <p>لیست سهام ها</p>
                </div>
                <div id={'col3'}>
                    <h4>آموزش</h4>
                    <h4>تیم بلوط</h4>
                    <p>فرصت شغلی</p>
                    <h4>سئوالات متداول</h4>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}
export default Footer