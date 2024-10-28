// test it out #FBAB7E

const colorPrimary = 'rgba(241, 255, 10, 1)'
// const colorBackgroundDark = 'rgba(39, 46, 58, 1)';
const colorBackgroundLight = 'rgba(176, 176, 176, 1)';
// const colorBackgroundMedium = 'rgba(55, 63, 76, 1)';

const colorBackgroundDark = '#1e1e25';
const colorBackgroundMedium = 'rgb(56 56 67)'//'#2d2d36';
// const colorBackgroundLight = 'white';

const primaryFontFamily = "'Roboto', sans-serif";

const UIConfig = {
    Fonts: {
        Primary: primaryFontFamily,
    },
    Colors: {
        Primary: colorPrimary,
        BackgroundMedium: colorBackgroundLight,
        BackgroundLight: colorBackgroundLight,
        BackgroundDark: colorBackgroundDark,
    },
    TabBar: {
        Content: {
            background: colorBackgroundDark,
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
            background: colorPrimary,
            borderRadius: '35px',
            color: "#000",
            fontSize: '24px',
            height: '55px',
        },
        PassButton: {
            background: "#FFF",
            color: "#000",
            borderRadius: "35px"
        },
        Header: {
            background: colorBackgroundDark,
            color: "#FFF",
        }
    },
    Typography: {
        Card: {
            Title: {
                fontSize: '19px',
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
