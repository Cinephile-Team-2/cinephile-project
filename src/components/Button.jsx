const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseClasses =
    "font-spline font-bold uppercase tracking-widest transition-all focus:outline-none active:scale-95 hover:cursor-pointer";
  
  const variants = {

    primary: 'bg-primary text-bg hover:brightness-110 shadow-lg shadow-primary/10',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-bg',
    ghost: 'border border-white/10 bg-white/5 text-white font-semibold px-10 py-4 rounded-2xl hover:bg-white/10 transition-colors duration-200'

  };

  const sizes = {
    sm: 'px-5 py-2 rounded-sm text-[10px]',
    md: 'px-8 py-3 rounded-md text-xs',
    lg: 'px-14 py-4 rounded-xl text-sm', 
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;