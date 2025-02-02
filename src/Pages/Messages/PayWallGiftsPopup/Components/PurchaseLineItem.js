import DiamondSimpleShape from "../../../../Shapes/DiamondSimpleShape";
import UIConfig from "../../../../UIConfig";

const PurchaseLineItem = ({style, unitAmount, price, isPreSelected, discountValue}) => {
    return (
        <div style={{
            ...containerStyle,
            ...style,
            ...(!isPreSelected ? {
                background: 'transparent',
                color: UIConfig.Colors.Primary,
            } : null)
        }}
        >
            <div style={unitAmountStyle}>
                <div>{unitAmount}&nbsp;x</div>
                <DiamondSimpleShape
                    width={30}
                    height={30}
                    style={iconStyle}
                    fillColor={!isPreSelected ? UIConfig.Colors.Primary : '#000'}
                />
            </div>
            <div style={priceStyle}>
                {price} Stars
            </div>
            {discountValue && (
                <div style={discountStyle}>Save {discountValue}%</div>
            )}
        </div>
    )
}

const discountStyle = {
    background: "rgb(19, 27, 24)", // Dark grey background
    color: "#fff",
    fontSize: "12px",
    fontWeight: "normal",
    padding: "8px 15px",
    borderRadius: "20px",
    border: `2px solid ${UIConfig.Colors.Primary}`,
    position: "absolute",
    bottom: "-15px",
    left: "50%",
    transform: "translateX(-50%)",
}

const iconStyle = {
    marginBottom: '10px',
}

const containerStyle = {
    width: 'calc(100% - 60px)',
    height: '50px',
    background: UIConfig.Colors.Primary,
    border: `2px solid ${UIConfig.Colors.Primary}`,
    borderRadius: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#000',
    position: 'relative',
};

const unitAmountStyle = {
    marginLeft:'18px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '600',
}

const priceStyle = {
    marginRight: '18px',
}
export default PurchaseLineItem;