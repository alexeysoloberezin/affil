enum url {
    DoZarplaty = "do-zarplaty",
    Webbankir = "webbankir",
    MaxCredit = "max-сredit",
    Bystrodengi = "bystrodengi",
    VebZajm = "veb-zajm",
    Joymoney = "joymoney",
    MirDeneg = "mir-deneg",
    RaketaDengi = "raketa-dengi",
    MoneyMan = "money-man",
    Vivus = "vivus",
    Turbozajm = "turbozajm",
    DengiSrazu = "dengi-srazu",
    MigCredit = "migkredit",
    Creditter = "creditter",
    Denga = "denga",
    KnopkaDengi = "knopka-dengi",
    OneClickMoney = "oneclickmoney",
    Finterra = "finterra",
}

const affilProgram = [
    {
        name: "До Зарплаты",
        type: "mfoOffer",
        meta: {
            title: "Партнерская программа До Зарплаты  - подключиться",
            description: "Станьте агентом партнерской программы До Зарплаты и получайте коммиссионное вознаграждение привлекая новых клиентов, регистрируйтесь на платформе Пампаду и зарабатывайте"
        },
        url: "ProgramUrl.DoZarplaty",
        blocks: {
            intro: {
                img: "require('images/affiliate-program/mfo/DoZarplaty_1.webp')",
                title: "Партнерские программы До Зарплаты",
                description: "Присоединяйтесь к партнерским программам МФО и получайте комиссионное вознаграждение за выданные микрозаймы"
            },
            aboutProgram: {
                logoOnImg: "require('images/affiliate-program/mfo/DoZarplaty_1.webp')",
                image: "",
                title: "ProgramUrl.DoZarplaty",
                description: [
                    "Реклама офферов МФО разрешена через контентные сайты (seo трафик), контекст (яндексдирект, google adwords), баннеры (adspot/richmedia/sliding), тизерные сети, таргетированная реклама в соц. сетях (vk, mt, tiktok), видео контент (youtube, rutube, vimeo).В то же время категорически недопустим спам в любых проявлениях: контекст на бренд, таргетированная реклама в соц. сетях (fb, instagram), посты в группах/каналах (vk, tg, whatsapp), брокерский трафик, колл-центр, api трафик, дорвеи, cashback/промокоды, rtb (real-time bidding), clickunder/popunder/popup, мотивированный трафик, toolbar, adult трафик"
                ]
            },
            offers: {
                title: "Офферы МФО До Зарплаты для зарегистрированных партнеров Пампаду",
                description: "Зарегистрируйтесь и получите доступ к финансовым офферам надежных МФО с выплатами до 4640 за целевое действие",
                cards: [
                    {
                        title: "До Зарплаты - микрозайм",
                        type: "OfferType.Basic",
                        commission: 4640,
                        icon: "require('images/affiliate-program/mfo/DoZarplaty_1.webp')",
                        basicLink: "https://agents.pampadu.ru/#/register/"
                    }
                ]
            },
            partner: {
                subtitle: "Кому подойдут партнерские программы?"
            }
        }
    },
    {
        name: "Webbankir",
        type: "mfoOffer",
        meta: {
            title: "Партнерская программа Webbankir  - подключиться",
            description: "Станьте агентом партнерской программы Webbankir и получайте коммиссионное вознаграждение привлекая новых клиентов, регистрируйтесь на платформе Пампаду и зарабатывайте"
        },
        url: "ProgramUrl.Webbankir",
        blocks: {
            intro: {
                img: "require('images/affiliate-program/mfo/Webbankir_1.webp')",
                title: "Партнерские программы Webbankir",
                description: "Присоединяйтесь к партнерским программам МФО и получайте комиссионное вознаграждение за выданные микрозаймы"
            },
            aboutProgram: {
                logoOnImg: "require('images/affiliate-program/mfo/Webbankir_1.webp')",
                image: "",
                title: "ProgramUrl.Webbankir",
                description: [
                    "Реклама офферов МФО разрешена через контентные сайты (seo трафик), контекст (яндексдирект, google adwords), баннеры (adspot/richmedia/sliding), тизерные сети, таргетированная реклама в соц. сетях (vk, mt, tiktok), посты в группах/каналах (tg, whatsapp), мобильные приложения (ios, android), видео контент (youtube, rutube, vimeo), брокерский трафик, email – рассылки, sms – рассылки, рассылки в мессенджерах (tg, whatsapp, viber), чат-боты (tg, whatsapp, vk).В то же время категорически недопустим спам в любых проявлениях: контекст на бренд, таргетированная реклама в соц. сетях (fb, instagram), посты в группах/каналах (vk), колл-центр, api трафик, дорвеи, cashback/промокоды, push - уведомления, clickunder/popunder/popup, мотивированный трафик, toolbar, adult трафик."
                ]
            },
            offers: {
                title: "Офферы МФО Webbankir для зарегистрированных партнеров Пампаду",
                description: "Зарегистрируйтесь и получите доступ к финансовым офферам надежных МФО с выплатами до 4000 за целевое действие",
                cards: [
                    {
                        title: "Webbankir - Выдача",
                        type: "OfferType.Basic",
                        commission: 4000,
                        icon: "require('images/affiliate-program/mfo/Webbankir_1.webp')",
                        basicLink: "https://agents.pampadu.ru/#/register/"
                    }
                ]
            },
            partner: {
                subtitle: "Кому подойдут партнерские программы?"
            }
        }
    },
    {
        name: "Max.Credit",
        type: "mfoOffer",
        meta: {
            title: "Партнерская программа Max.Credit  - подключиться",
            description: "Станьте агентом партнерской программы Max.Credit и получайте коммиссионное вознаграждение привлекая новых клиентов, регистрируйтесь на платформе Пампаду и зарабатывайте"
        },
        url: "ProgramUrl.MaxCredit",
        blocks: {
            intro: {
                img: "require('images/affiliate-program/mfo/MaxCredit_1.webp')",
                title: "Партнерские программы Max.Credit",
                description: "Присоединяйтесь к партнерским программам МФО и получайте комиссионное вознаграждение за выданные микрозаймы"
            },
            aboutProgram: {
                logoOnImg: "require('images/affiliate-program/mfo/MaxCredit_1.webp')",
                image: "",
                title: "ProgramUrl.MaxCredit",
                description: [
                    "Реклама офферов МФО разрешена через seo трафик, контекстная реклама (yandexdirect, google adwords, begun), таргетированная реклама, e-mail рассылка, sms рассылка, push – реклама, баннерная реклама, гиперконтекстная, реклама, приложения и игры, видеореклама.В то же время категорически недопустим спам в любых проявлениях: adult трафик, публичные страницы/группы, сообщества в соц.сетях, popup реклама, тизерная сеть, приложения/игры в социальных сетях, дорвейный трафик, мотивированный (стимулирующий) трафик, e-mail спам, sms спам, adult / порно-трафик, clickunder, toolbar – реклама, реклама на бренд, корегистрация, контекстная реклама на бренд, popunder, партизанский маркетинг, телемаркетинг, richmedia."
                ]
            },
            offers: {
                title: "Офферы МФО Max.Credit для зарегистрированных партнеров Пампаду",
                description: "Зарегистрируйтесь и получите доступ к финансовым офферам надежных МФО с выплатами до 3900 за целевое действие",
                cards: [
                    {
                        title: "Max.Credit - микрозаймы",
                        type: "OfferType.Basic",
                        commission: 3900,
                        icon: "require('images/affiliate-program/mfo/MaxCredit_1.webp')",
                        basicLink: "https://agents.pampadu.ru/#/register/"
                    }
                ]
            },
            partner: {
                subtitle: "Кому подойдут партнерские программы?"
            }
        }
    },
    {
        name: "Быстроденьги",
        type: "mfoOffer",
        meta: {
            title: "Партнерская программа Быстроденьги  - подключиться",
            description: "Станьте агентом партнерской программы Carmoney и получайте коммиссионное вознаграждение привлекая новых клиентов, регистрируйтесь на платформе Пампаду и зарабатывайте"
        },
        url: "ProgramUrl.Bystrodengi",
        blocks: {
            intro: {
                img: "require('images/affiliate-program/mfo/Bystrodengi_1.webp')",
                title: "Партнерские программы Быстроденьги",
                description: "Присоединяйтесь к партнерским программам МФО и получайте комиссионное вознаграждение за выданные микрозаймы"
            },
            aboutProgram: {
                logoOnImg: "require('images/affiliate-program/mfo/Bystrodengi_1.webp')",
                image: "",
                title: "ProgramUrl.Bystrodengi",
                description: [
                    "Реклама офферов МФО разрешена через контекстную рекламу, SEO-трафик, реклама в социальной сетях, в приложениях и игр в соц.сетях, баннерная реклама, видеореклама, RichMedia.В то же время категорически недопустим спам в любых проявлениях: контекст на бренд, куки-стаффинг, ретаргетинг/ремаркетинг, дорвеи, тулбар."
                ]
            },
            offers: {
                title: "Офферы МФО Быстроденьги для зарегистрированных партнеров Пампаду",
                description: "Зарегистрируйтесь и получите доступ к финансовым офферам надежных МФО с выплатами до 4530 за целевое действие",
                cards: [
                    {
                        title: "Быстроденьги - on-line",
                        type: "OfferType.Basic",
                        commission: 4530,
                        icon: "require('images/affiliate-program/mfo/Bystrodengi_1.webp')",
                        basicLink: "https://agents.pampadu.ru/#/register/"
                    },
                    {
                        title: "Быстроденьги - Заём под залог ПТС",
                        type: "OfferType.Basic",
                        commission: 8453,
                        icon: "require('images/affiliate-program/mfo/Bystrodengi_2.webp')",
                        basicLink: "https://agents.pampadu.ru/#/register/"
                    }
                ]
            },
            partner: {
                subtitle: "Кому подойдут партнерские программы?"
            }
        }
    },
    {
        name: "Веб-займ",
        type: "mfoOffer",
        meta: {
            title: "Партнерская программа Веб-займ  - подключиться",
            description: "Станьте агентом партнерской программы Веб-займ и получайте коммиссионное вознаграждение привлекая новых клиентов, регистрируйтесь на платформе Пампаду и зарабатывайте"
        },
        url: "ProgramUrl.VebZajm",
        blocks: {
            intro: {
                img: "require('images/affiliate-program/mfo/VebZajm_1.webp')",
                title: "Партнерские программы Веб-займ",
                description: "Присоединяйтесь к партнерским программам МФО и получайте комиссионное вознаграждение за выданные микрозаймы"
            },
            aboutProgram: {
                logoOnImg: "require('images/affiliate-program/mfo/VebZajm_1.webp')",
                image: "",
                title: "ProgramUrl.VebZajm",
                description: [
                    "Реклама офферов МФО разрешена через контекстную рекламу, SEO-трафик, реклама в социальной сетях, SMS – рассылки, email – рассылки, посты в группах/каналах (VK, TG, WhatsApp), nаргетированная реклама в соц. сетях (VK, MT, TikTok, баннеры (AdSpot/RichMedia/Sliding), В то же время категорически недопустим спам в любых проявлениях: API трафик, дорвеи, cashback/промокоды, рассылки в мессенджерах (Tg, WhatsApp, Viber), чат-боты (TG, WhatsApp, VK), push - уведомления, RTB (Real-Time Bidding), ClickUnder/PopUnder/PopUp, мотивированный трафик, toolbar, adult трафик."
                ]
            },
            offers: {
                title: "Офферы МФО Веб-займ для зарегистрированных партнеров Пампаду",
                description: "Зарегистрируйтесь и получите доступ к финансовым офферам надежных МФО с выплатами до 5680 за целевое действие",
                cards: [
                    {
                        title: "Веб-займ - Выдача",
                        type: "OfferType.Basic",
                        commission: 5680,
                        icon: "require('images/affiliate-program/mfo/VebZajm_1.webp')",
                        basicLink: "https://agents.pampadu.ru/#/register/"
                    }
                ]
            },
            partner: {
                subtitle: "Кому подойдут партнерские программы?"
            }
        }
    },
    {
        name: "Joymoney",
        type: "mfoOffer",
        meta: {
            title: "Партнерская программа Joymoney  - подключиться",
            description: "Станьте агентом партнерской программы Joymoney и получайте коммиссионное вознаграждение привлекая новых клиентов, регистрируйтесь на платформе Пампаду и зарабатывайте"
        },
        url: "ProgramUrl.Joymoney",
        blocks: {
            intro: {
                img: "require('images/affiliate-program/mfo/Joymoney_1.webp')",
                title: "Партнерские программы Joymoney",
                description: "Присоединяйтесь к партнерским программам МФО и получайте комиссионное вознаграждение за выданные микрозаймы"
            },
            aboutProgram: {
                logoOnImg: "require('images/affiliate-program/mfo/Joymoney_1.webp')",
                image: "",
                title: "ProgramUrl.Joymoney",
                description: [
                    "Реклама офферов МФО разрешена через контентные сайты (seo трафик), контекст (яндексдирект, google adwords), баннеры (adspot/richmedia/sliding), тизерные сети, таргетированная реклама в соц. сетях (vk, mt, tiktok), посты в группах/каналах (vk), посты в группах/каналах (tg, whatsapp), мобильные приложения (ios, android), видео контент (youtube, rutube, vimeo).В то же время категорически недопустим спам в любых проявлениях: контекст на бренд, таргетированная реклама в соц. сетях (fb, instagram), api трафик, дорвеи, clickunder/popunder/popup, мотивированный трафик, toolbar, adult трафик."
                ]
            },
            offers: {
                title: "Офферы МФО Joymoney для зарегистрированных партнеров Пампаду",
                description: "Зарегистрируйтесь и получите доступ к финансовым офферам надежных МФО с выплатами до 3200 за целевое действие",
                cards: [
                    {
                        title: "Joymoney",
                        type: "OfferType.Basic",
                        commission: 3200,
                        icon: "require('images/affiliate-program/mfo/Joymoney_1.webp')",
                        basicLink: "https://agents.pampadu.ru/#/register/"
                    }
                ]
            },
            partner: {
                subtitle: "Кому подойдут партнерские программы?"
            }
        }
    },
    {
        name: "МИР Денег",
        type: "mfoOffer",
        meta: {
            title: "Партнерская программа МИР Денег  - подключиться",
            description: "Станьте агентом партнерской программы МИР Денег и получайте коммиссионное вознаграждение привлекая новых клиентов, регистрируйтесь на платформе Пампаду и зарабатывайте"
        },
        url: "ProgramUrl.MirDeneg",
        blocks: {
            intro: {
                img: "require('images/affiliate-program/mfo/MirDeneg_1.webp')",
                title: "Партнерские программы МИР Денег",
                description: "Присоединяйтесь к партнерским программам МФО и получайте комиссионное вознаграждение за выданные микрозаймы"
            },
            aboutProgram: {
                logoOnImg: "require('images/affiliate-program/mfo/MirDeneg_1.webp')",
                image: "",
                title: "ProgramUrl.MirDeneg",
                description: [
                    "Реклама офферов МФО разрешена через cashback (кэшбэк), seo трафик, публичные страницы/группы/сообщества в соц.сетях, контекстная реклама (yandexdirect, google adwords, begun), таргетированная реклама, тизерная сеть, приложения/игры в социальных сетях, e-mail рассылка, sms рассылка, брокерский трафик.В то же время категорически недопустим спам в любых проявлениях: popup реклама, дорвейный трафик, мотивированный (стимулирующий) трафик, e-mail спам, sms спам, adult / порно-трафик, clickunder, toolbar – реклама, реклама на бренд, корегистрация, контекстная реклама на бренд."
                ]
            },
            offers: {
                title: "Офферы МФО МИР Денег для зарегистрированных партнеров Пампаду",
                description: "Зарегистрируйтесь и получите доступ к финансовым офферам надежных МФО с выплатами до 3160 за целевое действие",
                cards: [
                    {
                        title: "МИР Денег - Заём",
                        type: "OfferType.Basic",
                        commission: 3160,
                        icon: "require('images/affiliate-program/mfo/MirDeneg_1.webp')",
                        basicLink: "https://agents.pampadu.ru/#/register/"
                    }
                ]
            },
            partner: {
                subtitle: "Кому подойдут партнерские программы?"
            }
        }
    },
    {
        name: "Ракета Деньги",
        type: "mfoOffer",
        meta: {
            title: "Партнерская программа Ракета Деньги  - подключиться",
            description: "Станьте агентом партнерской программы Ракета Деньги и получайте коммиссионное вознаграждение привлекая новых клиентов, регистрируйтесь на платформе Пампаду и зарабатывайте"
        },
        url: "ProgramUrl.RaketaDengi",
        blocks: {
            intro: {
                img: "require('images/affiliate-program/mfo/RaketaDengi_1.webp')",
                title: "Партнерские программы Ракета Деньги",
                description: "Присоединяйтесь к партнерским программам МФО и получайте комиссионное вознаграждение за выданные микрозаймы"
            },
            aboutProgram: {
                logoOnImg: "require('images/affiliate-program/mfo/RaketaDengi_1.webp')",
                image: "",
                title: "ProgramUrl.RaketaDengi",
                description: [
                    "Реклама офферов МФО разрешена через контентные сайты (seo трафик), контекст (яндексдирект, google adwords), баннеры (adspot/richmedia/sliding), тизерные сети, таргетированная реклама в соц. сетях (vk, mt, tiktok), посты в группах/каналах (vk, tg, whatsapp), мобильные приложения (ios, android), видео контент (youtube, rutube, vimeo). В то же время категорически недопустим спам в любых проявлениях: контекст на бренд, таргетированная реклама в соц. сетях (fb, instagram), api трафик, дорвеи, cashback/промокоды, clickunder/popunder/popup, мотивированный трафик, toolbar, adult трафик."
                ]
            },
            offers: {
                title: "Офферы МФО Ракета Деньги для зарегистрированных партнеров Пампаду",
                description: "Зарегистрируйтесь и получите доступ к финансовым офферам надежных МФО с выплатами до 2640 за целевое действие",
                cards: [
                    {
                        title: "Ракета Деньги - Займ онлайн",
                        type: "OfferType.Basic",
                        commission: 2640,
                        icon: "require('images/affiliate-program/mfo/RaketaDengi_1.webp')",
                        basicLink: "https://agents.pampadu.ru/#/register/"
                    }
                ]
            },
            partner: {
                subtitle: "Кому подойдут партнерские программы?"
            }
        }
    },
    {
        name: "MoneyMan",
        type: "mfoOffer",
        meta: {
            title: "Партнерская программа MoneyMan  - подключиться",
            description: "Станьте агентом партнерской программы MoneyMan и получайте коммиссионное вознаграждение привлекая новых клиентов, регистрируйтесь на платформе Пампаду и зарабатывайте"
        },
        url: "ProgramUrl.MoneyMan",
        blocks: {
            intro: {
                img: "require('images/affiliate-program/mfo/MoneyMan_1.webp')",
                title: "Партнерские программы MoneyMan",
                description: "Присоединяйтесь к партнерским программам МФО и получайте комиссионное вознаграждение за выданные микрозаймы"
            },
            aboutProgram: {
                logoOnImg: "require('images/affiliate-program/mfo/MoneyMan_1.webp')",
                image: "",
                title: "ProgramUrl.MoneyMan",
                description: [
                    "Реклама офферов МФО разрешена через push - уведомления, rtb (real-time bidding), sms – рассылки, баннеры (adspot/richmedia/sliding), брокерский трафик, видео контент (youtube, rutube, vimeo), колл-центр, контекст (яндексдирект, google adwords), контентные сайты (seo трафик),мобильные приложения (ios, android).В то же время категорически недопустим спам в любых проявлениях: api трафик, adult трафик, cashback/промокоды, clickunder/popunder/popup, toolbar, дорвеи, контекст на бренд, мотивированный трафик, таргетированная реклама в соц. сетях (fb, instagram)."
                ]
            },
            offers: {
                title: "Офферы МФО MoneyMan для зарегистрированных партнеров Пампаду",
                description: "Зарегистрируйтесь и получите доступ к финансовым офферам надежных МФО с выплатами до 2290 за целевое действие",
                cards: [
                    {
                        title: "MoneyMan - Заем под 0%",
                        type: "OfferType.Basic",
                        commission: 2290,
                        icon: "require('images/affiliate-program/mfo/MoneyMan_1.webp')",
                        basicLink: "https://agents.pampadu.ru/#/register/"
                    }
                ]
            },
            partner: {
                subtitle: "Кому подойдут партнерские программы?"
            }
        }
    },
    {
        name: "Vivus",
        type: "mfoOffer",
        meta: {
            title: "Партнерская программа Vivus  - подключиться",
            description: "Станьте агентом партнерской программы Vivus и получайте коммиссионное вознаграждение привлекая новых клиентов, регистрируйтесь на платформе Пампаду и зарабатывайте"
        },
        url: "ProgramUrl.Vivus",
        blocks: {
            intro: {
                img: "require('images/affiliate-program/mfo/Vivus_1.webp')",
                title: "Партнерские программы Vivus",
                description: "Присоединяйтесь к партнерским программам МФО и получайте комиссионное вознаграждение за выданные микрозаймы"
            },
            aboutProgram: {
                logoOnImg: "require('images/affiliate-program/mfo/Vivus_1.webp')",
                image: "",
                title: "ProgramUrl.Vivus",
                description: [
                    "Реклама офферов МФО разрешена через контентные сайты (seo трафик), контекст (яндексдирект, google adwords), баннеры (adspot/richmedia/sliding), таргетированная реклама в соц. сетях (vk, mt, tiktok), посты в группах/каналах (vk, tg, whatsapp), мобильные приложения (ios, android), видео контент (youtube, rutube, vimeo), колл-центр, рассылки в мессенджерах (tg, whatsapp, viber), чат-боты (tg, whatsapp, vk), push - уведомления, rtb (real-time bidding).В то же время категорически недопустим спам в любых проявлениях: контекст на бренд, тизерные сети, таргетированная реклама в соц. сетях (fb, instagram), брокерский трафик, api трафик, дорвеи, cashback/промокоды, email – рассылки, sms – рассылки, clickunder/popunder/popup, мотивированный трафик, toolbar, adult трафик."
                ]
            },
            offers: {
                title: "Офферы МФО Vivus для зарегистрированных партнеров Пампаду",
                description: "Зарегистрируйтесь и получите доступ к финансовым офферам надежных МФО с выплатами до 2560 за целевое действие",
                cards: [
                    {
                        title: "Vivus - Выдача",
                        type: "OfferType.Basic",
                        commission: 2560,
                        icon: "require('images/affiliate-program/mfo/Vivus_1.webp')",
                        basicLink: "https://agents.pampadu.ru/#/register/"
                    }
                ]
            },
            partner: {
                subtitle: "Кому подойдут партнерские программы?"
            }
        }
    },
    {
        name: "Турбозайм",
        type: "mfoOffer",
        meta: {
            title: "Партнерская программа Турбозайм  - подключиться",
            description: "Станьте агентом партнерской программы Турбозайм и получайте коммиссионное вознаграждение привлекая новых клиентов, регистрируйтесь на платформе Пампаду и зарабатывайте"
        },
        url: "ProgramUrl.Turbozajm",
        blocks: {
            intro: {
                img: "require('images/affiliate-program/mfo/Turbozajm_1.webp')",
                title: "Партнерские программы Турбозайм",
                description: "Присоединяйтесь к партнерским программам МФО и получайте комиссионное вознаграждение за выданные микрозаймы"
            },
            aboutProgram: {
                logoOnImg: "require('images/affiliate-program/mfo/Turbozajm_1.webp')",
                image: "",
                title: "ProgramUrl.Turbozajm",
                description: [
                    "Реклама офферов МФО разрешена через adult трафик, in-app ( баннер в приложении), adspot/richmedia/sliding, e-mail рассылка (спам запрещен), sms-рассылки (спам запрещен), video traffic, баннерная реклама, группы в соц сетях, другие партнерские сети, контентные сайты.В то же время категорически недопустим спам в любых проявлениях: adult - трафик, cashback-трафик, clickunder/popunder, clickunder/popunder через прелендинг, doorway-трафик, popup-формат, toolbar, авто-редирект, блокировка контента, браузерные расширения и приложения, брокерский трафик, использование промокодов, контекстная реклама на бренд."
                ]
            },
            offers: {
                title: "Офферы МФО Турбозайм для зарегистрированных партнеров Пампаду",
                description: "Зарегистрируйтесь и получите доступ к финансовым офферам надежных МФО с выплатами до 2130 за целевое действие",
                cards: [
                    {
                        title: "Турбозайм - Выдача заема ",
                        type: "OfferType.Basic",
                        commission: 2130,
                        icon: "require('images/affiliate-program/mfo/Turbozajm_1.webp')",
                        basicLink: "https://agents.pampadu.ru/#/register/"
                    }
                ]
            },
            partner: {
                subtitle: "Кому подойдут партнерские программы?"
            }
        }
    },
    {
        name: "ДеньгиСразу",
        type: "mfoOffer",
        meta: {
            title: "Партнерская программа ДеньгиСразу  - подключиться",
            description: "Станьте агентом партнерской программы ДеньгиСразу и получайте коммиссионное вознаграждение привлекая новых клиентов, регистрируйтесь на платформе Пампаду и зарабатывайте"
        },
        url: "ProgramUrl.DengiSrazu",
        blocks: {
            intro: {
                img: "require('images/affiliate-program/mfo/DengiSrazu_1.webp')",
                title: "Партнерские программы ДеньгиСразу",
                description: "Присоединяйтесь к партнерским программам МФО и получайте комиссионное вознаграждение за выданные микрозаймы"
            },
            aboutProgram: {
                logoOnImg: "require('images/affiliate-program/mfo/DengiSrazu_1.webp')",
                image: "",
                title: "ProgramUrl.DengiSrazu",
                description: [
                    "Реклама офферов МФО разрешена через контентные сайты (seo трафик), контекст (яндексдирект, google adwords), баннеры (adspot/richmedia/sliding), тизерные сети, таргетированная реклама в соц. сетях (vk, mt, tiktok), посты в группах/каналах (vk, tg, whatsapp), мобильные приложения (ios, android). В то же время категорически недопустим спам в любых проявлениях: контекст на бренд, таргетированная реклама в соц. сетях (fb, instagram), брокерский трафик, колл-центр, api трафик, дорвеи, cashback/промокоды, чат-боты (tg, whatsapp, vk), rtb (real-time bidding), мотивированный трафик, toolbar, adult трафик."
                ]
            },
            offers: {
                title: "Офферы МФО ДеньгиСразу для зарегистрированных партнеров Пампаду",
                description: "Зарегистрируйтесь и получите доступ к финансовым офферам надежных МФО с выплатами до 280 за целевое действие",
                cards: [
                    {
                        title: "ДеньгиСразу - Новая заявка (преаппрув)",
                        type: "OfferType.Basic",
                        commission: 280,
                        icon: "require('images/affiliate-program/mfo/DengiSrazu_1.webp')",
                        basicLink: "https://agents.pampadu.ru/#/register/"
                    },
                    {
                        title: "ДеньгиСразу - Новая заявка ",
                        type: "OfferType.Basic",
                        commission: 540,
                        icon: "require('images/affiliate-program/mfo/DengiSrazu_2.webp')",
                        basicLink: "https://agents.pampadu.ru/#/register/"
                    },
                    {
                        title: "ДеньгиСразу - Выдача",
                        type: "OfferType.Basic",
                        commission: 2860,
                        icon: "require('images/affiliate-program/mfo/DengiSrazu_3.webp')",
                        basicLink: "https://agents.pampadu.ru/#/register/"
                    }
                ]
            },
            partner: {
                subtitle: "Кому подойдут партнерские программы?"
            }
        }
    },
    {
        name: "МигКредит",
        type: "mfoOffer",
        meta: {
            title: "Партнерская программа МигКредит  - подключиться",
            description: "Станьте агентом партнерской программы МигКредит и получайте коммиссионное вознаграждение привлекая новых клиентов, регистрируйтесь на платформе Пампаду и зарабатывайте"
        },
        url: "ProgramUrl.MigCredit",
        blocks: {
            intro: {
                img: "require('images/affiliate-program/mfo/MigCredit_1.webp')",
                title: "Партнерские программы МигКредит",
                description: "Присоединяйтесь к партнерским программам МФО и получайте комиссионное вознаграждение за выданные микрозаймы"
            },
            aboutProgram: {
                logoOnImg: "require('images/affiliate-program/mfo/MigCredit_1.webp')",
                image: "",
                title: "ProgramUrl.MigCredit",
                description: [
                    "Реклама офферов МФО разрешена через e-mail рассылка, sms рассылка, push – реклама, баннерная реклама, гиперконтекстная реклама, приложения и игры, видеореклама.В то же время категорически недопустим спам в любых проявлениях: popup реклама, дорвейный трафик, мотивированный (стимулирующий) трафик, e-mail спам, sms спам, clickunder, toolbar – реклама, реклама на бренд, корегистрация."
                ]
            },
            offers: {
                title: "Офферы МФО МигКредит для зарегистрированных партнеров Пампаду",
                description: "Зарегистрируйтесь и получите доступ к финансовым офферам надежных МФО с выплатами до 2280 за целевое действие",
                cards: [
                    {
                        title: "МигКредит - заём",
                        type: "OfferType.Basic",
                        commission: 2280,
                        icon: "require('images/affiliate-program/mfo/MigCredit_1.webp')",
                        basicLink: "https://agents.pampadu.ru/#/register/"
                    }
                ]
            },
            partner: {
                subtitle: "Кому подойдут партнерские программы?"
            }
        }
    },
    {
        name: "Creditter",
        type: "mfoOffer",
        meta: {
            title: "Партнерская программа Creditter  - подключиться",
            description: "Станьте агентом партнерской программы Creditter и получайте коммиссионное вознаграждение привлекая новых клиентов, регистрируйтесь на платформе Пампаду и зарабатывайте"
        },
        url: "ProgramUrl.Creditter",
        blocks: {
            intro: {
                img: "require('images/affiliate-program/mfo/Creditter_1.webp')",
                title: "Партнерские программы Creditter",
                description: "Присоединяйтесь к партнерским программам МФО и получайте комиссионное вознаграждение за выданные микрозаймы"
            },
            aboutProgram: {
                logoOnImg: "require('images/affiliate-program/mfo/Creditter_1.webp')",
                image: "",
                title: "ProgramUrl.Creditter",
                description: [
                    "Реклама офферов МФО разрешена через контентные сайты (seo трафик), контекст (яндексдирект, google adwords), баннеры (adspot/richmedia/sliding), тизерные сети, посты в группах/каналах (vk).В то же время категорически недопустим спам в любых проявлениях: контекст на бренд, таргетированная реклама в соц. сетях (fb, instagram), api трафик, дорвеи, cashback/промокоды, clickunder/popunder/popup, мотивированный трафик, toolbar, adult трафик."
                ]
            },
            offers: {
                title: "Офферы МФО Creditter для зарегистрированных партнеров Пампаду",
                description: "Зарегистрируйтесь и получите доступ к финансовым офферам надежных МФО с выплатами до 2400 за целевое действие",
                cards: [
                    {
                        title: "Creditter - Заем",
                        type: "OfferType.Basic",
                        commission: 2400,
                        icon: "require('images/affiliate-program/mfo/Creditter_1.webp')",
                        basicLink: "https://agents.pampadu.ru/#/register/"
                    }
                ]
            },
            partner: {
                subtitle: "Кому подойдут партнерские программы?"
            }
        }
    },
    {
        name: "Деньга",
        type: "mfoOffer",
        meta: {
            title: "Партнерская программа Деньга  - подключиться",
            description: "Станьте агентом партнерской программы Деньга и получайте коммиссионное вознаграждение привлекая новых клиентов, регистрируйтесь на платформе Пампаду и зарабатывайте"
        },
        url: "ProgramUrl.Denga",
        blocks: {
            intro: {
                img: "require('images/affiliate-program/mfo/Denga_1.webp')",
                title: "Партнерские программы Деньга",
                description: "Присоединяйтесь к партнерским программам МФО и получайте комиссионное вознаграждение за выданные микрозаймы"
            },
            aboutProgram: {
                logoOnImg: "require('images/affiliate-program/mfo/Denga_1.webp')",
                image: "",
                title: "ProgramUrl.Denga",
                description: [
                    "Реклама офферов МФО разрешена через seo трафик, контекстная реклама (yandexdirect, google adwords, begun), реклама в социальных сетях (vk, oдноклассники), popup реклама, тизерная сеть, e-mail рассылка, sms рассылка, брокерский трафик, баннерная реклама, cashback (кэшбэк), видеореклама.В то же время категорически недопустим спам в любых проявлениях: публичные страницы/группы/сообщества в социальных сетях, приложения/игры в социальных сетях, дорвейный трафик, мотивированный (стимулирующий) трафик, e-mail спам, sms спам, adult / порно-трафик, clickunder, push – реклама, toolbar – реклама, гиперконтекстная реклама, реклама на бренд."
                ]
            },
            offers: {
                title: "Офферы МФО Деньга для зарегистрированных партнеров Пампаду",
                description: "Зарегистрируйтесь и получите доступ к финансовым офферам надежных МФО с выплатами до 1200 за целевое действие",
                cards: [
                    {
                        title: "Деньга - Заём",
                        type: "OfferType.Basic",
                        commission: 1200,
                        icon: "require('images/affiliate-program/mfo/Denga_1.webp')",
                        basicLink: "https://agents.pampadu.ru/#/register/"
                    }
                ]
            },
            partner: {
                subtitle: "Кому подойдут партнерские программы?"
            }
        }
    },
    {
        name: "Финтерра",
        type: "mfoOffer",
        meta: {
            title: "Партнерская программа Финтерра  - подключиться",
            description: "Станьте агентом партнерской программы Финтерра и получайте коммиссионное вознаграждение привлекая новых клиентов, регистрируйтесь на платформе Пампаду и зарабатывайте"
        },
        url: "ProgramUrl.Finterra",
        blocks: {
            intro: {
                img: "require('images/affiliate-program/mfo/Finterra_1.webp')",
                title: "Партнерские программы Финтерра",
                description: "Присоединяйтесь к партнерским программам МФО и получайте комиссионное вознаграждение за выданные микрозаймы"
            },
            aboutProgram: {
                logoOnImg: "require('images/affiliate-program/mfo/Finterra_1.webp')",
                image: "",
                title: "ProgramUrl.Finterra",
                description: [
                    "Реклама офферов МФО разрешена через контентные сайты (seo трафик), контекст (яндексдирект, google adwords), баннеры (adspot/richmedia/sliding), таргетированная реклама в соц. сетях (vk, mt, tiktok), посты в группах/каналах (vk, tg, whatsapp), видео контент (youtube, rutube, vimeo), email – рассылки, rtb (real-time bidding).В то же время категорически недопустим спам в любых проявлениях: контекст на бренд, тизерные сети, таргетированная реклама в соц. сетях (fb, instagram), мобильные приложения (ios, android), брокерский трафик, колл-центр, api трафик, дорвеи, cashback/промокоды, sms – рассылки, рассылки в мессенджерах (tg, whatsapp, viber), чат-боты (tg, whatsapp, vk), push - уведомления, clickunder/popunder/popup, мотивированный трафик."
                ]
            },
            offers: {
                title: "Офферы МФО Финтерра для зарегистрированных партнеров Пампаду",
                description: "Зарегистрируйтесь и получите доступ к финансовым офферам надежных МФО с выплатами до 1580 за целевое действие",
                cards: [
                    {
                        title: "Финтерра - Займ онлайн",
                        type: "OfferType.Basic",
                        commission: 1580,
                        icon: "require('images/affiliate-program/mfo/Finterra_1.webp')",
                        basicLink: "https://agents.pampadu.ru/#/register/"
                    }
                ]
            },
            partner: {
                subtitle: "Кому подойдут партнерские программы?"
            }
        }
    },
    {
        name: "Кнопка деньги",
        type: "mfoOffer",
        meta: {
            title: "Партнерская программа Кнопка деньги  - подключиться",
            description: "Станьте агентом партнерской программы Кнопка деньги и получайте коммиссионное вознаграждение привлекая новых клиентов, регистрируйтесь на платформе Пампаду и зарабатывайте"
        },
        url: "ProgramUrl.KnopkaDengi",
        blocks: {
            intro: {
                img: "require('images/affiliate-program/mfo/KnopkaDengi_1.webp')",
                title: "Партнерские программы Кнопка деньги",
                description: "Присоединяйтесь к партнерским программам МФО и получайте комиссионное вознаграждение за выданные микрозаймы"
            },
            aboutProgram: {
                logoOnImg: "require('images/affiliate-program/mfo/KnopkaDengi_1.webp')",
                image: "",
                title: "ProgramUrl.KnopkaDengi",
                description: [
                    "Реклама офферов МФО разрешена через seo трафик, публичные страницы/группы/сообщества в соц.сетях, контекстная реклама (yandexdirect, google adwords, begun), таргетированная реклама, popup реклама, тизерная сеть, приложения/игры в социальных сетях, дорвейный трафик, e-mail рассылка, e-mail спам.В то же время категорически недопустим спам в любых проявлениях: мотивированный (стимулирующий) трафик, контекстная реклама на бренд."
                ]
            },
            offers: {
                title: "Офферы МФО Кнопка деньги для зарегистрированных партнеров Пампаду",
                description: "Зарегистрируйтесь и получите доступ к финансовым офферам надежных МФО с выплатами до 1580 за целевое действие",
                cards: [
                    {
                        title: "Кнопка деньги - Займ",
                        type: "OfferType.Basic",
                        commission: 1580,
                        icon: "require('images/affiliate-program/mfo/KnopkaDengi_1.webp')",
                        basicLink: "https://agents.pampadu.ru/#/register/"
                    }
                ]
            },
            partner: {
                subtitle: "Кому подойдут партнерские программы?"
            }
        }
    },
    {
        name: "OneClickMoney",
        type: "mfoOffer",
        meta: {
            title: "Партнерская программа OneClickMoney  - подключиться",
            description: "Станьте агентом партнерской программы OneClickMoney и получайте коммиссионное вознаграждение привлекая новых клиентов, регистрируйтесь на платформе Пампаду и зарабатывайте"
        },
        url: "ProgramUrl.OneClickMoney",
        blocks: {
            intro: {
                img: "require('images/affiliate-program/mfo/OneClickMoney_1.webp')",
                title: "Партнерские программы OneClickMoney",
                description: "Присоединяйтесь к партнерским программам МФО и получайте комиссионное вознаграждение за выданные микрозаймы"
            },
            aboutProgram: {
                logoOnImg: "require('images/affiliate-program/mfo/OneClickMoney_1.webp')",
                image: "",
                title: "ProgramUrl.OneClickMoney",
                description: [
                    "Реклама офферов МФО разрешена через контентные сайты (seo трафик), контекст (яндексдирект, google adwords), баннеры (adspot/richmedia/sliding), тизерные сети, таргетированная реклама в соц. сетях (vk, mt, tiktok), посты в группах/каналах (vk, tg, whatsapp), мобильные приложения (ios, android), дорвеи, рассылки в мессенджерах (tg, whatsapp, viber), чат-боты (tg, whatsapp, vk).В то же время категорически недопустим спам в любых проявлениях: контекст на бренд, таргетированная реклама в соц. сетях (fb, instagram), видео контент (youtube, rutube, vimeo), брокерский трафик, колл-центр, api трафик, cashback/промокоды, email – рассылки, sms – рассылки, push - уведомления, rtb (real-time bidding)."
                ]
            },
            offers: {
                title: "Офферы МФО OneClickMoney для зарегистрированных партнеров Пампаду",
                description: "Зарегистрируйтесь и получите доступ к финансовым офферам надежных МФО с выплатами до 1610 за целевое действие",
                cards: [
                    {
                        title: "OneClickMoney - Онлайн заем",
                        type: "OfferType.Basic",
                        commission: 1610,
                        icon: "require('images/affiliate-program/mfo/OneClickMoney_1.webp')",
                        basicLink: "https://agents.pampadu.ru/#/register/"
                    }
                ]
            },
            partner: {
                subtitle: "Кому подойдут партнерские программы?"
            }
        }
    }
]