const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Task Manager App. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-blue-300">Privacy Policy</a>
          <a href="#" className="hover:text-blue-300">Terms of Service</a>
          <a href="#" className="hover:text-blue-300">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer