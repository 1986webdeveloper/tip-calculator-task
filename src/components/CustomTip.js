const CustomTip = ({ tip, onCustom }) => {
  return (
    <input
      type="number"
      placeholder="Custom"
      className="custom-btn"
      value={tip.active === "custom" ? tip.value : ""}
      onChange={(e) => onCustom("custom", e.target.value)}
      onClick={() => onCustom("custom", tip.value || null)}
      onKeyDown={(evt) =>
        ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
      }
    />
  );
};

export default CustomTip;
