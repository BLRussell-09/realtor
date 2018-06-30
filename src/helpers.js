const formatPrice = (aNumber) =>
{
  return aNumber.toLocaleString(
    'en-US',
    {
      style: 'currency',
      currency: 'USD',
    }
  );
};

export {formatPrice};
