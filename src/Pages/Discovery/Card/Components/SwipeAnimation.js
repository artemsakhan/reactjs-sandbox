import {motion, useTransform} from 'framer-motion';
import UIConfig from "../../../../UIConfig";


export const SwipeAnimation = ({x}) => {
    const xInput = [0, 50];

    const color = useTransform(x, xInput, [
        // 'rgb(225,255,255)',
        'rgba(255,255,255,0)',
        '#000'
        // UIConfig.Colors.Primary
    ]);

    const opacity = useTransform(x, xInput, [0, 1]);

    const tickPath = useTransform(x, [5, 50], [0, 1]);

    const scale = useTransform(x, [0, 50], [0.5, 1]);

    return (
        <div
            style={{
                // x,
                background: 'transparent',
                width: '100%',
                height: 'calc(100% - 75px)',
                position: 'absolute',
                top: '0',
                left: '0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pointerEvents: 'none',
                zIndex: 999
            }}
        >
            <motion.svg
                style={{
                    // scale,
                    width: '50%',
                    height: '50%'
                }}
                viewBox="0 0 50 50"
            >
                <motion.circle cx="25" cy="10" r="10" fill={'#000'} opacity={opacity}/>

                {/* like */}
                {/*<motion.g transform="translate(19, 4) scale(0.5)">*/}
                {/*    <motion.path*/}
                {/*        fill="none"*/}
                {/*        strokeWidth="2"*/}
                {/*        stroke="white"*/}
                {/*        strokeLinecap="round"*/}
                {/*        strokeLinejoin="round"*/}
                {/*        // d="M17 26 L23 30.5 L35 20"*/}
                {/*        d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"*/}
                {/*        style={{*/}
                {/*            pathLength: tickPath,*/}
                {/*            opacity: useTransform(tickPath, [0.001, 0.01], [0, 1])*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</motion.g>*/}
                <motion.svg viewBox="0 0 64 64" width="64" height="64">
                    <motion.path
                        d="M 32 54 C 32 54 7 40 7 23 C 7 16.803 11.374 11.468 17.45 10.252 C 23.527 9.037 29.617 12.28 32 18 L 32 18 C 34.383 12.28 40.473 9.037 46.55 10.252 C 52.626 11.468 57 16.803 57 23 C 57 40 32 54 32 54 Z"
                        stroke="hsl(0, 0%, 100%)"
                        strokeWidth="4"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        fill="transparent"
                        pathLength="1"
                        strokeDashoffset="0px"
                        strokeDasharray="1px 1px"
                        style={{
                            scale: 0.5,
                            pathLength: tickPath,
                            opacity: useTransform(tickPath, [0.001, 0.01], [0, 1]),
                        }}
                    />
                </motion.svg>
            </motion.svg>
        </div>
    );
};