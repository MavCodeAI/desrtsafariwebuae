interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export default function LoadingSpinner({ size = 'md', text }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className={`relative ${sizeClasses[size]}`}>
        <div className="absolute inset-0 border-4 border-[#d4af37]/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-[#d4af37] rounded-full border-t-transparent animate-spin"></div>
      </div>
      {text && (
        <p className="mt-4 text-gray-400 text-center">{text}</p>
      )}
    </div>
  );
}
