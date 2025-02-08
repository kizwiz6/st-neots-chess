export default function Footer() {
    return (
      <footer className="bg-slate-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© St Neots Chess Club {new Date().getFullYear()}</p>
          <p className="mt-2 text-sm">
            Released under the MIT License
          </p>
        </div>
      </footer>
    );
  }