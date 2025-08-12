export const validateAddress = (fields) => {
  const errors = {};

  if (!fields.name.trim()) errors.name = 'Name is required';
  if (!fields.contactNumber.trim()) errors.contactNumber = 'Contact Number is required';
  else if (!/^\d{10}$/.test(fields.contactNumber)) errors.contactNumber = 'Must be 10 digits';

  if (!fields.house.trim()) errors.house = 'House name is required';

  if (!fields.pincode.trim()) errors.pincode = 'Pincode is required';
  else if (!/^\d{6}$/.test(fields.pincode)) errors.pincode = 'Must be 6 digits';

  if (!fields.city.trim()) errors.city = 'City is required';
  if (!fields.state.trim()) errors.state = 'State is required';

  return errors;
};
