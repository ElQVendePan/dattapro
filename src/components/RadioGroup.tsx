import React from 'react';

// 1. Definimos las props que el componente recibirá
interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  selectedValue: string | null;
  // Pasamos el evento completo para que el padre pueda manejarlo
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

// 2. Definimos el componente con React.FC y sus props
const RadioGroup: React.FC<RadioGroupProps> = ({ name, options, selectedValue, onChange }) => {
  return (
    <div className="space-y-3">
      {options.map((option) => (
        <label
          key={option.value}
          className={`flex items-center gap-3 p-4 border-2 rounded-2xl cursor-pointer duration-200 transition-all ${
            selectedValue === option.value
              ? 'border-primary bg-primary/20' // Estilo seleccionado
              : 'border-bg-third' // Estilo por defecto
          }`}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onChange}
            className="sr-only" // Oculta el radio nativo
          />
          {/* Círculo de radio personalizado */}
          <span className={`w-5 h-5 rounded-full border-2 ${selectedValue === option.value ? 'border-primary' : 'border-bg-third'} flex-shrink-0 flex items-center justify-center`}>
            <span className={`${selectedValue === option.value ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} w-2.5 h-2.5 rounded-full bg-primary duration-200`}></span>
          </span>
          <span className="font-medium opacity-90">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;