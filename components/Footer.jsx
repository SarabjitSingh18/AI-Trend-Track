export default function Footer() {
    return (
      <footer className="bg-gray-950 mt-3 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          {/* Branding */}
          <div className="text-2xl font-bold">AI SaaS by sarv</div>
          <p className="text-gray-400 mt-2">Empowering AI Solutions for Everyone</p>
  
          {/* Divider */}
          <div className="w-24 border-t-2 border-gray-600 mx-auto my-4"></div>
  
          {/* Social Icons (Static) */}
          <div className="flex justify-center space-x-6 text-gray-400 text-lg">
            <div className="cursor-default">🐦 Twitter</div>
            <div className="cursor-default">💼 LinkedIn</div>
            <div className="cursor-default">🐙 GitHub</div>
          </div>
  
          {/* Copyright */}
          <div className="text-gray-500 text-sm mt-4">
            © {new Date().getFullYear()} AI SaaS by sarv. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  