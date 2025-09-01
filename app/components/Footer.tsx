export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🚀</span>
              <span className="text-xl font-bold">DMAZ Alyxers</span>
            </div>
            <p className="text-gray-400 mb-4">
              Platform all-in-one untuk berbagai kebutuhan digital Anda. 
              Dari download media hingga AI assistant, semua ada di sini!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                📧 Email
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                📱 WhatsApp
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                🐙 GitHub
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/tools/tiktok" className="hover:text-white transition-colors">TikTok Downloader</a></li>
              <li><a href="/tools/instagram" className="hover:text-white transition-colors">Instagram Tools</a></li>
              <li><a href="/tools/ai" className="hover:text-white transition-colors">AI Assistant</a></li>
              <li><a href="/tools/cuaca" className="hover:text-white transition-colors">Info Cuaca</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DMAZ Alyxers. Dibuat dengan ❤️ oleh Dimas Maulana.</p>
        </div>
      </div>
    </footer>
  )
}
