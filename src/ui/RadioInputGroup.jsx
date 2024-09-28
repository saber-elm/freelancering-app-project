import RadioInput from "./RadioInput";

function RadioInputGroup({ register, errors, watch, configs }) {
  const { name, validationSchema = {}, options } = configs;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-x-8">
        {options.map(({ label, value }) => (
          <RadioInput
            key={value}
            label={label}
            value={value}
            id={value}
            name={name}
            register={register}
            validationSchema={validationSchema}
            errors={errors}
            watch={watch}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RadioInputGroup;
