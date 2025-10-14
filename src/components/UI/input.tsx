import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

const Input = ({ 
  label, 
  error, 
  helperText,
  required,
  className = '',
  ...props 
}: InputProps) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      <input
        {...props}
        required={required}
        className={`
          w-full px-4 py-2 
          border rounded-lg
          focus:ring-2 focus:border-transparent
          transition-colors
          ${error 
            ? 'border-red-500 focus:ring-red-500' 
            : 'border-gray-300 focus:ring-blue-9 dark:focus:ring-purple-9'
          }
          dark:bg-gray-700 dark:border-gray-600 dark:text-white
          disabled:opacity-50 disabled:cursor-not-allowed
          ${className}
        `}
      />
      
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
      
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;