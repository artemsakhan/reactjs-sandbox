import React from 'react';
import BodyShape from "../../../../Shapes/BodyShape";
import RulerShape from "../../../../Shapes/RulerShape";
import UIConfig from "../../../../UIConfig";

const LabelStack = ({height, bodyType}) => {
    if (!height && !bodyType) {
        return null;
    }

    return (
        <div className="cardLabelStack" style={containerStyle}>

            {
                bodyType && (
                    <span className="cardLabelItem" style={{
                            ...labelStyle,
                        }}>
                        <BodyShape width={14} height={14} style={{ marginRight: '2px'}}/>
                        {bodyType}
                    </span>
                )
            }
            {
                height && (
                    <span className="cardLabelItem" style={labelStyle}>
                        <RulerShape width={14} height={14} style={{ marginRight: '2px'}}/>
                        {height}
                    </span>
                )
            }
        </div>
    );
};

const containerStyle = {
    position: 'absolute',
    bottom: '67px',
    left: '7px',
    display: 'flex',
    flexWrap: 'wrap',
    width: 'calc(100% - 100px)',
    color: 'white',
    textAlign: 'left',
    height: '30px',
    alignItems: 'center',
    gap: '5px',
    overflow: 'hidden',
};

const labelStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: 'rgb(104 104 105 / 60%)',
    borderRadius: '15px',
    padding: '2px 10px 2px 8px',
    height: '26px',
    whiteSpace: 'nowrap',
    fontSize: '13px',

};

export default LabelStack;
