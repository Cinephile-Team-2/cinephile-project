const Icon = ({ icon, className = "", ...props }) => {
  return (
    <i 
      className={`${icon} ${className} transition-colors`} 
      {...props} 
    />
  );
};

export default Icon;