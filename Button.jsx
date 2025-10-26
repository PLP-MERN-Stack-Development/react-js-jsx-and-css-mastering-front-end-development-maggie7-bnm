const Button = ({ variant = 'primary', children, ...props }) => {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-colors"
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600"
  }
  
  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  )
}

export default Button