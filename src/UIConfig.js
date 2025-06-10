// test it out #FBAB7E

const colorPrimary = 'rgba(241, 255, 10, 1)'
// const colorBackgroundDark = 'rgba(39, 46, 58, 1)';
const colorBackgroundLight = 'rgba(176, 176, 176, 1)';
// const colorBackgroundMedium = 'rgba(55, 63, 76, 1)';

const colorBackgroundDark = '#131313';//'linear-gradient(rgb(22 22 34) 10%, rgb(19 27 24) 80%)'//'#1e1e25';
const colorBackgroundMedium = 'rgb(24 26 35)';//'rgb(31 34 45)';//'rgb(43 43 45)';//'rgb(56 56 67)'//'#2d2d36';
// const colorBackgroundLight = 'white';

const primaryFontFamily = "'Roboto', sans-serif";

const UIConfig = {
    Fonts: {
        Primary: primaryFontFamily,
    },
    Colors: {
        Primary: colorPrimary,
        BackgroundMedium: colorBackgroundMedium,
        BackgroundLight: colorBackgroundLight,
        BackgroundDark: colorBackgroundDark,
        BackgroundMediumDisabled: 'rgb(35 38 52)',
        BackgroundWhite: 'rgb(245 245 245)',
    },
    TabBar: {
        Content: {
            color: '#FFF',
            height: '80px',
        },
        Icon: {
            Background: '#FFF',
            Color: '#000',
        },
        IconActive: {

        }
    },
    Card: {
        Feature: {
            background: colorPrimary,
            color: '#000',
            fontSize: '16px',
        },
        Content: {
            borderRadius: '35px',
            // background: colorBackgroundDark,
            // background: colorBackgroundLight,
            background: colorBackgroundMedium,
        },
        LikeButton: {
            background: 'rgb(35 38 52)',//'rgb(47 52 70)',
            borderRadius: '35px',
            color: "#fff",
            fontSize: '24px',
            height: '55px',
        },
        PassButton: {
            // background: "#232427",
            color: "#fff",
            borderRadius: "35px",
            // border: '1px solid #fff',
        },
        Header: {
            background: colorBackgroundDark,
            color: "#FFF",
        }
    },
    Typography: {
        Card: {
            Title: {
                fontSize: '21px',
                fontFamily: primaryFontFamily,
                fontWeight: 'bold',
                color: '#FFFFFF',
                lineHeight: '20px',
                letterSpacing: '0.5px',
            },
            SubTitle: {
                fontFamily: primaryFontFamily,
                color: colorBackgroundLight,
                fontSize: '13px',
                fontWeight: 400,
                // color: '#B0B0B0',
                lineHeight: '16px',
                letterSpacing: '0.4px',
            },
            AboutMe: {
                fontFamily: primaryFontFamily,
                fontSize: '15px',
                fontWeight: 400,
                color: '#FFF',
                lineHeight: '16px',
                letterSpacing: '0.4px',
            }
        }
    }
};

export default UIConfig;
