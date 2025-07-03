const PaymentOption = ({ value, label, selected, onChange }) => (
  <label className="flex items-center gap-2 cursor-pointer">
    <input
      type="radio"
      name="payment"
      value={value}
      checked={selected === value}
      onChange={() => onChange(value)}
      className="accent-slate-950 w-5 h-5"
    />
    <span>{label}</span>
  </label>
);

export default PaymentOption;
