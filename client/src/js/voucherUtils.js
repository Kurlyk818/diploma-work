const expectedVoucher = "CELEBRATE20";
const setLocalStorageVoucherValue = (value) => localStorage.setItem("voucher", JSON.stringify(value));

export { expectedVoucher, setLocalStorageVoucherValue }