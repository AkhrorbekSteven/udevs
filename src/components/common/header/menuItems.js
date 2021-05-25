import downArrow from "./../../images/down-arrow.svg";
import mobileIcon from "./../../images/mobile-icon.svg";
import erpIcon from "./../../images/erp-icon.svg";
import uxIcon from "./../../images/ux-icon.svg";
import consultingIcon from "./../../images/consulting-icon.svg";
import optimizeIcon from "./../../images/optimize-icon.svg";
import developer from "./../../images/developer.svg";
import sms from "./../../images/sms.svg";
import goodzone from "./../../images/goodzone.svg";
import iman from "./../../images/iman.svg";

export const menuItems = [
    {
        title: 'Направления',
        url: '/services-section',
        isActive: true,
        downarrow: null,
        subtitle: null,
        subnavclass: null,
        subnav: []          
    },
    {
        title: 'Команда',
        url: '/',
        isActive: false,
        downarrow: null,
        subtitle: null,
        subnavclass: null,
        subnav: []  
    },
    {
        title: 'Услуги',
        url: '/',
        isActive: false,
        downarrow: downArrow,
        subtitle: 'Услуги',
        subnavclass: 'dropdown-menu',
        subnav: [
            {
                imgTitle: mobileIcon,
                text: 'Разработка мобильных приложений'
            },
            {
                imgTitle: erpIcon,
                text: 'Разработка и внедрение ERP систем'
            },
            {
                imgTitle: uxIcon,
                text: 'UI / UX дизайн'
            },
            {
                imgTitle: consultingIcon,
                text: 'IT консалтинг'
            },
            {
                imgTitle: optimizeIcon,
                text: 'Оптимизация инфраструктуры'
            }
        ]
    },
    {
        title: 'Инструменты',
        url: '/',
        isActive: false,
        downarrow: null,
        subtitle: null,
        subnavclass: null,
        subnav: []  
    },
    {
        title: 'Клиенты',
        url: '/',
        isActive: false,
        downarrow: null,
        subtitle: null,
        subnavclass: null,
        subnav: []  
    },
    {
        title: 'Портфолио',
        url: '/',
        isActive: false,
        downarrow: downArrow,
        subtitle: "Портфолио",
        subnavclass: 'dropdown-menu',
        subnav: [
            {
                imgTitle: developer,
                text: "Developer"
            },
            {
                imgTitle: sms,
                text: "Sms.uz"
            },
            {
                imgTitle: goodzone,
                text: "Goodzone"
            },
            {
                imgTitle: iman,
                text: "Iman"
            }
        ]  
    }
]