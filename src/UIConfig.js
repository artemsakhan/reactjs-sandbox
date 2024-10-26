// test it out #FBAB7E

const colorPrimary = 'rgba(241, 255, 10, 1)'
const colorBackgroundDark = 'rgba(39, 46, 58, 1)';
const colorBackgroundLight = 'rgba(176, 176, 176, 1)';

const primaryFontFamily = "'Roboto', sans-serif";

const UIConfig = {
    Colors: {
        Primary: colorPrimary,
        BackgroundMedium: colorBackgroundLight,
        BackgroundLight: colorBackgroundLight,
    },
    Card: {
        Background: "#fff",
        Feature: {
            background: colorPrimary,
            color: '#000',
            fontSize: '14px',
        },
        Content: {
            borderRadius: '35px',
            background: colorBackgroundDark,
        },
        LikeButton: {
            background: colorPrimary,
            borderRadius: '35px',
            color: "#000",
            fontSize: '24px',
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
                fontSize: '14px',
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
