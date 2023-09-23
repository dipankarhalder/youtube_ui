export function Input({
  label,
  type = 'text',
  valText,
  register,
  required = false,
}) {
  return (
    <input
      placeholder={label}
      type={type}
      {...register(valText, { required })}
    />
  );
}
